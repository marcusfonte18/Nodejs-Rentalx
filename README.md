# Cadastro de carro

**RF** -> Regra Funcional
  - Deve ser possível cadastrar um novo carro;

**RN** -> Regra de Negócio 
  - Não deve ser possível cadastrar um novo carro com uma placa já existente;
  - Não deve ser possível alterar a placa de um carro já cadastrado;
  - O carro deve ser cadastrado, por padrão, com disponibilidade;
  - O Usuário responsável pelo cadastro deve ser um usuário Administrador;

# Listagem de Carros

**RF** 
  - Deve ser possível litar todos os carros disponíveis;
  - Deve ser possível litar todos os carros disponíveis pelo nome da marca;
  - Deve ser possível litar todos os carros disponíveis pelo nome da categoria;
  - Deve ser possível litar todos os carros disponíveis pelo nome do carro;


**RN**
 - O usuário não precisa estar logado no sistema;


# Cadastro de Especificações do Carro

**RF**
  - Deve ser possível cadastrar uma especificação para um carro;
  - Deve ser possível listar todas as especificações;
  - Deve ser possível listar todos os carros;

**RN**
  - Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
  - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
   - O Usuário responsável pelo cadastro deve ser um usuário Administrador;

# Cadastro de imagem do carro

**RF**
  - Deve ser possível cadastrar a imagem do carro;
  - Deve ser possível listar todos os carros;
  
**RNF**
  - Utilizar o multer para upload dos arquivos;

**RN**
  - o usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
  - O usuário responsável pelo cadastro deve ser um administrador;


# Alguel de carro

**RF**
  - Deve ser possível cadastrar um aluguel;

**RN**
  - O aluguel deve ter duração miníma de 24 horas;
  - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para um mesmo usuário;
  - Não deve ser possível cadastrar o novo aluguel caso já exista um aberto para o mesmo carro;