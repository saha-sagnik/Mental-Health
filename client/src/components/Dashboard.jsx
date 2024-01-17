import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


const Dashboard = () => {
    const Result = useSelector(store=>store.result);
    const user = useSelector(Store=>Store.info.user);
    useEffect(()=>{
      if(user===null){
        navigate('/login');
      }
    },[])
    return (
        <>
            <div className="bg-blue-300 flex justify-between">
                <div className="max-w-7xl px-4 py-6 bg-blue-300 sm:px-6 lg:px-8 hidden lg:block md:block">
                    <img className="flex-1 w-48 h-48 rounded-full shadow-lg" src="/" alt="" />
                </div>
                <div className="bg-blue-300 max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-sans tracking-tight text-gray-900">
                        {user.name}
                    </h1>
                    {
                        Result && <h1 className="text-3xl font-medium text-wrap tracking-tight text-red-900">
                                {Result?.resultInfo?.disorder_name}
                            </h1>
                    }
                    <p className="ml-10"></p>
                </div>
                <div className="bg-blue-300 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                        <div className="flex-1">
                            {/* Rest of content */}
                        </div>
                        {Result.resultInfo.length==0 &&
                            <div className="space-x-4 hidden lg:block md:block justify-end">
                                <Link to="/#footer" className="text-white hover:underline">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">
                                        Take a Test
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="max-w-7xl py-0">
                <div className="md:flex no-wrap md:-mx-2">
                    <LeftSide />
                    <RightSide Result={Result} />
                </div>
            </div>

        </>
    );
}

export default Dashboard;
