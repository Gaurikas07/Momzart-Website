import { NextResponse } from 'next/server';

const orderStore: Record<string, { id: string; total: number; status: string }> = {};

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const order = orderStore[params.id];
  if (!order) {
    return NextResponse.json({ message: 'Order not found' }, { status: 404 });
  }

  return NextResponse.json(order);
}
