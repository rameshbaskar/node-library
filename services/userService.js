import {User} from '../models/user';
import * as Security from '../utils/security';

export async function findByUsername(username) {
  return await User.findOne({
    where: {
      username: username
    }
  });
}

export async function findByEmail(email) {
  return await User.findOne({
    where: {
      email: email
    }
  });
}

export async function createUser(username, plainText, fullName, email) {
  const encPassword = Security.encryptPassword(plainText);
  return await User.create({
    username: username,
    encPassword: encPassword,
    fullName: fullName,
    email: email
  });
}

export async function isAuthorised(username, plainText) {
  const user = await findByUsername(username);
  if (user === undefined || user === null) {
    return false;
  } else {
    return Security.isPasswordValid(user.encPassword, plainText);
  }
}

export async function updatePassword(username, plainText) {
  const encPassword = Security.encryptPassword(plainText);
  await User.update({
    encPassword: encPassword
  }, {
    where: {
      username: username
    }
  });
}

export async function updateEmail(username, email) {
  await User.update({
    email: email
  }, {
    where: {
      username: username
    }
  });
}

export async function deleteUser(username) {
  await User.destroy({
    where: {
      username: username
    }
  });
}