import React, { useContext, useEffect } from 'react'
import { AppContext } from "../contexts/context";
import axios from "axios";
import geekyMonkey from "../assets/images/geeky_monkey.png"
import { useNavigate } from 'react-router-dom';



const Profile = (props) => {
    const navigate = useNavigate();


    const { email, setEmail, password, setPassword, username, setUsername, userInfo, setUserInfo, user, setUser, popupbox, setPopupbox, whichBalance, setwhichBalance, money, setMoney, otherUserInfo1, setOtherUserInfo1, otherUserInfo2, setOtherUserInfo2 } = useContext(AppContext);


    useEffect(() => {
        const currentUsername = localStorage.getItem("token");
        if (!currentUsername) {
            navigate("/login");
        }
        const fetchData = async () => {
            try {
                const response = await axios.get(`/getallusers?paramName=${currentUsername}`);
                setUserInfo(response.data.users[0]);
                setOtherUserInfo1(response.data.otherUsersData[0].username);
                setOtherUserInfo2(response.data.otherUsersData[1].username);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser("");
        navigate("/login");
    }

    const handleAddBal1 = () => {
        setwhichBalance("AddBalance1");
        setPopupbox(!popupbox);
    }

    const handleSubtractBal1 = () => {
        setwhichBalance("SubtractBalance1");
        setPopupbox(!popupbox);
    }

    const handleAddBal2 = () => {
        setwhichBalance("AddBalance2");
        setPopupbox(!popupbox);
    }

    const handleSubtractBal2 = () => {
        setwhichBalance("SubtractBalance2");
        setPopupbox(!popupbox);
    }

    const onClickAddBalanceOne = async () => {
        try {
            const amount = money
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
            const amount = money
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
            const amount = money
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
            const amount = money
            const currentUsername = localStorage.getItem("token");
            const response = await axios.post(`/transactionsubtractbal2?paramAmount=${amount}&paramUsername=${currentUsername}`, {
                username: userInfo.username,
            })
            setUserInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handlePopupSubmit = (e) => {
        e.preventDefault();
        setPopupbox(!popupbox);
        if (whichBalance === "AddBalance1") {
            onClickAddBalanceOne();
        }
        else if (whichBalance === "SubtractBalance1") {
            onClickSubtractBalanceOne();
        }
        else if (whichBalance === "AddBalance2") {
            onClickAddBalanceTwo();
        }
        else if (whichBalance === "SubtractBalance2") {
            onClickSubtractBalanceTwo();
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
                            <div className='flex flex-col p-2 justify-center items-center border-2 border-white rounded-xl h-[9rem]'>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[2rem]">{userInfo.balance1}</a>
                                <div className="flex gap-4 m-4 relative mb-0">
                                    <div type="text" className='absolute left-0 top-[-5rem] w-[5rem] h-[1rem] rounded-md flex items-center justify-center' >
                                        <div className="inline-block">
                                            <a href="#" className="flex items-center justify-center px-4 py-2 text-[0.6rem] font-medium text-center text-white bg-[#CA8A04] dark rounded-lg  h-[2rem] w-[7rem]">{otherUserInfo1}</a>
                                        </div>
                                    </div>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={handleAddBal1}><i className="fa-solid fa-plus" style={{ color: '#FFD43B' }}></i></button>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={handleSubtractBal1}><i className="fa-solid fa-minus" style={{ color: '#FFD43B' }}></i></button>
                                </div>
                            </div>
                            <div className='flex flex-col p-2 justify-center items-center border-2 border-white rounded-xl '>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[2rem]">{userInfo.balance2}</a>
                                <div className="flex gap-4 m-4 mb-0 relative">
                                    <div type="text" className='absolute left-0 top-[-5rem] w-[5rem] h-[1rem] rounded-md flex items-center justify-center' >
                                        <div className="inline-block">
                                            <a href="#" className="flex items-center justify-center px-4 py-2 text-[0.6rem] font-medium text-center text-white bg-[#CA8A04] dark rounded-lg  h-[2rem] w-[7rem]">{otherUserInfo2}</a>
                                        </div>
                                    </div>
                                                                     <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={handleAddBal2}><i className="fa-solid fa-plus" style={{ color: '#FFD43B' }}></i></button>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={handleSubtractBal2}><i className="fa-solid fa-minus" style={{ color: '#FFD43B' }}></i></button>
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
                    <div className="flex gap-2 m-3  w-[17rem] h-[3.5rem] justify-center">
                        <a href="#" className="flex items-center justify-center w-[6rem] h-[2.5rem] px-4 py-2 text-sm font-medium text-center text-white bg-[#CA8A04] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={handleLogout}><b>Logout</b></a>

                    </div>


                </div>
            </div>
            {popupbox &&
                <div className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0' >
                    <div className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-[#e3e3e3] bg-opacity-50 flex items-center justify-center z-10'>
                        <div className="bg-white h-[14rem] w-[16rem] rounded-lg flex items-center flex-col z-20">
                            <label htmlFor='imageonly' className='border-2  h-[7rem] w-[15rem] border-grey-100 flex justify-center items-center border-t-0 border-l-0 border-r-0 pointer-events-auto cursor-pointer'>
                                <div className='w-[5rem] h-[5rem] border-rose-100 border-2 rounded-xl'>
                                    <img src={geekyMonkey} alt="Upload your social image" className='w-[5rem] h-[5rem]' />:
                                </div>
                            </label>
                            <input type="search" className='border-2 rounded-md w-[14rem] mt-[1rem] border-green-200 text-center placeholder:text-slate-400  hover:border-green-300' placeholder='Type the amount to update' onChange={(e) => setMoney(e.target.value)} />
                            <div className="flex gap-[2.5rem] pl-[2rem] pr-[2rem] pb-[1rem] pt-[1rem]">
                                <button onClick={() => setPopupbox(!popupbox)} className='w-[5rem] h-[2rem] bg-[#a1bbdf] hover:bg-slate-400 rounded-lg text-white' >Cancel</button>
                                <button className='w-[5rem] h-[2rem] bg-[#892be2a2] hover:bg-[#8A2BE2] rounded-lg text-white' onClick={handlePopupSubmit} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>



    )
}

export default Profile
