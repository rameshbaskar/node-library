import * as UserService from '../services/userService';

export function createUser(req, res) {
  if (!req.body.username) {
    return res.status(400).send({
      error: 'Bad request. Please check the params.'
    });
  }

  UserService.createUser(
    req.body.username,
    req.body.plainTextPassword,
    req.body.fullName,
    req.body.email
  ).then((user) => {
    return res.status(201).send({
      user: user
    });
  }).catch((error) => {
    return res.status(500).send({
      error: JSON.stringify(error)
    });
  });
}

export function getUser(req, res) {
  const username = req.query.username;
  const email = req.query.email;

  if (!username && !email) {
    return res.status(400).send({
      error: 'Missing username or email parameter'
    });
  }

  if (username) {
    getUserByUserName(req, res);
  } else {
    getUserByEmail(req, res);
  }
}

function getUserByUserName(req, res) {
  UserService.findByUsername(req.query.username).then((user) => {
    if (user === undefined || user === null) {
      return res.status(404).send({
        error: 'User not found'
      });
    } else {
      return res.status(200).send({
        user: user
      });
    }
  }).catch((error) => {
    return res.status(500).send({
      error: JSON.stringify(error)
    });
  });
}

function getUserByEmail(req, res) {
  UserService.findByEmail(req.query.email).then((user) => {
    if (user === undefined || user === null) {
      return res.status(404).send({
        error: 'User not found'
      });
    } else {
      return res.status(200).send({
        user: user
      });
    }
  }).catch((error) => {
    return res.status(500).send({
      error: JSON.stringify(error)
    });
  });
}