import { login } from '../../../lib/users';
import connectDB from '../../../utils/mongoose';
import User from '../../../models/User';

const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // console.log(req.body);
    const user = await User.findOne({
      username: req.body.username,
    });
    if (user) {
      if (
        req.body.username === user.username &&
        req.body.password === user.password
      ) {
        // console.log(`JS TOKEN SECRET${process.env.JWT_SECRET_KEY}`);
        const token = jwt.sign(
          { name: user.name },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: '2d',
          }
        );
        // console.log('login true');
        res.status(200).json({ success: true, authToken: token, res: user });
      }
    }
  }
};
export default connectDB(handler);
