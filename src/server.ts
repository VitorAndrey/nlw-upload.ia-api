import { fastify } from "fastify";

import { uploadVideoRoute } from "./routes/upload-video";
import { getAllProptsRoute } from "./routes/get-all-prompts";
import { createTranscriptionRoute } from "./routes/create-transcription";

const app = fastify();

app.register(getAllProptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
