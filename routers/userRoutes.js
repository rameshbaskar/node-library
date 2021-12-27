import * as UserController from '../controllers/userController';

export function initUserRoutes(app) {
  app.post('/users/create', (req, res) => {
    UserController.createUser(req, res);
  });

  app.get('/users', (req, res) => {
    UserController.getUser(req, res);
  });
}
