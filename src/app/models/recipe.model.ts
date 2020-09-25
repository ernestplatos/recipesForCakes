import { Ingredient } from './ingredient.model';

export class Recipe {
    name: string;
    description: string;
    imageUrl: string;
    method: string;
    ingredients: Ingredient[];

    constructor(name: string, description: string, imageUrl: string, recipe: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.method = recipe;
        this.ingredients = ingredients;
    }
}
