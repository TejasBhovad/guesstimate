import { connectToDB } from "@/utils/db";
import Movie from "@/models/movie";
export const dynamic = "force-dynamic";
//fetch 20 songs from db
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const movies = await Movie.find().limit(20);
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
