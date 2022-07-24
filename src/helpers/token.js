const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET || 'abcdefg270819786';

const generateToken = (payload) =>
  jwt.sign(payload, secret, { expiresIn: '3h', algorithm: 'HS256' });

const verifyToken = (token) => jwt.verify(token, secret);

export default {
  generateToken,
  verifyToken,
}; // Criptografia assimétrica