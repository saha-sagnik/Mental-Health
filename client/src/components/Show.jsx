import { useSelector } from "react-redux";

const Show = ()=>{
    const info = useSelector(Store=>Store.info.info) ;
    console.log(info);
    return(
        <>hii</>
    )
}