import { Card } from "./Card"
import { AppContext } from "../contexts/context";
import { useContext, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";


export const Mainarea = () => {
    const { email, setEmail, password, setPassword, userInfo, setUserInfo, user, setUser } = useContext(AppContext);


    // useEffect(() => {
    //     const currentUsername = localStorage.getItem("token");
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`/getallusers?paramName=${currentUsername}`);
    //             setUserInfo(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, [])


    return (
        <Profile />
    )

    // return (

    //     <div className="flex w-[85rem] h-[42rem] justify-center items-center">
    //         <div className="flex flex-col justify-center items-center m-10 w-[21rem] h-[35rem] bg-[#111827] rounded-3xl gap-4 overflow-y-auto" id="myDiv">
    //             {userInfo.map((user, key) => {
    //                 return <Card key={key} userName={user.username} Amount={user.balance} />
    //             })}
    //         </div>
    //     </div>
    // )

}