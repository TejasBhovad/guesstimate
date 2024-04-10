import { connectToDB } from "@/utils/db";
import User from "@/models/user";
export const dynamic = "force-dynamic";

// export const POST = async (req, res) => {
//   const { name, email, image, highscore, stats } = await req.json();
//   try {
//     await connectToDB();

//     const newUser = new User({
//       name,
//       email,
//       image,
//       highscore,
//       stats,
//     });
//     await newUser.save();
//     console.log("New user created successfully");

//     return new Response(JSON.stringify(newUser), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify(error), { status: 500 });
//   }
// };
//update query for user
export const POST = async (req, res) => {
  const { email, highscore, stats } = await req.json();
  try {
    await connectToDB();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    user.highscore = highscore;
    user.stats = stats;
    await user.save();
    console.log("User updated successfully");
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};