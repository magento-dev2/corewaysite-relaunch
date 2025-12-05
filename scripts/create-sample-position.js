const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createSamplePosition() {
    try {
        const position = await prisma.jobPosition.create({
            data: {
                title: "Senior Full-Stack Developer",
                department: "Engineering",
                location: "Remote / Hybrid",
                type: "Full-Time",
                experience: "5+ years",
                description: "We're looking for an experienced full-stack developer to lead complex projects and mentor junior team members. Join our innovative team and work on cutting-edge technologies.",
                responsibilities: [
                    "Design and develop scalable web applications using modern frameworks",
                    "Lead technical architecture decisions and code reviews",
                    "Mentor junior developers and contribute to team growth",
                    "Collaborate with product managers and designers to deliver features",
                    "Write clean, maintainable, and well-tested code",
                    "Participate in agile ceremonies and sprint planning"
                ],
                requirements: [
                    "5+ years of professional full-stack development experience",
                    "Strong proficiency in React, Next.js, and TypeScript",
                    "Experience with Node.js and building RESTful APIs",
                    "Knowledge of database design (PostgreSQL, MongoDB)",
                    "Experience with cloud platforms (AWS, Azure, or GCP)",
                    "Excellent problem-solving and communication skills",
                    "Bachelor's degree in Computer Science or related field"
                ],
                niceToHave: [
                    "Experience with Next.js 13+ and App Router",
                    "Knowledge of DevOps practices and CI/CD pipelines",
                    "Contributions to open-source projects",
                    "Experience leading technical teams",
                    "Familiarity with microservices architecture",
                    "Understanding of containerization (Docker, Kubernetes)"
                ],
                isActive: true
            }
        });

        console.log('✅ Sample position created successfully!');
        console.log('Position ID:', position.id);
        console.log('Title:', position.title);
        console.log('\nYou can now view this position at:');
        console.log('- Admin: http://localhost:3000/admin/positions');
        console.log('- Careers Page: http://localhost:3000/careers');

    } catch (error) {
        console.error('❌ Error creating sample position:', error);
    } finally {
        await prisma.$disconnect();
    }
}

createSamplePosition();
