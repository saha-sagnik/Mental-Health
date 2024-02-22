import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Show = () => {

    const user = useSelector(Store=>Store.info.user);
    const info = useSelector(Store => Store.info.info);
    const navigate = useNavigate();
    useEffect(()=>{
      if(user===null){
        navigate('/login');
      }
    },[])

    const handleSubmit =async ()=>{
        const response = await axios.post('http://localhost:3000/info',{
            info
        })
    }


    return (
        <>

            { info && 
            <>
            <h1 className="text-4xl flex justify-center p-4 font-semibold font-sans" >Your Responses🤲</h1>
                <div>
                {info?.map((x) => {
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
                })}
                </div>
                </>
            }
            <div
            onClick={handleSubmit()}
            >
                Submit
            </div>
        </>
    )
}

export default Show;