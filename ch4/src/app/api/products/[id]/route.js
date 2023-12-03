import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  // console.log("Req: ", req);
  console.log("Context: ", context);
  console.log("Context.params: ", context.params);
  console.log("Context.params.id: ", context.params.id);
  return NextResponse.json({ "msg": "success" }, { status: 200 })
}

// export const GET = async (req, { params }) => {
//   console.log("params.id: ", params.id);
//   return NextResponse.json({ "msg": "success" }, { status: 200 })
// }