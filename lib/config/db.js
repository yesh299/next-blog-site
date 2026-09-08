import mongoose from "mongoose";

export const ConnectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (mongoose.connection.readyState === 2) {
    await mongoose.connection.asPromise();
    return mongoose.connection;
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Database connected thakur ✅");
  return mongoose.connection;
};
