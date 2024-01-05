import { useEffect } from "react";
import { useSelector } from "react-redux";
import Store from "../store/Store";
import axios from "axios";

const Show = () => {
    const info = useSelector(Store => Store.info.info);
    useEffect(() => {
        // console.log(info)
    }, []);

    async function submit() {
        try {
            await axios.post("http://localhost:5001/info", {
                info
            })
                .then(res => {
                    console.log(res)
                    localStorage.setItem('diagonsis',JSON.stringify(res.data));
                })
        }
        catch (e) {
            console.log(e);
        }
    }
    submit();
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

        </>
    )
}

export default Show;