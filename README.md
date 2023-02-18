# customers-register-api

<p align="center">
  <img  src="https://sistemas.mre.gov.br/kitweb/datafiles/Belgrado/pt-br/image/CPF%20logo.jpg">
</p>
<h1 align="center">
 Customers Register
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Um projeto typescript designado para cadastro de clientes através do CPF.

</br>

## Features

- Adiciona clientes no banco de dados.
- Busca e lista todos os clientes usando paginação.
- Busca cliente através do CPF.

</br>

## API Reference

`Utilize o arquivo customer_register_postman_collection.json para importar a coleção plataforma de API REST`

### Cria cliente

```http
POST /customer/cpf
```

#### Request:

| Body        | Type     | Description                          |
| :---------- | :------- | :----------------------------------- |
| `name`      | `string` | **Required**. Seu lindo nome         |
| `dateBirth` | `string` | **Required**. Sua data de nascimento |
| `cpf`       | `string` | **Required**. Seu cpf                |

</br>

#### Response:

```json
{
  "name": "NOME INSERIDO",
  "dateBirth": "DD/MM/AAAA",
  "cpf": "CPF INSERIDO"
}
```

#

### Busca clientes

```http
GET /customers?search=&take=&skip=
```

#### Request:

`obs: essa requisição utiliza apenas Query Params.`

| Query Params | Type      | Description                                                                                   |
| :----------- | :-------- | :-------------------------------------------------------------------------------------------- |
| `search`     | `integer` | Busca CPF especificado                                                                        |
| `take`       | `integer` | Lista quantos itens por página você deseja ver (se não for especificado valor, o padrão é 10) |
| `skip`       | `integer` | Pula a quantidade de registros inserida(se não for especificado valor, o padrão é 0)          |

#

## Environment Variables

Para executar este projeto, você precisará adicionar as seguintes variáveis ​​de ambiente em seu arquivo .env

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

</br>

## Run Locally

Clone o repositório

```bash
  git clone https://github.com/Tutuezin/customers-register-api.git
```

Instale as dependências

```bash
  yarn install ou npm install
```

Crie o banco de dados

```bash
  yarn dev:migration ou npm run dev:migration
```

Inicie o servidor

```bash
  yarn dev ou npm run dev
```

## Run Tests

Rode os testes

```bash
  yarn test ou npm run test
```

Para popular novamente o banco de dados utilize

```bash
  yarn dev:seed ou npm run dev:seed
```

</br>

## Run with Docker

Instale as dependencias e inicie o servidor

```bash
  docker compose up ou docker-compose up
```

Rode os testes

```bash
  docker container exec -it customers_node yarn test
                        ou
  docker container exec -it customers_node npm run test
```

Para popular novamente o banco de dados utilize

```bash
  docker container exec -it customers_node yarn dev:seed
                        ou
  docker container exec -it customers_node npm run dev:seed
```

## Lessons Learned

Nesse projeto aprendi a fazer manualmente um algoritmo de validação de CPF.

</br>

## Acknowledgements

- [Igma](https://www.linkedin.com/company/igma-digital-product/?src=polymer.co)
- [Regras do Algoritmo](https://www.macoratti.net/alg_cpf.htm#:~:text=O)
- [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Author

- Feito com 💜 por [Arthur Alcantara](https://www.linkedin.com/in/arthur-alcantara-dev/)
  <br/>

#
