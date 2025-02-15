import ngApiMock from "@ng-apimock/core";
import devInterface from "@ng-apimock/dev-interface";
import cors from "cors";
import express from "express";
import serveStatic from "serve-static";

const app = express();
app.set("port", 3001);

const corsOptions = {
  origin: "http//localhost:3000",
  allowendHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Method",
    "Access-Control-Request-Header",
    "TARGET_ID",
    "REQUEST_ID",
    "REQUESTOR_ID",
    "X_DIGITRACE_ID",
    "CORRELATION_ID",
  ],
  credentials: true,
  enablePreflight: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

ngApiMock.processor.process({
  src: "src",
  patterns: {
    mocks: "app/common/mock-server/mock-data/**/*.json",
    presets: "app/**/*.preset.json",
  },
  watch: true,
});

app.listen(app.get("port"), () => {
  console.log("@ng-apimock/core running on port", app.get("port"));
});
app.use(ngApiMock.middleware);
app.use("/mocks/", serveStatic(devInterface));
