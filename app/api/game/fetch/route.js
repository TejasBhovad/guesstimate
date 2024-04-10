import { connectToDB } from "@/utils/db";
import Game from "@/models/game";
export const dynamic = "force-dynamic";
//fetch 20 songs from db
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const games = await Game.find().limit(20);
    return new Response(JSON.stringify(games), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
