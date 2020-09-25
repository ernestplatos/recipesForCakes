import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesHaveChanged = new Subject<Recipe[]>();
    recipes: Recipe[] = [
    new Recipe('Easy carrot cake',
    'Top this classic carrot cake with moreish icing and chopped walnuts or pecans. Serve as a sweet treat with a cup of tea any time of the day.',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg?quality=90&webp=true&resize=300,272',
    'Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of two 20cm cake tins with baking parchment. Whisk the oil, yogurt, eggs, vanilla and zest in a jug. Mix the flour, sugar, cinnamon and nutmeg with a good pinch of salt in a bowl. Squeeze any lumps of sugar through your fingers, shaking the bowl a few times to bring the lumps to the surface. Add the wet ingredients to the dry, along with the carrots, raisins and half the nuts, if using. Mix well to combine, then divide between the tins. Bake for 25-30 mins or until a skewer inserted into the centre of the cake comes out clean. If any wet mixture clings to the skewer, return to the oven for 5 mins, then check again. Leave to cool in the tins. To make the icing, beat the butter and sugar together until smooth. Add half the soft cheese and beat again, then add the rest (adding it bit by bit prevents the icing from splitting). Remove the cakes from the tins and sandwich together with half the icing. Top with the remaining icing and scatter with the remaining walnuts. Will keep in the fridge for up to five days. Best eaten at room temperature.',
    [new Ingredient('Vegetable oil, plus extra for the tin', '230'), new Ingredient('Natural yogurt', '100'), new Ingredient('Large eggs', '4'), new Ingredient('Vanilla extract', '1.5')]),
    new Recipe('Butterfly cupcakes',
    'These pretty cupcakes are perfect for a special occasion. The flavoured syrup help the cakes stay moist, so you can make them a day ahead and decorate the next day.',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butterfly-cupcakes-64fc369.jpg?quality=90&webp=true&resize=300,272',
    'Heat oven to 180C/160C fan/gas 4 and line two 12-hole cupcake tins with paper muffin cases. Put all the cake ingredients in a large bowl and whisk with an electric whisk for 3-4 mins or until pale and light. Divide the mixture evenly among the 24 cases and bake for 20 mins or until a skewer inserted into the centre of a cake comes out clean. Leave to cool on a wire rack. While the cupcakes bake, make the syrup. Put the sugar, lavender and 300ml water in a medium pan over a low heat. Bring gradually to the boil, cook for 2 mins, then turn off the heat and leave to infuse. When cold, strain through a sieve into a small jug. To make the icing, put the butter, icing sugar and 100ml of the syrup in a large bowl. Mix with a wooden spoon, then switch to an electric whisk and whisk until smooth and fluffy. Divide the mixture between three bowls. Add a tiny dot of food colouring gel to each bowl to make three different colours of buttercream – stir to mix, then transfer half of each colour to disposable piping bags. Use a cocktail stick to poke a few little holes in the top of the cupcakes, then drizzle each with 1 tsp of the syrup. Put 1 heaped tsp of icing onto each cake (do eight of each colour) and swirl it round with the back of the spoon to completely cover the top. Next, use the matching piping bag to pipe a straight line about 2-3 cm long across the middle of each cake. To make the wings, melt the white chocolate in a heatproof bowl over a pan of simmering water. Divide into three smaller bowls and add the same gel colours as before. Cut 8cm squares of baking parchment and, using a pen, draw a pair of butterfly wings on each square so that the design shows through on the other side or, if you prefer, trace the design below. Turn the paper over and, using the line as a guide, paint on the melted chocolate. Sprinkle crushed biscuits on the edges to create patterns, then leave to set. Once set, gently push the wings into the cupcakes at a 45-degree angle.',
    [new Ingredient('Vegetable oil, plus extra for the tin', '230'), new Ingredient('Chocolate biscuits , crushed', '2'), new Ingredient('Food colourings gels', '3'), new Ingredient('White chocolate', '400g'), new Ingredient('Dried lavender flowers', '1 tbsp'), new Ingredient('Self-raising flour', '300g')]),
    new Recipe('Battenberg cake',
    'Our traditional Battenberg cake is a delicious project for an afternoon in the kitchen. Bake this easy but impressive cake for a special occasion.',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-545469_11-0b4c87b.jpg?quality=90&webp=true&resize=300,272',
    'Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge. For the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool. To assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake. Take 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes. Carefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork. Assemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.',
    [new Ingredient('Very soft butter', '175g'), new Ingredient('Golden caster sugar', '175g'), new Ingredient('Self-raising flour', '140g'), new Ingredient('Ground almonds', '50g'), new Ingredient('Baking powder', '0,5 tbsp'), new Ingredient('Medium eggs', '3'), new Ingredient('Vanilla extract', '0,5 tsp'), new Ingredient('Almond extract', '0,25 tsp')])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToTheShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesHaveChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesHaveChanged.next(this.recipes.slice());
  }

  addRecipes(recipes: Recipe[]) {
    this.recipes.push(...recipes);
    this.recipesHaveChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesHaveChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesHaveChanged.next(this.recipes.slice());
  }




}
