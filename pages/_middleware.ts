import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {

    //Token exist, user is logged in

  //return new Response('Hello, world!')
  return NextResponse.next()
}