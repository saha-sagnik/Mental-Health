import { useEffect } from "react";
import { useSelector } from "react-redux";
import Store from "../store/Store";
import axios from "axios";

const Show = ()=>{
    const info = useSelector(Store=>Store.info.info) ;
    useEffect(()=>{
        console.log(info)
    },[]);

    async function submit(){
        try{
            await axios.post("http://localhost:5001/info",{
                info
            })
            .then(res=>{
                console.log(res)
            })
        }
        catch(e){
            console.log(e);
        }
    }
    submit();
    return(
        <>hii</>
    )
}

export default Show;