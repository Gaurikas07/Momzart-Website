import { NextRequest, NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  const { amount } = await request.json();
  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: 'INR',
    receipt: `momzart_${Date.now()}`
  });
  return NextResponse.json(order);
}
