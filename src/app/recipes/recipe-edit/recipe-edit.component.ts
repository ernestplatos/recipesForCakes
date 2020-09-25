import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeID: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService){}

  ngOnInit() {
    this.activatedRoute.params.subscribe((parameters: Params) => {
      this.recipeID = +parameters['id'];
      this.editMode = parameters['id'] != null;
      this.initForm();
    });
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required)
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  getIngredientsControls(){
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeID, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  private initForm() {
    let recipeName = '';
    let recipeDesc = '';
    let recipeImageUrl = '';
    let method = '';
    // tslint:disable-next-line: prefer-const
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.recipeID);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImageUrl = recipe.imageUrl;
      method = recipe.method;
      if (recipe['ingredients']) {
        for (let oneIngredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(oneIngredient.name, Validators.required),
              amount: new FormControl(oneIngredient.amount, Validators.required)
            })
          );
        }
      }
    } // end of editMode = true

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      imageUrl: new FormControl(recipeImageUrl, Validators.required),
      method: new FormControl(method, Validators.required),
      ingredients : recipeIngredients
    });
  }
} // end of RecipeEditComponent(){}
