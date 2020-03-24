const express = require('express');

const cors = require('cors')

const app = express();

const routes = require('./routes');

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

//notes
/**
 * Metodos HTTP: interagem com o back-end:
 * GET: Buscar inforação
 * POST: Criar uma informação
 * PUT: Alterar uma inforação
 * DELETE: Deletar uma inforação
 */

/**
 * Parâmetros:
 * Query Params: Parâmetros nomeadas enviados na rota após ? (filtros,paginação) pode apendar com &
 * Route Params: Parâmetros utilizados para identificar os recursos
 * Request Body: Corpo da requisição utilizado para criar/alterar recursos
 */

/**
 * Banco de Dados
 * SQL: MySQL, SQLite, postgreSQL, Oracle, Microsoft SQL server
 * noSQL: MongoDB, CouchDB
 */

/**Driver: SELECT * from users
 * Query Builder: table('users').select(*).where(filtro)
 * 
 */