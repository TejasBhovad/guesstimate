import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
      useUnifiedTopology: true,
    });

    isConnected = connection.connections[0].readyState === 1;
    console.log("=> using new database connection");
  } catch (error) {
    console.log("=> error while connecting with database:", error);
  }
};
