import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeID: number;
  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router){}

  ngOnInit() {
    this.activatedRoute.params.subscribe((theParameters: Params) => {
      this.recipeID = +theParameters['id'];
      this.recipe = this.recipeService.getRecipe(+theParameters['id']);
    });
  } // ngOnInit(){}

  onAddToShoppingList(){
    this.recipeService.addIngredientsToTheShoppingList(this.recipe.ingredients);
  }

  onDelete(){
    this.recipeService.removeRecipe(this.recipeID);
    this.router.navigate(['/recipes']);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

}
