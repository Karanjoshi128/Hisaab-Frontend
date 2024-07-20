import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../contexts/context";
import axios from "axios";
import geekyMonkey from "../assets/images/geeky_monkey.png"
import { useNavigate } from 'react-router-dom';
import TransactionCard from './TransactionCard';



const Profile = (props) => {
    const navigate = useNavigate();




    const { email, setEmail, password, setPassword, username, setUsername, userInfo, setUserInfo, user, setUser, popupbox, setPopupbox, whichBalance, setwhichBalance, money, setMoney, reasonOf, setReasonOf, otherUserInfo1, setOtherUserInfo1, otherUserInfo2, setOtherUserInfo2, empty, setEmpty, info, setInfo } = useContext(AppContext);


    // const getCookie = (name) => {
    //     let matches = document.cookie.match(new RegExp(
    //         "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    //     ));
    //     return matches ? decodeURIComponent(matches[1]) : undefined;
    // };

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
      }


    useEffect(() => {
        

        // const currentUsername = localStorage.getItem("token");

        const currentUsername = getCookie('username');

        console.log(currentUsername);

        if (!currentUsername) {
            navigate("/login");
        }
        const fetchData = async () => {
            try {
                // const currentUsername = getCookie('username');
                const response = await axios.get(`/getallusers?paramName=${currentUsername}` , {withCredentials: true });
                setUserInfo(response.data.users[0]);
                setOtherUserInfo1(response.data.otherUsersData[0].username);
                setOtherUserInfo2(response.data.otherUsersData[1].username);

                // setEmpty(true);
                // const response2 = await axios.get(`/getalltransactions`);
                // if (response2.data.length != 0) {
                //     setInfo(response2.data);
                //     console.log(response2.data);
                //     console.log(info);
                // }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const handleTransaction = async () => {
        if (empty) {
            setEmpty(false);
        }
        else {
            try {
                const response2 = await axios.get(`/getalltransactions`, { withCredentials: true });
                if (response2.data.length != 0) {
                    setInfo(response2.data);
                    // console.log(response2.data);
                    // console.log(info);
                    setEmpty(!empty);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                  } else {
                    console.error('An error occurred while fetching transactions:', error);
                  }
                
            }
        }
    }




    const handleLogout = async () => {
        try {
          await axios.post('/logout', {}, { withCredentials: true });
          setUser("");
          navigate("/login");
        } catch (error) {
          console.error("Error during logout", error);
        }
      };

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
            const currentUsername = getCookie('username');
            const amount = money;
            const targetUser = otherUserInfo1;
            const response = await axios.post(`/transactionaddbal1?paramAmount=${amount}&paramUsername=${currentUsername}&targetUserOne=${otherUserInfo1}&targetUserTwo=${otherUserInfo2}&targetUser=${targetUser}`, {
                username: userInfo.username,
            }, { withCredentials: true })
            setUserInfo(response.data);
            const sender = getCookie('username');
            const receiver = targetUser;
            const reason = reasonOf;
            await axios.post(`/saveandcreatetransaction`, {
                sender,
                receiver,
                amount,
                reason
            }, { withCredentials: true });

        } catch (error) {
            console.log(error);
        }
    }
    const onClickSubtractBalanceOne = async () => {
        try {
            const currentUsername = getCookie('username');
            const amount = money
            const targetUser = otherUserInfo1;
            const response = await axios.post(`/transactionsubtractbal1?paramAmount=${amount}&paramUsername=${currentUsername}&targetUserOne=${otherUserInfo1}&targetUserTwo=${otherUserInfo2}&targetUser=${targetUser}`, {
                username: userInfo.username,
            }, { withCredentials: true })
            setUserInfo(response.data);
            const sender = getCookie('username');
            const receiver = targetUser;
            const reason = reasonOf;
            await axios.post(`/saveandcreatetransaction`, {
                sender,
                receiver,
                amount : 0-amount,
                reason
            }, { withCredentials: true })
        } catch (error) {
            console.log(error);
        }
    }
    const onClickAddBalanceTwo = async () => {
        try {
            const currentUsername = getCookie('username');
            const amount = money
            const targetUser = otherUserInfo2;
            const response = await axios.post(`/transactionaddbal2?paramAmount=${amount}&paramUsername=${currentUsername}&targetUserOne=${otherUserInfo1}&targetUserTwo=${otherUserInfo2}&targetUser=${targetUser}`, {
                username: userInfo.username,
            }, { withCredentials: true })
            setUserInfo(response.data);
            const sender = getCookie('username');
            const receiver = targetUser;
            const reason = reasonOf;
            await axios.post(`/saveandcreatetransaction`, {
                sender,
                receiver,
                amount,
                reason
            }, { withCredentials: true })
        } catch (error) {
            console.log(error);
        }
    }
    const onClickSubtractBalanceTwo = async () => {
        try {
            const currentUsername = getCookie('username');
            const amount = money
            const targetUser = otherUserInfo2;
            const response = await axios.post(`/transactionsubtractbal2?paramAmount=${amount}&paramUsername=${currentUsername}&targetUserOne=${otherUserInfo1}&targetUserTwo=${otherUserInfo2}&targetUser=${targetUser}`, {
                username: userInfo.username,
            }, { withCredentials: true })
            setUserInfo(response.data);
            const sender = getCookie('username');
            const receiver = targetUser;
            const reason = reasonOf;
            await axios.post(`/saveandcreatetransaction`, {
                sender,
                receiver,
                amount : 0-amount,
                reason
            }, { withCredentials: true })
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
            <div className="flex flex-col justify-center items-center m-10 w-[21rem] h-[35rem] bg-[#0e1625] rounded-3xl gap-4 overflow-y-auto" id="myDiv">
                <div className={`w-[19rem] h-[16rem] rounded-3xl shadow-2xl bg-[#1F2937]  relative flex items-center justify-center border-2 border-yellow-600`}>
                    <div className="flex justify-center px-4 pt-4 flex-col items-center relative ">
                        <p className='absolute top-0 text-[#2bff00]'><u>$Balance</u></p>
                        <div className="flex gap-2 m-3 ">
                            <a href="#" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[13rem]">{userInfo.username}</a>
                        </div>
                        <div className="flex gap-2 m-3">
                            <div className='flex flex-col p-2 justify-center items-center border-2 border-white rounded-xl h-[9rem]'>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[2rem]">{userInfo.balance1}</a>
                                <div className="flex gap-4 m-4 relative mb-0">
                                    <div type="text" className='absolute left-0 top-[-5rem] w-[5rem] h-[1rem] rounded-md flex items-center justify-center' >
                                        <div className="inline-block">
                                            <a href="#" className="flex items-center justify-center px-4 py-2 text-[0.55rem] font-medium text-center text-white bg-[#CA8A04] dark rounded-lg  h-[2rem] w-[7rem]">{otherUserInfo1}</a>
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
                                            <a href="#" className="flex items-center justify-center px-4 py-2 text-[0.55rem] font-medium text-center text-white bg-[#CA8A04] dark rounded-lg  h-[2rem] w-[7rem]">{otherUserInfo2}</a>
                                        </div>
                                    </div>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={handleAddBal2}><i className="fa-solid fa-plus" style={{ color: '#FFD43B' }}></i></button>
                                    <button className='rounded-3xl border-2 border-white h-[2rem] w-[2rem]' onClick={handleSubtractBal2}><i className="fa-solid fa-minus" style={{ color: '#FFD43B' }}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-[19rem] h-[16rem] rounded-3xl shadow-lg bg-[#1F2937] relative flex flex-col justify-center items-center border-2 border-yellow-600`}>

                    <p className='text-[#00FFFF] mb-1 mt-1'><button onClick={handleTransaction}><u>Transcaction</u></button></p>


                    <div className='border-2 border-[#008000]  rounded-xl w-[17.5rem] h-[13rem] flex flex-col justify-center items-center overflow-hidden mt-2'>


                        {empty && <>
                            <div className="flex gap-0 m-3  w-[16.6rem] h-[2.7rem]  text-white bg-[#19191b] rounded-lg justify-between p-2 shadow-lg shadow-[#06060a]">
                                <div className='flex flex-col justify-center pl-1'>
                                    <div className='flex gap-1'>
                                        <p className=' text-start text-[0.70rem]'>{info[0].sender ? `${info[0].sender}` : '------------'}</p>
                                        <p className='text-center text-[0.70rem] text-[#CA8A04]'> <u>to</u></p>
                                        <p className=' text-start text-[0.70rem]'>{info[0].receiver ? `${info[0].receiver}` : '------------'}</p>
                                    </div>
                                    <div>
                                        <p className=' text-[0.6rem]'><u>{info[0].reason ? `${info[0].reason}` : '------------'}</u></p>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-center'>
                                    <p className=' text-end text-[1.1rem] text-[#28FF00] mr-1'>{info[0].amount ? `${info[0].amount}` : '--'}</p>
                                    <p className='text-left text-[0.5rem]'>{info[0].transactionDate ? `${info[0].transactionDate.split('T')[0]}` : '----------'}</p>
                                </div>
                            </div>
                            <div className="flex gap-0 m-3  w-[16.6rem] h-[2.7rem]  text-white bg-[#19191b] rounded-lg justify-between p-2 shadow-lg shadow-[#06060a]">
                                <div className='flex flex-col justify-center pl-1'>
                                    <div className='flex gap-1'>
                                        <p className='text-start text-[0.70rem]'>
                                            {info[1]?.sender ? `${info[1].sender}` : '------------'}
                                        </p>
                                        <p className='text-center text-[0.70rem] text-[#CA8A04]'>
                                            <u>to</u>
                                        </p>
                                        <p className='text-start text-[0.70rem]'>
                                            {info[1]?.receiver ? `${info[1].receiver}` : '------------'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[0.6rem]'>
                                            <u>{info[1]?.reason ? `${info[1].reason}` : '------------'}</u>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-end text-[1.1rem] text-[#28FF00] mr-1'>
                                        {info[1]?.amount ? `${info[1].amount}` : '--'}
                                    </p>
                                    <p className='text-left text-[0.5rem]'>
                                        {info[1]?.transactionDate ? `${info[1].transactionDate.split('T')[0]}` : '----------'}
                                    </p>
                                </div>
                            </div>
                        </>}


                    </div>




                    <div className="flex gap-2 m-3  w-[18rem] h-[3.5rem] justify-center items-center rounded-xl ">
                        <a href="#" className="flex items-center justify-center w-[6rem] h-[2.5rem] px-4 py-2 text-sm font-medium text-center text-white bg-[#CA8A04] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={handleLogout}><b>Logout</b></a>

                    </div>


                </div>
            </div>
            {popupbox &&
                <div className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0' >
                    <div className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-[#e3e3e3] bg-opacity-50 flex items-center justify-center z-10'>
                        <div className="bg-white h-[18rem] w-[16rem] rounded-lg flex items-center flex-col z-20">
                            <label htmlFor='imageonly' className='border-2  h-[7rem] w-[15rem] border-grey-100 flex justify-center items-center border-t-0 border-l-0 border-r-0 pointer-events-auto cursor-pointer'>
                                <div className='w-[5rem] h-[5rem] border-rose-100 border-2 rounded-xl'>
                                    <img src={geekyMonkey} alt="Upload your social image" className='w-[5rem] h-[5rem]' />:
                                </div>
                            </label>
                            <input type="number" className='border-2 rounded-md w-[14rem] mt-[1rem] border-green-200 text-center placeholder:text-slate-400  hover:border-green-300' placeholder='Type the amount to update' onChange={(e) => setMoney(e.target.value)} />
                            <input type="search" maxLength="17" className='border-2 rounded-md w-[14rem] mt-[1rem] border-green-200 text-center placeholder:text-slate-400  hover:border-green-300' placeholder='Type the reason' onChange={(e) => setReasonOf(e.target.value)} />
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
