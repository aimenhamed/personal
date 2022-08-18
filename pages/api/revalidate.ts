import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ revalidated?: boolean; message?: string }>
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });
  if (req.body["password"] !== process.env.PASSWORD)
    return res.status(401).json({ message: "Password incorrect" });
  delete req.body["password"];

  try {
    res.revalidate("/");
    res.status(200).json({ revalidated: true });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
