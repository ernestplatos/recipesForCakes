import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.scss']
})
export class RecipeStartComponent implements OnInit {
  lastRecipeNumber: number;
  recipe: Recipe;
  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.lastRecipeNumber = (this.recipeService.recipes.length) - 1;
    this.recipe = this.recipeService.getRecipe(this.lastRecipeNumber);
  }

}
