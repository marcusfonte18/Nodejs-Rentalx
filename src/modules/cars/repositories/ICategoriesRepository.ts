
//DTO => Data transfer Object
//I de interface - O que está interface faz e DTO

import { Category } from '../infra/typeorm/entities/Category';

interface ICreateCategoryDTO {
  name: string,
  description: string,
}


//inteface de implementação dos métodos
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };