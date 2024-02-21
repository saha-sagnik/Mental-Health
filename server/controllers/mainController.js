const User = require('../models/user');
const gpt = require('./gpt');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');

exports.home = asyncHandler((req,res)=>{
    console.log("Home rendered");
})

exports.signup = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, age, phno } = req.body;

  if (firstName=="" || !lastName=="" || email=="" || password=="" || !age || !phno) {
      throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
      console.log("A user with this email already exists");
      return res.json({ exists: true });
  }

  const user = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password,
      age,
      phoneNumber: phno
  });

  if (!user) {
      throw new ApiError(500,"The user could not be created");
  }

  const createdUser = await User.findById(user._id);

  if (!createdUser) {
      console.log("Failed to retrieve created user");
      return res.json({ signedUp: false });
  }

  return res.json({ signedUp: true });
});

exports.checkUser = asyncHandler(async(req,res)=>{
    const email = req.session.email;
    console.log("Check User Function",email);

    if(!email) {
      console.log("No email session variable found.");
      return res.json({ isloggedIn: false });
    }else{
      return res.json({isloggedIn: true});
    }
})

// Login Normally
exports.login = asyncHandler(async(req,res)=>{

  const {email,password} = req.body;

  if(email=="" || password==""){
    throw new ApiError(400,"Both details are required");
  }

  const user = await User.findOne({ email, password });

  if (user) {
    req.session.email = email;
    return res.json({ exists: true, user });
  } else {
    return res.json({ exists: false });
  }
});

// Firebase Login
exports.postLogin = asyncHandler(async(req,res)=>{
  const email = req.body.data;

  if(!email){
    throw new ApiError(400,"Email was not received by server");
  }

  let user = await User.findOne({ email });

  if(!user){
    return res.json({exists: false});
  }
  else{
    console.log("User is present in DB");
    req.session.email = email;
    return res.json({exists: true});
  }

});

exports.logout = asyncHandler(async(req,res)=>{
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      throw new ApiError(500,'Internal Server Error');
    }
    return res.json({logout: true });
  });
});

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

