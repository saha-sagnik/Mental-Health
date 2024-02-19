const User = require('../models/user');
const gpt = require('./gpt');
const { asyncHandler } = require('../utils/asyncHandler');

exports.home = asyncHandler((req,res)=>{
    console.log("Home rendered");
})

exports.signup = asyncHandler((req,res)=>{
    console.log(req.body);
})


exports.checkLogin = asyncHandler(async(req,res)=>{
    const email = req.params.email;
    console.log("Check Login Function",email);
    // Query MongoDB to check if a user with the provided email exists
    const user = await User.findOne({ email });

    if (user) {
      // If user exists, send a success response
      res.json({ exists: true });
    } else {
      // If user does not exist, send a failure response
      res.json({ exists: false });
    }
})

// exports.postLogin = asyncHandler(async(req, res) => {
//     console.log("User details from login", req.body);
//     const postEmail = req.body.data?.email;

//     let user = await User.findOne({ email: postEmail });

//     if (!user) {
//         console.log("No user found with the given credentials");
//         return res.redirect("http://localhost:5173/signup"); // Return the redirect response
//     }

//     console.log("Logged In successfully");
// });


exports.questionnaireInfo = asyncHandler(async (req,res)=>{
    console.log("This is the info that is coming from /info route: ",req.body.info);
    let message = "These are the questions and its answers provided by the user for a questionnaire:";
    for (let i = 0; i < req.body.info.length; i++) {
      message=message+`Question${i+1}: `+req.body.info[i].ques+`Its Answer: `+req.body.info[i].data;
    }
    console.log("This is the message that should be given as prompt:",message);
    message+=`.From this questionnaire understand and diagnose from these disorders: Anxiety Disorders,Depression,PTSD,OCD,Bipolar Disorder,Schizophrenia,Eating Disorders,Substance Use Disorders,ADHD which disorder
    is the user likely to have? Give the response as a JSON object such that it has disorder name, index number and the complete assessment considering the options I gave above as an array.`
    
    let GeminiResponse = await gpt(message);
    console.log("Gemini gives this response: ",GeminiResponse, typeof(GeminiResponse));
    
    // Remove leading/trailing white spaces, newlines, etc.
    const cleanedString = GeminiResponse.trim();
    
    // Extract the content between curly braces
    const jsonString = cleanedString.match(/\{([^}]+)\}/)?.[1];
    
    if (jsonString) {
      try {
        // Parse the extracted content as JSON
        const jsonObject = JSON.parse(`{${jsonString}}`);
        console.log('Extracted JavaScript object:', jsonObject);
        res.json(jsonObject);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else {
      console.log('No JavaScript object found in the string.');
    }
    
})

