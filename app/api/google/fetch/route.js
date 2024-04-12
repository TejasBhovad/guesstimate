import { connectToDB } from "@/utils/db";
import Google from "@/models/google";
export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const searches = await Google.aggregate([{ $sample: { size: 20 } }]);

    // console.log("=> Fetching searches");
    // console.log("searches", searches);
    return new Response(JSON.stringify(searches), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
