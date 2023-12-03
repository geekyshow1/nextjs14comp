import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  request.url === '/dashboard'
  return NextResponse.redirect(new URL('/login', request.url))
}