import { createTab } from "./tabGenerator.js";
import { sortFunction } from "./sortFunction.js";
(async () => {
  const { fetchData } = await import("./fetchData.js");

  async function app() {
    createTab(await fetchData());

    let i = 0;

    setInterval(() => {
      const resulOfSort = sortFunction(
        document.querySelectorAll("[data-id]"),
        i,
      );
      i++;
      if (i === 8) {
        i = 0;
      }
      document.querySelectorAll("[data-id]").forEach((element) => {
        element.remove();
      });
      document.querySelector("table").append(...resulOfSort);
    }, 2000);
  }

  await app();
})();
