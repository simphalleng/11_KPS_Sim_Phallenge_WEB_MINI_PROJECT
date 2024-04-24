import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";

//Get token from cookies
const session = await getServerSession(authOption);
// console.log("token is:",session?.user?.token)
//Get All list
export const getAllListServices = async () => {
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    headers: {
      authorization: `Bearer ${session?.user?.token}`,
    },
  });
  const data = await res.json();
  console.log("data in service:", data);
  return data;
};

export const addListService = async (todoListData) => {
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
      method:'POST',
      body:JSON.stringify(todoListData),
      // headers: {
        
      //   authorization: `Bearer ${session?.user?.token}`,
      // },
     
    headers: {
      accept: "*/*",
      authorization: `Bearer ${session?.user?.token}`,
      "Content-Type": "application/json",
    },
  });
    const data = await res.json();
    // console.log("data in service:", data);
    return data;
  };