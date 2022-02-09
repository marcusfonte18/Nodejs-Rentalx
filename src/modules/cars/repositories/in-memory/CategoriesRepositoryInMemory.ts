import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {

  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = await this.categories.find(categories => categories.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    const listCategories = await this.categories;

    return listCategories;
  }


  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }

}

export { CategoriesRepositoryInMemory };