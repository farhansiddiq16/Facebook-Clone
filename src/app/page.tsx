

import Image from "next/image";
import { Input } from "postcss";


export default function Home() {

  return (


    <div className="bg-gray-100 h-screen pl-48 flex items-center ">


      <div className="text-3xl w-[670px] px-5">
        <Image
          src={"/pictures/fblogo.svg"} alt="Facebook Logo"
          width={300} height={300} className="-mt-20"

        />

        <h1 className="ml-8 -mt-3 text-3xl" > Facebook helps you connect and share with the people in your life. </h1>
      </div>



      <div className="bg-white flex flex-col p-5 rounded-xl relative shadow-xl" >

        <input
          className=" my-2 border border-1 border-gray-100 p-4 w-96 rounded-lg focus:outline-1 outline-blue-400"
          type="text"
          placeholder="Email address or phone number" />

        <input
          className=" my-2 border border-1 border-gray-100 p-4 w-96 rounded-l focus:outline-1 outline-blue-400"
          type="password"
          placeholder="Password" />

        <button className=" my-2 border border-1 rounded-lg border-gray-100 p-4 w-96 text-lg bg-blue-600 font-bold text-white hover:bg-blue-700" >
          Log in </button>

        <p className="text-blue-600 my-2 text-center hover:underline w-96 cursor-pointer"> Forgotten password?</p>

        <hr className="my-3" />

        <button className=" my-2 border border-1 rounded-lg border-gray-100 py-3 px-4 text-lg bg-green-500 font-semibold text-white hover:bg-green-600 w-fit mx-auto" > Create new account</button>

        <span className="absolute -bottom-12 text-sm px-6">
          <span className="font-bold"> Create a Page</span> for a celebrity, brand or business. </span>



      </div>



    </div>

  )
}