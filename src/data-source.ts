import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ingredient } from "./entity/ingredient"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "masakopo",
    synchronize: false,
    logging: false,
    entities: [Ingredient],
    migrations: [],
    subscribers: [],
})
