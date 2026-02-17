import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category') ?? undefined;
  const sort = searchParams.get('sort') === 'price_asc' ? { price: 'asc' as const } : { createdAt: 'desc' as const };
  const page = Number(searchParams.get('page') ?? 1);
  const limit = Number(searchParams.get('limit') ?? 12);

  const products = await prisma.product.findMany({
    where: category ? { category } : undefined,
    orderBy: sort,
    skip: (page - 1) * limit,
    take: limit,
    include: { images: true }
  });

  return NextResponse.json(products);
}
