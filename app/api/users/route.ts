import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const passwordHash = await bcrypt.hash(body.password, 10);
  const user = await prisma.user.create({ data: { name: body.name, email: body.email, passwordHash } });
  return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
}
