import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize/dist/sequelize.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LivrosController } from "./livros.controller";
import { LivrosService } from "./livros.service";
import { Livro } from "./livro.model";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
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
