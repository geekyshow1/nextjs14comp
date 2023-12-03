import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const posts = await res.json()
  return NextResponse.json({ "data": posts })
}