import { SpondAPI } from './client';

const spondSingleton = async () => {
  const client = new SpondAPI(process.env.SPOND_CLUBID!);
  await client.login(process.env.SPOND_USERNAME!, process.env.SPOND_PASSWORD!);
  return client;
}

declare const globalThis: {
  spondGlobal: SpondAPI;
} & typeof global;

const spond = globalThis.spondGlobal ?? await spondSingleton()

export default spond;

if (process.env.NODE_ENV !== 'production') globalThis.spondGlobal = spond