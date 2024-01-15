import React from 'react';

const RightSide = ({Result}) => {
    console.log(Result);
    const generateTabs = () => {
        const tabs = [
            { label: 'Overview', color: 'blue-500', href: '#' },
            { label: 'Assessments', color: 'blue-800', href: '#' },
            { label: 'Therapy Sessions', color: 'blue-500', href: '#' },
            { label: 'Goals and Progress', color: 'blue-500', href: '#' },
            { label: 'Community Services', color: 'blue-500', href: '#' },
            { label: 'Survey', color: 'blue-500', href: '#' },
        ];

        return tabs.map((tab, index) => (
            <li key={index} className="mr-1">
                <a className={`rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-${tab.color} hover:text-blue-800 font-semibold`} href={tab.href}>{tab.label}</a>
                {tab.label=="Assessments"?
                <p>{Result?.resultInfo?.assessment}</p>
                :""}
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
            <div className="bg-white p-3  rounded-sm">


            </div>

        </div>
    );
}

export default RightSide;