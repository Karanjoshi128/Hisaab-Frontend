import React , {useContext , useEffect} from 'react'
import { AppContext } from "../contexts/context";
import axios from "axios";


const Profile = (props) => {

    const { email, setEmail, password, setPassword, userInfo, setUserInfo, user, setUser } = useContext(AppContext);


    useEffect(() => {
        const currentUsername = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                const response = await axios.get(`/getallusers?paramName=${currentUsername}`);
                setUserInfo(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const onClickAddBalanceOne = async () => {
        try {
            const amount = 1;
            const currentUsername = localStorage.getItem("token");
            const response = await axios.post(`/transactionaddbal1?paramAmount=${amount}&paramUsername=${currentUsername}`, {
                username: userInfo.username,
            })
            setUserInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const onClickSubtractBalanceOne = async () => {
        try {
            const amount = 1;
            const currentUsername = localStorage.getItem("token");
            const response = await axios.post(`/transactionsubtractbal1?paramAmount=${amount}&paramUsername=${currentUsername}`, {
                username: userInfo.username,
            })
            setUserInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const onClickAddBalanceTwo = async () => {
        try {
            const amount = 1;
            const currentUsername = localStorage.getItem("token");
            const response = await axios.post(`/transactionaddbal2?paramAmount=${amount}&paramUsername=${currentUsername}`, {
                username: userInfo.username,
            })
            setUserInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const onClickSubtractBalanceTwo = async () => {
        try {
            const amount = 1;
            const currentUsername = localStorage.getItem("token");
            const response = await axios.post(`/transactionsubtractbal2?paramAmount=${amount}&paramUsername=${currentUsername}`, {
                username: userInfo.username,
            })
            setUserInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }

 
    





    return (


        <div className="flex w-[85rem] h-[42rem] justify-center items-center">
            <div className="flex flex-col justify-center items-center m-10 w-[21rem] h-[35rem] bg-[#111827] rounded-3xl gap-4 overflow-y-auto" id="myDiv">
                <div className={`w-[19rem] h-[16rem] rounded-3xl bg-[#1F2937]  relative flex items-center justify-center border-2 border-yellow-600`}>
                    <div className="flex justify-center px-4 pt-4 flex-col items-center ">
                        <div className="flex gap-2 m-3 ">
                            <a href="#" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[13rem]">{userInfo.username}</a>
                        </div>
                        <div className="flex gap-2 m-3">
                            <div className='flex flex-col p-2 justify-center items-center border-2 border-white rounded-xl'>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{userInfo.balance1}</a>
                                <div className="flex gap-4 m-4">
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={onClickAddBalanceOne}><i className="fa-solid fa-plus" style={{ color: '#FFD43B' }}></i></button>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={onClickSubtractBalanceOne}><i className="fa-solid fa-minus" style={{ color: '#FFD43B' }}></i></button>
                                </div>
                            </div>
                            <div className='flex flex-col p-2 justify-center items-center border-2 border-white rounded-xl'>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{userInfo.balance2}</a>
                                <div className="flex gap-4 m-4">
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={onClickAddBalanceTwo}><i className="fa-solid fa-plus" style={{ color: '#FFD43B' }}></i></button>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={onClickSubtractBalanceTwo}><i className="fa-solid fa-minus" style={{ color: '#FFD43B' }}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-[19rem] h-[16rem] rounded-3xl bg-[#1F2937] relative flex flex-col justify-center items-center border-2 border-yellow-600`}>

                    <div className="flex gap-2 m-3  w-[17rem] h-[3.5rem]">
                        <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  w-[17rem] h-[3rem]">First transaction</a>

                    </div>
                    <div className="flex gap-2 m-3  w-[17rem] h-[3.5rem]">
                        <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  w-[17rem] h-[3rem]">Second transaction</a>

                    </div>
                    <div className="flex gap-2 m-3  w-[17rem] h-[3.5rem]">
                        <a href="#" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  w-[17rem] h-[3rem]">Third transaction</a>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default Profile
