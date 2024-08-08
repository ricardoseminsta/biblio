import * as HomeController from '../controllers/homeController';
import { Router } from "express";

const router = Router();

router.get('/', HomeController.home);
router.get('/categories', HomeController.categories);
router.get('/categories/list', HomeController.listCategories);
router.get('/categories/update/:id', HomeController.updateCategories);
router.get('/user/create', HomeController.userSecondary);
router.post('/user/create', HomeController.createUserSecondary);

router.get('/user/login', HomeController.userLogin);



router.get('/usuario/:name?', HomeController.user);
router.get('/:name/:lang', HomeController.nameLang);
router.post('/usuariocadastrado', HomeController.createUser);
router.post('/categoriacadastrado', HomeController.createCategory);

export default router;