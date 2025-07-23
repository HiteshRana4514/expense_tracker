import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('684176be00368fe8f030'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
