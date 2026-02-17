import { NextRequest, NextResponse } from 'next/server';

let cart: Array<{ productId: string; quantity: number; price: number }> = [];

export async function GET() {
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  return NextResponse.json({ items: cart, total });
}

export async function POST(request: NextRequest) {
  const item = await request.json();
  const existing = cart.find((x) => x.productId === item.productId);
  if (existing) existing.quantity += item.quantity;
  else cart.push(item);
  return NextResponse.json({ ok: true, cart });
}

export async function PATCH(request: NextRequest) {
  const { productId, quantity } = await request.json();
  cart = cart.map((item) => (item.productId === productId ? { ...item, quantity } : item));
  return NextResponse.json({ ok: true, cart });
}

export async function DELETE(request: NextRequest) {
  const { productId } = await request.json();
  cart = cart.filter((item) => item.productId !== productId);
  return NextResponse.json({ ok: true, cart });
}
