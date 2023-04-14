import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from '../../lib/db';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const connection = await createConnection();
      const [rows] = await connection.query(
        'SELECT alphabet_data FROM alphabets'
      );
      connection.end();

      res.status(200).json({ alphabets: rows });
    } catch (error) {
      console.error('Error fetching alphabets:', error);
      res
        .status(500)
        .json({ message: 'An error occurred while fetching the alphabets' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
