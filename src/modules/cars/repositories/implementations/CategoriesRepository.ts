import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


class CategoriesRepository implements ICategoriesRepository {

  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  //método create para criar uma categoria de carro
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      create_at: new Date()
    });

    this.categories.push(category);
  }

  //método list para listar todas as categorias
  list(): Category[] {
    return this.categories;
  }

  //método para achar uma categoria com o nome passado.
  findByName(name: string) {

    const category = this.categories.find(category => category.name === name)

    return category;

  }

}

export { CategoriesRepository } 