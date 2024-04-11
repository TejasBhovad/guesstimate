import { connectToDB } from "@/utils/db";
import Game from "@/models/game";
export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const game = await Game.aggregate([{ $sample: { size: 20 } }]);

    // console.log("=> Fetching games");
    // console.log("games", games);
    return new Response(JSON.stringify(games), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
