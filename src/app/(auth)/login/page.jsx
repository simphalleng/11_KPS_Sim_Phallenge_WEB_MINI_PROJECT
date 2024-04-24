"use client";
import Link from "next/link";
import React from "react";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";

const LoginComponent = () => {
  const router= useRouter();
  //define handle login
  async function handleLogin(userInfo) {
    // console.log(useInfo.get('email'));
    // console.log("user info:",useInfo.get('email')) ;
    //define structure object
    const newUserInfo={
        email:userInfo.get('email'),
        password:userInfo.get('password'),
    }
    //calling next auth service and passing "newUserInfo"
    const res =await signIn('credentials',{
      redirect:false,
      ...newUserInfo
    });
    // console.log("res in login",res)
    if(res.ok){
      router.push("/todo-list");
    }
  }
  return (
    <div className=" w-[85%] h-[100%] m-auto mt-20">
      <div className="flex justify-between">
        <img src={"/assets/icons/logo.svg"} width={160} height={130} />
      </div>
      <div>
        <div className=" w-full mx-auto ml-0 mt-7">
          <div className=" flex justify-between m-auto">
            <div className="">
              <div className=" ml-40 rounded-xl ">
                <h1 className="font-medium text-2xl mt-3 ml-0">Login</h1>
                <form action={handleLogin} className="mt-6">
                  <div className="mb-5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Email"
                      required=""
                    />
                    <input
                      className="p-2 rounded-xl border mt-5 w-full"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="**********"
                    />
                  </div>

                  <button
                    type="submit"
                    className="block text-center mt-5 border border-black rounded-xl w-80 text-white bg-gray-800 bg-blue-500 p-2 duration-300"
                  >
                    {/* <Link href={`list`}>Login</Link> */}
                    login
                  </button>
                  <p className="mt-3 text-sx ml-0 font-light text-gray">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                      href={`registerForm`}
                      className=" text-blue-500 font-medium"
                    >
                      {" "}
                      Register
                    </Link>
                  </p>
                </form>

                <div className=" mt-5 border-b text-center">
                  <div className="leading-none px-2 inline-block text-2sm text-gray tracking-wide font-medium bg-white transform translate-y-1/2">
                    continue with
                  </div>
                </div>

                <div>
                  <button className="block mt-10 text-center border border-black rounded-xl w-80 text-gray bg-gray-800  p-2 duration-300">
                    Google
                  </button>
                </div>
              </div>{" "}
              -
            </div>

            <div className=" w-80">
              <img className=" " src={"assets/icons/login.svg"} />
            </div>
          </div>
        </div>
        <div className=" ml-0 mt-5">
          <span className="text-sm text-gray">
            © 2024 <a href="https://flowbite.com/">My Office</a>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
