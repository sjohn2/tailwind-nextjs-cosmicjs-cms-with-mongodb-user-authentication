import Router from 'next/router';
import dbConnect from '../../../utils/connectMongo';
import User from '../../../models/User';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const payload = JSON.parse(req.body);
  console.log(payload);

  try {
    await dbConnect();
    const test = await User.create(payload);
    res.status(201).json({ success: true, data: test });
  } catch (error) {
    res.status(400).json({ success: false });
    res.json({ error });
  }
}
