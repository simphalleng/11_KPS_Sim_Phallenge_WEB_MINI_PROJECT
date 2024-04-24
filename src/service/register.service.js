export const registerService = async (userInfo) => {
//   console.log("userInfo in service :", userInfo);
  try {
    //Register
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          accept: "*/*",
          "Content-Type": "application/json" ,
        },
      }
    );
    const data = await res.json();
    // console.log("data response in register service ", data);
    
    return data; 
  } catch (err) {
    console.log("error register service ", err);
  }
};
