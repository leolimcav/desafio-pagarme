import App from "./app/app";

const server = App;

server.listen(process.env.PORT || 3000, () => {
  console.log("Running on 3000");
});
