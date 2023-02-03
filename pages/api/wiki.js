// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { OpenAIApi, Configuration } from "openai"

const configuration = new Configuration({
	// apiKey: process.env.OPENAI_API_KEY
	apiKey: "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"
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const result = {
      title : "This is a simple title",
      summary: "A Song of Ice and Fire is a series of fantasy novels written by George R.R. Martin. The books tell the story of a world called Westeros, where seven noble families fight for control of the Iron Throne. The main characters are members of these families, and they"
    }
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

