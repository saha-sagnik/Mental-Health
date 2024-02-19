import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Show = () => {

    const user = useSelector(Store=>Store.info.user);
    const navigate = useNavigate();
    useEffect(()=>{
      if(user===null){
        navigate('/login');
      }
    },[])

    const info = useSelector(Store => Store.info.info);

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
                <Link to='/furtherquestions' className="bg-blue-500 p-4 pt-2 rounded-md h-10 text-white hover:bg-blue-700">
                    Further Questions
                </Link>
            </div>

        </>
    )
}

export default Show;