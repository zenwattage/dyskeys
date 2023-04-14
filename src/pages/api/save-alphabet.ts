import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from '../../lib/db';

const saveAlphabet = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  console.log('Request body:', req.body);
  // console.log('Parsed alphabetData:', JSON.parse(req.body));

  const { alphabetData, name } = req.body;

  try {
    const connection = await createConnection();
    await connection.query(
      'INSERT INTO alphabets (name, alphabet_data) VALUES (?, ?)',
      // [name, JSON.stringify(alphabetData)]
      [name, alphabetData]
    );
    await connection.end();

    res.status(201).json({ message: 'Alphabet saved successfully!' });
  } catch (error) {
    console.log('Error while saving alphabet:', error);
    res.status(500).json({ message: 'Error saving alphabet', error });
  }
};

export default saveAlphabet;
