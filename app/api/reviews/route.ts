import { NextRequest, NextResponse } from 'next/server';

const reviews: Array<{ productId: string; rating: number; comment: string }> = [];

export async function GET(request: NextRequest) {
  const productId = request.nextUrl.searchParams.get('productId');
  return NextResponse.json(reviews.filter((review) => review.productId === productId));
}

export async function POST(request: NextRequest) {
  const review = await request.json();
  reviews.push(review);
  return NextResponse.json(review, { status: 201 });
}
