import { SERVER_ID, SERVER_PASSWORD } from "../secret/serverkey";

export class Constant {
  static BASE_URL = `mongodb+srv://${SERVER_ID}:${SERVER_PASSWORD}@santa-server.1f9x0pu.mongodb.net/?retryWrites=true&w=majority`;
}
