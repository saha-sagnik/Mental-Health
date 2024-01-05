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
        <h1 className="text-4xl" >Your Responses</h1>
            {
                info.map((x)=>{
                    return(
                        <div>
                            <h1>{x.ques}</h1>
                            <h1>{x.data}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Show;