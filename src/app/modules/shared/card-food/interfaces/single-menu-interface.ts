import { RecipesItems } from '../../interfaces/recipesItems.interface';

export interface SingleMenuInterface {
  title: string;
  firstText: string;
  greenText: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  recipeType: RecipesItems;
}
