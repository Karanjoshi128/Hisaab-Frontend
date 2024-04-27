import React from 'react';


export const Card = (props) => {
    return (
        <div className={`w-[17rem] h-[10rem] rounded-3xl bg-[#1F2937]  relative`} style={{ marginTop: `${props.topValue}rem` }}>
            <div className="flex justify-center px-4 pt-4">
                <div className="flex flex-col pb-2 justify-center items-center">
                    <img className="w-20 h-20 rounded-full shadow-lg mt-[-0.3rem]" src={props.source} alt="Bonnie image" />
                    <div className="flex gap-2 m-3">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                    </div>
                </div>
            </div>
        </div>
    )
}