import timer from "node:timers/promises";

export const big = new Array(10_000_000).fill(0);

export async function run() {
  gc();
  await timer.setTimeout(1000);
}
