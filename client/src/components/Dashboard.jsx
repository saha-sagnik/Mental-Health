import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const generateListItems = () => {
        const items = [
            { label: 'Phone', value: '1234567890' },
            { label: 'Emergency', value: '108' },
            // Add more items as needed
        ];

        return items.map((item, index) => (
            <li key={index} className="items-center py-3">
                <span>{item.label}</span><br />
                <span className="ml-auto">{item.value}</span>
            </li>
        ));
    };

    return (
        <div className="w-full md:w-3/12">
            <div className="p-3">
                <ul className="text-sm font-semibold text-gray-500 hover:text-gray-700 py-2 px-3 mt-3 divide-y rounded bg-white">
                    {generateListItems()}
                </ul>
            </div>
        </div>
    );
}

const RightSide = () => {
    const [data,setData] = useState();

    useEffect( ()=>{
        const info = JSON.parse(localStorage.getItem('diagonsis')); 
        setData(info);
   },[]);

    const generateTabs = () => {
        const tabs = [
            {label: 'Overview', color: 'blue-500', linkto: '#' },
            {label: 'Assessments', color: 'blue-800', linkto: '#' },
            {label: 'Therapy Sessions', color: 'blue-500', linkto: '#' },
            {label: 'Goals and Progress', color:'blue-500',linkto:'#'},
            {label:'Community Services', color:'blue-500',linkto:'#'},
            {label:'Survey',color:'blue-500',linkto:'#'},
        ];

        return tabs.map((tab, index) => (
            <li key={index} className="mr-1">
                <a className={`rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-${tab.color} hover:text-blue-800 font-semibold`} href={tab.href}>{tab.label}</a>
            </li>
        ));
    };

    return (
        <div className="w-full mx-2 md:block lg:block md:-mt-24 sm:mt-0">
            <div className="hidden md:block lg:block">
                <ul className="flex bg-white">
                    {generateTabs()}
                </ul>
            </div>
            <div className="bg-white p-3 text-red-700 rounded-sm">
               {data?.disorder_name}
            
            <div>
                {data?.assessment.map((x)=>{
                    return(
                        <h1>{x}</h1>
                    )
                })}
            </div>
            </div>
        </div>
    );
}

const Dashboard = () => {
    return (
        <>
            <div className="bg-blue-300 flex justify-between">
                <div className="max-w-7xl px-4 py-6 bg-blue-300 sm:px-6 lg:px-8 hidden lg:block md:block">
                    <img className="flex-1 w-48 h-48 rounded-full shadow-lg" src="/" alt="" />
                </div>
                <div className="bg-blue-300 max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-sans tracking-tight text-gray-900">
                        Sagnik
                    </h1>
                    <p className="ml-10"></p>
                </div>
                <div className="bg-blue-300 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                        <div className="flex-1">
                            {/* Rest of content */}
                        </div>
                        <div className="space-x-4 hidden lg:block md:block justify-end">
                            <Link to="/"><button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Take a Test</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl py-0">
                <div className="md:flex no-wrap md:-mx-2">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
            
        </>
    );
}

export default Dashboard;
