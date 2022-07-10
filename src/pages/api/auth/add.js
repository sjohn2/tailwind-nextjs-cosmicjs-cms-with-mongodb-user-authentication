import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/User';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addTest(req, res) {
  try {
    await connectMongo();
    const test = await User.create(req.body);
    res.json({ test });
    res.status(201).json({ success: true, data: pet });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
