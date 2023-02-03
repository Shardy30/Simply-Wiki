// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { OpenAIApi, Configuration } from "openai";
import axios from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

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
    if (s_type === "simple_summary") {
      completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Explain the contents of the wikipedia article on "${w_title}" using simplified vocabulary. Go into significant detail while still maintaining vocabulary that can be understood.`,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
    } else if (s_type === "explained_like_5") {
      completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Explain the contents of the article: "${w_link}" using the vocabulary of a 5 year old. Go into significant detail while still maintaining vocabulary that can be understood by a 5 year old child.`,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
    }
    w_title =
      wiki_response.data.query.pages[
        Object.keys(wiki_response.data.query.pages)[0]
      ].title;
    let content_body = completion.data.choices[0].text;

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
