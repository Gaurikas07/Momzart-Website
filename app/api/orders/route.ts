import { NextRequest, NextResponse } from 'next/server';

const orders: Array<{ id: string; total: number; status: string }> = [];

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const order = { id: `MOM-${1000 + orders.length + 1}`, total: data.total, status: 'PLACED' };
  orders.push(order);
  return NextResponse.json(order, { status: 201 });
}
