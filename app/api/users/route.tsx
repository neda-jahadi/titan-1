import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 0, name :'Neda'},
        {id: 1, name : 'Farhad'}
    ]);
}