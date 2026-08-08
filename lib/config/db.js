import mongoose from "mongoose";

 export const ConnectDB = async () => {
  await mongoose.connect(
    "process.env.mongodb+srv://yeshthakur:thakur2008@cluster0.p0rnjxt.mongodb.net/blog-app",
  );
  console.log("✅Database connected thakur✅");
};
