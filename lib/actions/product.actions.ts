"use server";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
import { convertToPlainObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts() {
  //   const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObj(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
