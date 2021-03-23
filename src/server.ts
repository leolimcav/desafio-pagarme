import "reflect-metadata";
import App from "./app/app";
import "./config/database/index";

const server = App;

server.listen(
  process.env.NODE_ENV === "production" ? process.env.PORT : 3000,
  async () => {
    console.log(
      process.env.NODE_ENV === "production"
        ? `running on port ${process.env.PORT}`
        : `running on port ${3000}`
    );
  }
);
