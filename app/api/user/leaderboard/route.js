import User from "@/models/user";
import { connectToDB } from "@/utils/db";
export const dynamic = "force-dynamic";

// get 20 users with highest highscore
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const users = await User.find().sort({ highscore: -1 }).limit(20);
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
