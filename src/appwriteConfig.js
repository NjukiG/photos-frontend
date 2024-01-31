import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65ba084e9f2be3f710e2");

export const account = new Account(client);

export default client;
