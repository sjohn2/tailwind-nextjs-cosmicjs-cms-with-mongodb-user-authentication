import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 5) {
        throw new Error('Minimum 5 characters required');
      } else if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error(
          'Password must contain at least one letter and one number'
        );
      }
    },
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
