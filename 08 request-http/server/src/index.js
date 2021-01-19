const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");
const multiparty = require("connect-multiparty");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); */

const multipartyMiddleware = multiparty({ uploadDir: "./uploads" });

app.post("/upload", multipartyMiddleware, (request, response) => {
  const files = request.files;
  console.log(files);
  return response.json({ message: files });
});

app.get("/downloadExcel", (request, response) => {
  response.download("./downloads/report.xlsx");
});

app.get("/downloadPdf", (request, response) => {
  response.download("./downloads/report.pdf");
});

app.use((error, request, response, next) =>
  response.json({ error: error.message })
);

app.listen(3333, () => console.log("🎉 Server Online"));
