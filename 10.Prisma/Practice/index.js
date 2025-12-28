import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      PRN: 22420263,
      Roll: 372078,
      name: "Sathe Onkar Abasaheb",
      div: "B",
      department: "AI and Data Science",
    },
  });

  console.log("User Created:", user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
