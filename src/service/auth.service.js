import { headers } from "next/headers";

export const loginService = async (userInfo) => {
//   console.log("userInfo in service :", userInfo);
  try {
    //Login
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/login",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log("data response in login service ", data);
    
    return data; 
  } catch (err) {
    console.log("error login service ", err);
  }
};
