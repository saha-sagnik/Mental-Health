// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://open-ai21.p.rapidapi.com/chatgpt',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '545cfe54f1mshfa16dce1fd34858p105b1cjsn6d01dd1feb97',
//     'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
//   },
//   data: {
//     messages: [
//       {
//         role: 'user',
//         content: 'Please analyze and categorize the severity of mental health issues experienced by the individual labeled as XYZ. Use a scale of 0 to 5, where 0 represents no apparent issues, and 5 indicates severe mental health concerns. Consider various factors such as emotional well-being, behavior, and any noticeable symptoms. Additionally, provide insights into specific aspects that contribute to the assigned severity level'
//       }
//     ],
//     web_access: false
//   }
// };


// async function getResponse(){
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// }

// module.exports = getResponse;



const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Give me best 10 mental disorders that most people suffer from in points, one by one";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

module.exports = run;