import React from 'react'

const TransactionCard = (props) => {
    return (
        <div className="flex gap-0 m-3  w-[16.6rem] h-[2.7rem]  text-white bg-[#19191b] rounded-lg justify-between p-2 shadow-lg shadow-[#06060a]">
            <div className='flex flex-col justify-center pl-1'>
                <div className='flex gap-1'>
                    <p className=' text-start text-[0.70rem]'>{props.sender ? `${props.sender}` : '------------'}</p>
                    <p className='text-center text-[0.70rem] text-[#CA8A04]'> <u>to</u></p>
                    <p className=' text-start text-[0.70rem]'>{props.receiver ? `${props.receiver}` : '------------'}</p>
                </div>
                <div>
                    <p className=' text-[0.6rem]'><u>{props.reason ? `${props.reason}` : '------------------'}</u></p>
                </div>
            </div>
            <div className=' flex flex-col justify-center'>
                <p className=' text-end text-[1.1rem] text-[#28FF00] mr-1'>{props.amount ? `${props.amount}` : '--'}</p>
                <p className='text-left text-[0.5rem]'>{props.date ? `${props.date}` : '--------'}</p>
            </div>
        </div>
    )
}

export default TransactionCard


{/* <div className="flex gap-0 m-3  w-[16.6rem] h-[2.7rem]  text-white bg-[#19191b] rounded-lg justify-between p-2 shadow-lg shadow-[#06060a]">
            <div className='flex flex-col justify-center pl-1'>
                <div className='flex gap-1'>
                    <p className=' text-start text-[0.70rem]'>{props.sender ? `${props.sender}` : '------------'}</p>
                    <p className='text-center text-[0.70rem] text-[#CA8A04]'> <u>to</u></p>
                    <p className=' text-start text-[0.70rem]'>{props.receiver ? `${props.receiver}` : '------------'}</p>
                </div>
                <div>
                    <p className=' text-[0.6rem]'><u>{props.reason ? `${props.reason}` : '------------------'}</u></p>
                </div>
            </div>
            <div className=' flex flex-col justify-center'>
                <p className=' text-end text-[1.1rem] text-[#28FF00] mr-1'>{props.amount ? `${props.amount}` : '--'}</p>
                <p className='text-left text-[0.5rem]'>{props.date ? `${props.date}` : '--------'}</p>
            </div>
        </div> */}



