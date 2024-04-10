import { connectToDB } from "@/utils/db";
import Song from "@/models/music";
export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const songs = await Song.aggregate([{ $sample: { size: 20 } }]);
    return new Response(JSON.stringify(songs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
