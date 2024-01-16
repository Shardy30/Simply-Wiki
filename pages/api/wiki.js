// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function handler(req, res) {
  let { w_link, s_type } = req.body;
  w_link = w_link.split("#")[0];
  try {
    let w_title = w_link.replace("http://", "https://");
    w_title = w_title.replace("https://en.wikipedia.org/wiki/", "");
    if (w_title.includes("/")) {
      throw new Error();
    }
    let wiki_response = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&titles=${w_title}&explaintext=1&exsectionformat=plain&format=json`
    );
    let wiki_info =
      wiki_response.data.query.pages[
        Object.keys(wiki_response.data.query.pages)[0]
      ].extract;

    if (!wiki_info) {
      throw new Error();
    }
    let completion;
    // console.log(wiki_info.slice(0, 10));
    let prompt;
    if (s_type === "simple_summary") {
        prompt= `Explain the contents of the article: "${w_link}" using simplified vocabulary. Go into significant detail while still maintaining vocabulary that can be understood by even children.`;
    } else if (s_type === "explained_like_5") {
        prompt= `Explain the contents of the article: "${w_link}" using the vocabulary of a 5 year old. Go into significant detail while still maintaining vocabulary that can be understood by a 5 year old child.`;
    }
    try {
      completion = await openai.completions.create({
      prompt: prompt,
      model: 'gpt-3.5-turbo-instruct',
      temperature: 0.7,
      max_tokens: 750,
    });
    console.log('Generated completion');
  } catch (error) {
    console.error('Error:', error.message);
  }
    w_title =
      wiki_response.data.query.pages[
        Object.keys(wiki_response.data.query.pages)[0]
      ].title;
    let content_body = completion.choices[0].text;
    // console.log(content_body);
    while (content_body.slice(0, 1) === "\n") {
      content_body = content_body.slice(1);
    }
    const result = { title: w_title, summary: content_body };
    res.status(200).send({ result });
  } catch (err) {
    const result = { title: "Error", summary: "Failed to fetch data" };
    res.status(500).send({ result });
  }
}
