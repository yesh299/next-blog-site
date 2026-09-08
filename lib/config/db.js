import mongoose from "mongoose";

export const ConnectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGODB_URL;

  if (!mongoUri) {
    throw new Error("MONGODB_URI or MONGODB_URL is not configured");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (mongoose.connection.readyState === 2) {
    await mongoose.connection.asPromise();
    return mongoose.connection;
  }

  await mongoose.connect(mongoUri);
  console.log("✅ Database connected thakur ✅");
  return mongoose.connection;
};
