import React from 'react';

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

export default LeftSide;