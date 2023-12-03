import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(req) {
  // console.log(req);
  // Headers
  const requestHeaders = new Headers(req.headers)
  // console.log(requestHeaders);

  // URL Query Params
  const { searchParams } = new URL(req.url)
  // const searchParams = req.nextUrl.searchParams
  // console.log(searchParams);
  // console.log(searchParams.get("search"));

  // Cookies
  const cook1 = req.cookies
  // console.log("Cookie1:", cook1);
  const cook2 = cookies()
  // console.log("Cookie2:", cook2);

  return NextResponse.json({ "msg": "Hello NextJS API" })
}


export async function POST(req) {
  // console.log(req);
  // Request Body
  // const res = await req.json()
  // console.log("ResJSON: ", res);

  const formData = await req.formData()
  console.log("Form Data: ", formData);
  console.log("Form Data: ", formData.get("title"));
  console.log("Form Data: ", formData.get("body"));

  return NextResponse.json({ "msg": "Post Success" }, { status: 201 })
}