import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateCarUseCase } from './CreateCarUseCase';


let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  })

  it("should be albe to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      fine_amount: 60,
      daily_rate: 100,
      license_plate: "ABC-1234",
      brand: "Brand",
      category_id: "category"
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Description Car",
        fine_amount: 60,
        daily_rate: 100,
        license_plate: "ABC-1234",
        brand: "Brand",
        category_id: "category"
      });

      await createCarUseCase.execute({
        name: "Car2",
        description: "Description Car",
        fine_amount: 60,
        daily_rate: 100,
        license_plate: "ABC-1234",
        brand: "Brand",
        category_id: "category"
      });
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not be able to create a car available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Description Car",
      fine_amount: 60,
      daily_rate: 100,
      license_plate: "ABCD-1234",
      brand: "Brand",
      category_id: "category"
    });

    expect(car.available).toBe(true)
  })

})