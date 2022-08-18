import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize/dist/sequelize.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LivrosController } from "./livros.controller";
import { LivrosService } from "./livros.service";
import { Livro } from "./livro.model";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "livraria",
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
