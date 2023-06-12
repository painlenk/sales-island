import { PrismaClient } from "@prisma/client";
import { generateID } from "../../fn";

const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  try {
    const { name, price, stock } = req.body;
    await prisma.products.create({
      data: {
        id: generateID(),
        name: name,
        price: Number(price),
        stock: Number(stock),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occurred." }).end();
  }
}
