import React, { useState } from "react";
import { auth } from "../Utilities/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Login() {
    const [details, setDetails] = useState('');
    const [visible, setVisible] = useState(false);
    const classname = "w-full max-w-md px-4 py-2 sm:py-3 text-white sm:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200 placeholder-gray-400"

    function handleVisibility() {
        const changeVisiblity = !visible
        setVisible(changeVisiblity)
    }

    function handleDetails(e) {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (!details.email) {
            return toast.error('Required email')
        }
        if (!details.password) {
            return toast.error('Password is required')
        }

        try {
            toast.promise(
                signInWithEmailAndPassword(auth, details?.email, details?.password)
                    .then((res) => {
                        const user = res.user

                        console.log('user :>> ', user);

                        if (!user.emailVerified) {
                            alert('Please verify your email before login')
                            return
                        }

                        // alert('Login successfull')
                        toast.success('Login successfully')
                    })
                    .catch((err) => {
                        console.log('err :>> ', err);
                        // alert(err.message)
                        toast.error(err.message)
                    }),
                {
                    pending: 'Loging.....'
                }
            )
        } catch (err) {
            console.log('err :>> ', err.message);
            alert(err.message)
        }
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="px-3 sm:px-10 md:px-10 pt-10 pb-12 mx-1 sm:mx-auto sm:w-md md:w-lg rounded-xl backdrop-blur-[20px] shadow-2xl">
                <div className="mb-3 font-semibold text-white text-3xl sm:text-4xl text-center">
                    Login {" "}
                </div>

                <div className="flex flex-col gap-7 ">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-medium text-white text-lg sm:text-xl"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={classname}
                            placeholder="Enter your email"
                            onChange={handleDetails}
                            value={details?.email}
                        />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label
                            htmlFor="password"
                            className="font-medium text-lg text-white"
                        >
                            Password
                        </label>
                        <div className="relative ">
                            <input
                                type={visible ? 'text' : 'password'}
                                name="password"
                                id="password"
                                className={classname}
                                placeholder="Enter the password"
                                onChange={handleDetails}
                                value={details?.password}
                            />
                            <button
                                type="button"
                                onClick={handleVisibility}
                                className="border-none outline-none absolute right-3 sm:right-5 bottom-2 sm:bottom-4"
                            >
                                {visible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#e3e3e3"
                                    >
                                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#e3e3e3"
                                    >
                                        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-10 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 ring-2 ring-blue-600 ring-offset-2 ring-offset-white transition duration-200 shadow-md"
                >
                    Login
                </button>

            </form>
        </div>
    );
}
