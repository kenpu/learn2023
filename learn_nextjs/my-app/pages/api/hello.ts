// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'

type Data = {
  name: string,
  err?: any,
  data?: any,
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let response: Data = {
    name: 'John Doe',
    data: [],
  }

  await delay(1000)

  const files = await fs.readdir('.')
  files.forEach(value => response.data.push(value))
  
  res.status(200).json(response)
}
