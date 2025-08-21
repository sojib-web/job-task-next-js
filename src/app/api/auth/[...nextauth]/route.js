import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // ✅ Successful login redirect configuration
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products"; // Redirect to products page after login
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
