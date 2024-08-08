import { Request, Response } from "express";
import { User } from "../models/User";
import { UserSecondary } from "../models/UserSecondary";
import { Categorie } from "../models/Categories";
import slugify from 'slugify';

export const home = (req: Request, res: Response) => {

    res.render('pages/index')
}

export const nameLang = (req: Request, res: Response) => {
    let name = req.params.name;
    let lang = req.params.lang;
    let showMessage = true;
    
    var produtos = [
        {name: "Doritos", price: 6},
        {name: "Coca-Cola", price: 9.4},
        {name: "Mentos", price: 2.8},
        {name: "paçoca", price: .5},
        {name: "Picolé", price: 2},
    ];

    res.render('pages/produtos', {
        name,
        lang,
        showMessage,
        produtos
    });
}

export const user =  (req: Request, res: Response) => {
    let name = req.params.name
    if(name){
        res.send(`Oi usuario ${name}`);
    } else {
        res.send('Ola usuario');
    }
}
export const userSecondary =  (req: Request, res: Response) => {
    res.render('pages/users/create')
}

export const createUserSecondary = async (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;

    if(email){
        const userNew = UserSecondary.build({ email, password });
        await userNew.save();
    }

   res.redirect('/users/login');

}

export const userLogin = (req: Request, res: Response) => {
    res.render('pages/users/login')
}


export const createUser =  async (req: Request, res: Response) => {
    
    let name: string = req.body.name;
    let age: number = parseInt(req.body.age);
    console.log(name, age);
    
    if(name){
        const userNew = User.build({ name })
        if(age) {
            userNew.age = age; 
        }
        await userNew.save();
    }
   res.redirect('/');
}

export const createCategory =  async (req: Request, res: Response) => {
    
    let name: string = req.body.name;
    let slug: string = slugify(req.body.name);

    if(name) {
        const newCategory = Categorie.build({ name, slug });
        await newCategory.save();
    }
   res.redirect('/categories/categories');
}

export const updateCategories =  async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    let name: string = req.body.name;
    
    const listCat = await Categorie.findByPk(id);

    let updateCat = await Categorie.findByPk(id);
    if(updateCat) {
        updateCat.name = name;
        //updateCat.slug = slugify(name);
        await updateCat.save();
    }

    res.render('pages/categories/updateCategory', { id, listCat });
}

export const categories = (req: Request, res: Response) => {
   
    res.render('pages/categories/categories')
}

export const listCategories = async (req: Request, res: Response) => {
    const allCategories = await Categorie.findAll();
    console.log(allCategories)
    
    res.render('pages/categories/list', { allCategories })
}