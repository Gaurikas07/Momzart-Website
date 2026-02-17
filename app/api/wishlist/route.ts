import { NextRequest, NextResponse } from 'next/server';

let wishlist: string[] = [];

export async function GET() {
  return NextResponse.json({ items: wishlist });
}

export async function POST(request: NextRequest) {
  const { productId } = await request.json();
  if (!wishlist.includes(productId)) wishlist.push(productId);
  return NextResponse.json({ items: wishlist });
}

export async function DELETE(request: NextRequest) {
  const { productId } = await request.json();
  wishlist = wishlist.filter((id) => id !== productId);
  return NextResponse.json({ items: wishlist });
}
