import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const caregoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(caregoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController };