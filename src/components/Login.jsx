import { Link, useNavigate } from "react-router-dom";
import geekyMonkey from "../assets/images/geeky_monkey.png"
import React, { useContext, useState } from "react";
import axios from "axios"
import { AppContext } from "../contexts/context";
import { Vortex } from "react-loader-spinner";



export const Login = () => {
    const { email, setEmail, password, setPassword, user, setUser, display, setDisplay, loading, setLoading } = useContext(AppContext);



    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('/login', {
                email,
                password
            }, { withCredentials: true });
            setUser(response.data);
            setEmail("");
            setPassword("");
            // localStorage.setItem("token", response.data.username); // to change
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex w-[85rem] h-[42rem] justify-center items-center">
                <div className="flex m-10 w-[21rem] h-[32rem] bg-[#F5F5F5] rounded-3xl justify-center items-center shadow-2xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">

                        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
                            {loading && (
                                <div className='h-full w-full opacity-[90%] absolute flex justify-center items-center top-[11rem]'>
                                    <div>
                                        <Vortex
                                            height="80"
                                            width="80"
                                            ariaLabel="vortex-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="vortex-wrapper"
                                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                        />
                                    </div>
                                </div>
                            )}
                            <img
                                className="mx-auto h-[5.5rem] w-auto absolute top-0 left-0 right-0 rounded-full border-2 border-dashed border-[#FFA500]"
                                src={geekyMonkey}
                                alt="Your Company"
                            />
                            <h2 className="mt-[6rem] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Log in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-[1.5rem] text-center text-sm text-gray-500">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not a member?{' '}
                                <Link to="/signup" className="font-semibold text-center leading-6 text-indigo-600 hover:text-indigo-500">
                                    Register for an account
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}