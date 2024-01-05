import { useEffect } from "react";
import { useSelector } from "react-redux";
import Store from "../store/Store";
import axios from "axios";

const Show = ()=>{
    const info = useSelector(Store=>Store.info.info) ;
    useEffect(()=>{
        // console.log(info)
    },[]);

    async function submit(){
        try{
            await axios.post("http://localhost:5001/info",{
                info
            })
            .then(res=>{
                // console.log(res)
            })
        }
        catch(e){
            console.log(e);
        }
    }
    submit();
    return(
        <>
          
        <h1 className="text-4xl flex justify-center bg-red-400 p-4 font-semibold font-sans" >Your Responses🤲</h1>
            {
                
                info.map((x)=>{
                    return(
                        <div className="bg-black flex-col items-center justify-center ">
                        <div className="flex flex-row gap-4 bg-slate-400 w-[50vw] justify-center">
                            <h1 className="bg-yellow-500 text-pretty text-lg">{x.ques}</h1>
                            
                            {x?.data.map((ans)=>{
                                return (
                                    <h1 className="bg-red-500">{ans}</h1>
                                )
                            })}
                            </div>
                        </div>
                    )
                })
            }
              
        </>
    )
}

export default Show;