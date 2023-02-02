// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { OpenAIApi, Configuration } from "openai"

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const result = 2*5
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

