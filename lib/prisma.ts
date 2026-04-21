import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Verify connection and log status
prisma.$connect()
    .then(() => {
        console.log('-----------------------------------------------');
        console.log('🚀 Database connected successfully: coreway');
        console.log('-----------------------------------------------');
    })
    .catch((err) => {
        console.error('-----------------------------------------------');
        console.error('❌ Database connection failed!');
        console.error('Error:', err.message);
        console.error('-----------------------------------------------');
    });
