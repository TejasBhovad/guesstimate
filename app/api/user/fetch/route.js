import User from "@/models/user";
import { connectToDB } from "@/utils/db";
export const dynamic = "force-dynamic";
export const POST = async (req, res) => {
  try {
    const { email } = await req.json();
    console.log("=> Fetching count with email: " + email);
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
