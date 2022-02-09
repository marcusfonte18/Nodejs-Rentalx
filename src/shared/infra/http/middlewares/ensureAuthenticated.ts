import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '@shared/errors/AppError';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Bearer + o Token que vem pelo header
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing!', 401);
  }

  //Separar o Bearer em 2, na primeira parte o Bearer e na segunda o Token
  const [, token] = authHeader.split(" ");

  //Se der Sucesso ele continua, se der errado ele lança uma excessão 

  try {
    const { sub: user_id } = verify(token, "d2537851436276b02eeb9ebf12bb37d1") as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exist!", 401)
    }

    request.user = {
      id: user_id
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401)
  }

}