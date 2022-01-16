// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPostsData } from "../../lib/posts";

type Data = {
  blogs: { title: string; description: string; date: string }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let blogs = getAllPostsData();
  res.status(200).json({ blogs });
}
