import { fetchData } from "./fetchData.js";
import { createTab } from "./tabGenerator.js";

async function app() {
  const data = await fetchData();
  createTab(data);
}

await app();
