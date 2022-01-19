import { Category } from '../model/Category';

//DTO => Data transfer Object

//I de interface - O que está interface faz e DTO
interface ICreateCategoryDTO {
  name: string,
  description: string,
}



interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };