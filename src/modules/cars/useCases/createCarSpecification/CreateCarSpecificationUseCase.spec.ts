import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateCarSpecificationUseCase } from './CreateCaSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car Specification", () => {

 beforeEach(() => {
  carsRepositoryInMemory = new CarsRepositoryInMemory();
  createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
 })

 it("shoud not be able to add a new specification to a now-existent car", async () => {
  expect(async () => {
   const car_id = "1234";
   const specifications_id = ["548542"];

   await createCarSpecificationUseCase.execute({ car_id, specifications_id })
  }).rejects.toBeInstanceOf(AppError);


 })

 it("shoud be able to add a new specification to the car", async () => {
  const car = await carsRepositoryInMemory.create({
   name: "Name Car",
   description: "Description Car",
   fine_amount: 60,
   daily_rate: 100,
   license_plate: "ABC-1234",
   brand: "Brand",
   category_id: "category"
  });

  const specifications_id = ["548542"];

  await createCarSpecificationUseCase.execute({ car_id: car.id, specifications_id })

 })
});