import "reflect-metadata"
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: number
  fine_amount: number;
  brand: string;
  category_id: string;
}

// @injectable()
class CreateCarUseCase {

  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  async execute({ name, description, fine_amount, daily_rate, license_plate, brand, category_id }): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

    if (carAlreadyExists) {
      throw new AppError("Car already exists")
    }

    const car = await this.carsRepository.create({
      name,
      description,
      fine_amount,
      daily_rate,
      license_plate,
      brand,
      category_id
    })

    return car;
  }
}

export { CreateCarUseCase } 