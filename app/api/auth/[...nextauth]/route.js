import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/db";
import User from "@/models/user";

export const dynamic = "force-dynamic";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        // // Check if the user exists in the database
        const userExists = await User.findOne({ email: profile.email });
        // If the user doesn't exist, create a new user record in the database
        if (!userExists) {
          // Create a new User
          const UserData = {
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            highscore: 0,
            stats: {
              gamesPlayed: 0,
              gamesWon: 0,
              gamesLost: 0,
            },
          };
          const newUser = new User(UserData);
          await newUser.save();
        }
        // Return true to indicate successful sign-in
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
