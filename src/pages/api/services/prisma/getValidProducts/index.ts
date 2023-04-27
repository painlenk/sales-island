import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getValidProducts(req: any, res: any) {
  try {
    const result = await prisma.products.findMany({ where: { active: true } });
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occurred." });
  }
}
