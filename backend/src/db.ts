import knex from "knex";
import knexConfig from "../knexfile";

const db = knex(knexConfig.development as knex.Knex.Config);

export default db;
