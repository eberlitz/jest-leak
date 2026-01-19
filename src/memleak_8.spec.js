import { run } from "./ref.js";

it("should not leak", async () => {
  await run();
});
