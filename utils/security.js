import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export function encryptPassword(plainText) {
  return bcrypt.hashSync(plainText, SALT_ROUNDS);
}

export function isPasswordValid(encPassword, plainText) {
  return bcrypt.compareSync(plainText, encPassword)
}