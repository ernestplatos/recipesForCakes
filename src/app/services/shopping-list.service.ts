import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Ingredient} from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsHaveChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Caster sugar', '200'),
    new Ingredient('Softened butter', '200'),
    new Ingredient('Egg', '4')
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsHaveChanged.next(this.ingredients.slice());
  } 

  addIngredient(ingredientAdded: Ingredient){
    this.ingredients.push(ingredientAdded);
    this.ingredientsHaveChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredientsAdded: Ingredient[]) {
    this.ingredients.push(...ingredientsAdded);
    this.ingredientsHaveChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsHaveChanged.next(this.ingredients.slice());
  }

}
