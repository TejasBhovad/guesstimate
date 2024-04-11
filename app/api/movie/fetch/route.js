import { connectToDB } from "@/utils/db";
import Movie from "@/models/movie";
export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const movies = await Movie.aggregate([{ $sample: { size: 20 } }]);
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
