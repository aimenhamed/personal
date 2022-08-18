import type { NextApiRequest, NextApiResponse } from "next";
import { prisma, Project } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project | { message: string }>
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });
  if (req.body["password"] !== process.env.PASSWORD)
    return res.status(401).json({ message: "Password incorrect" });
  delete req.body["password"];

  try {
    const savedProject = await prisma.project.create({ data: req.body });
    res.status(200).json(savedProject);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
