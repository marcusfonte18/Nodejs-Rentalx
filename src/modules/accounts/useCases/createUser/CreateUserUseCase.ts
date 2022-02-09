import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt'

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {

    const userAlredyExists = await this.usersRepository.findByEmail(email);

    if (userAlredyExists) {
      throw new AppError(`User ${email} already exists`)
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ name, email, driver_license, password: passwordHash })
  }
}

export { CreateUserUseCase }