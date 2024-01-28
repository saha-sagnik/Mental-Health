import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";
import { addResult } from "../store/ResultSlice";


const Show = () => {

    const dispatch = useDispatch();
    const user = useSelector(Store=>Store.info.user);
    useEffect(()=>{
      if(user===null){
        navigate('/login');
      }
    },[])

    const info = useSelector(Store => Store.info.info);
    useEffect(() => {
        if(info.length==0){
            return;
        }
        let message = "These are the questions and its answers provided by the user for a questionnaire:";
        for (let i = 0; i < info.length; i++) {
            message=message+`Question${i+1}: `+info[i].ques+`Its Answer: `+info[i].data;
        }
        message+=`.From this questionnaire understand and diagnose from these disorders: Anxiety Disorders,Depression,PTSD,OCD,Bipolar Disorder,Schizophrenia,Eating Disorders,Substance Use Disorders,ADHD which disorder is the user likely to have? Give the response as a JSON object such that it has disorder name, assessment, tips and index number considering the options I gave above as an array.`
        run(message);
    },[]);

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI("AIzaSyDxXGwowqu_W0khhj5sEkSLgCcNkNW9ZrM");

    async function run(prompt) {
        console.log(prompt);
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const cleanedString = text.trim();
        const jsonString = cleanedString.match(/\{([^}]+)\}/)?.[1];
        dispatch(addResult(JSON.parse(`{${jsonString}}`)));
    }

    return (
        <>

            <h1 className="text-4xl flex justify-center p-4 font-semibold font-sans" >Your Responses🤲</h1>
            {

                info.map((x) => {
                    return (
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <div className="bg-slate-400 rounded-md p-4">
                                <h1>{x.ques}</h1>
                            </div>
                            <div className="bg-blue-200 rounded-md p-4">
                                <h1>{x.data}</h1>
                            </div>
                        </div>

                    )
                })
            }
            <div className="flex items-center justify-center py-4">
                <Link to='/dashboard' className="bg-blue-500 p-4 pt-2 rounded-md h-10 text-white hover:bg-blue-700">
                    Submit
                </Link>
            </div>

        </>
    )
}

export default Show;