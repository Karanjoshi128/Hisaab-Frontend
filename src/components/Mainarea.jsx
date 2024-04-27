import { Card } from "./Card"



export const Mainarea = () => {
    const firstProfilePic = "https://flowbite.com/docs/images/people/profile-picture-3.jpg";
    const secondProfilePic = "https://flowbite.com/docs/images/people/profile-picture-1.jpg";
    const thirdProfilePic =  "https://flowbite.com/docs/images/people/profile-picture-2.jpg";

    return (
        <div className="flex w-[85rem] h-[42rem] justify-center items-center">
            <div className="flex flex-col justify-center items-center m-10 w-[21rem] h-[35rem] bg-[#111827] rounded-3xl gap-4 overflow-y-scroll ">
                <Card source ={firstProfilePic}  topValue={33}/>
                <Card source ={secondProfilePic} />
                <Card source ={thirdProfilePic} />
                <Card source ={firstProfilePic} />
                <Card source ={secondProfilePic} />
                <Card source ={thirdProfilePic} />
            </div>
        </div>
    )
}