import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentailProvider from "next-auth/providers/credentials";
export const authOption = {
  providers: [
    // login by email and password
    CredentailProvider({
      async authorize(userInfo) {
        // console.log("user info in next auth",userInfo);
        const newUserInfo = {
          //define object structure
          email: userInfo.email,
          password: userInfo.password,
        };
        //call login service
        const login = await loginService(newUserInfo);
        console.log("Login Information:", login);
        return login;
      },
    }),
  ],
  //used to set token into cookies
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  //calling secret key
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
