import { NextApiRequest, NextApiResponse } from "next";

import { Product, getProduct } from "@/services/products";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Product | {}>
) => {
  const product = await getProduct("12345");

  res.status(200).json({ product });
};

export default handler;
