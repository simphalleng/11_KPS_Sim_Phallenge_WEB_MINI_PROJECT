import React from 'react'
import { registerService } from '@/service/register.service';
const RegisterComponent = () => {
    //define handle register
    async function handleRegister(userInfo) {
      "use server"
      const newUserInfo={
          firstname:userInfo.get('first_name'),
          lastname:userInfo.get('last_name'),
          gender:userInfo.get('gender'),
          email:userInfo.get('email'),
          profile_url:"String",
          password:userInfo.get('password'),

      }
      const res= await registerService(newUserInfo);

      // console.log("res in register",res)

    }
  return (
    <div className=" w-[85%] h-[100%] m-auto mt-20">
      <div className="flex justify-between">
        <img src={"/assets/icons/logo.svg"} width={200} height={150} />
      </div>
      <div>
      <form className=" w-full mx-auto ml-0 mt-7" action={handleRegister}>
        <div className=" flex justify-between m-auto">
          <div className=" w-80">
          <div className="mb-5">  
          <label
            htmlFor="first-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  " 
          >
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your name..."
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="info@xyz.com"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="xxxxxxxxxx"
            required=""
          />
        </div>
          </div>
          <div className=" w-80">
          <div className="mb-5">
          <label
            htmlFor="last-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your name..."
            required=""
          />
        </div>
        <div className="mb-5">
        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender:</label>
        <select id="gender" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="comfirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Comfirm Password
          </label>
          <input
            type="password"
            id="comfirm_password"
            name="comfirm_password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="xxxxxxxxxx"
            required=""
          />
        </div>
          </div>
          <div className=" w-80">
            <img  className =" " src=
            {"assets/icons/sign-up.svg"}/>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {/* <Link href="#">
              Sign Up
          </Link> */}
          Sign Up
        </button>
      </form>

      </div>
    </div>
  )
}

export default RegisterComponent
