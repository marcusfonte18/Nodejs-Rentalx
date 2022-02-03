import { AppError } from '../../../error/AppError';
import { Category } from '../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class PostgresCategoriesRepositoy implements ICategoriesRepository {

  findByName(name: string): Promise<Category> {
    console.log(name);
    throw new AppError('Method not implemented.');

  }
  list(): Promise<Category[]> {
    throw new AppError('Method not implemented.');
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    console.log(name, description);
    throw new AppError('Method not implemented.');
  }

}

export { PostgresCategoriesRepositoy }