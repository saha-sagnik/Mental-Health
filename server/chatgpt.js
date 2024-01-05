require('dotenv').config();
const { OpenAI } = require('openai');


const openai = new OpenAI({
  key: process.env.CHATGPT_API_KEY, // replace with your actual API key
  version: 'v1',
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });

  console.log(completion.data.choices[0]);
}

module.exports = main;
