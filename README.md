# Testes de API com CodeceptJS

[![API tests](https://github.com/erkmnasc/Qazando-API-Codeceptjs/actions/workflows/ci.yml/badge.svg)](https://github.com/erkmnasc/Qazando-API-Codeceptjs/actions/workflows/ci.yml)

Projeto do curso Trilha QA da Qazando. Testes de API REST com CodeceptJS
(helpers REST e JSONResponse) na [SWAPI](https://swapi.dev).

## Cenários

Arquivo `people_test.js`:

- lista de pessoas responde com sucesso e traz `count` e `results`
- `/people/1` responde com sucesso, tem as chaves esperadas e os dados do
  Luke Skywalker
- pessoa inexistente responde 404

## Como rodar

Precisa de Node.js 18 ou mais novo.

```bash
npm install
npm test
```

Relatório com Allure (precisa do Allure instalado):

```bash
npm run test:allure
allure serve output
```

## CI

O GitHub Actions roda os testes a cada push na `main`, em pull requests e
manualmente (`.github/workflows/ci.yml`).
