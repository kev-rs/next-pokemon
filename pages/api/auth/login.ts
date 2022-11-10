import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = 
  | { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const user = req.body as { email: string; password: string; };

  if(!user) return res.status(404).json({ message: 'Not user provided' });
  if(user.email !== 'admin@admin.com' && user.password !== 'admin') return res.status(401).json({ message: 'Invalid credentials' });

  
}

