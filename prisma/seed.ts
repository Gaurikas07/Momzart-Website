import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { slug: 'amber-oud', title: 'Amber Oud Candle', description: 'Warm amber notes with rich oud finish.', price: 1499, stock: 50, category: 'Luxury', rating: 4.8 },
      { slug: 'vanilla-rose', title: 'Vanilla Rose Candle', description: 'Soft vanilla with handpicked rose petals.', price: 1199, stock: 120, category: 'Floral', rating: 4.6 },
      { slug: 'coastal-linen', title: 'Coastal Linen Candle', description: 'Fresh linen and sea breeze for clean living rooms.', price: 999, stock: 90, category: 'Fresh', rating: 4.5 }
    ],
    skipDuplicates: true
  });
}

main().finally(async () => prisma.$disconnect());
