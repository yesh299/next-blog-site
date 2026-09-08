// Coustome header function for GET, POST, DELETE.

import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}

{
  /*Custome handler function for get method */
}
export async function GET(request) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}


{
  /*Costume handler function for DELETE method */
}
export async function DELETE(Request){
  const id = await Request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({success:true,msg:"email Deleted"})
}