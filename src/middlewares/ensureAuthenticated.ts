import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Bearer + o Token que vem pelo header
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing!');
  }

  //Separar o Bearer em 2, na primeira parte o Bearer e na segunda o Token
  const [, token] = authHeader.split(" ");

  //Se der Sucesso ele continua, se der errado ele lança uma excessão 

  try {
    const { sub: user_id } = verify(token, "d2537851436276b02eeb9ebf12bb37d1") as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id)

    if (!user) {
      throw new Error("User does not exist!")
    }


    next();
  } catch {
    throw new Error("Invalid token!")
  }

}