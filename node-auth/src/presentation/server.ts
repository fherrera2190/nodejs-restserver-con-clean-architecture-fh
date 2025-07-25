import express, { Router } from "express";

interface Options {
  port?: number;
  routes: Router;
}
export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3000, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    //Middleware
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    //Routes
    this.app.use(this.routes);

    //Escuchar el puerto
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
