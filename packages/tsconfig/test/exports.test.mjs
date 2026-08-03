import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const packageRoot = new URL("../", import.meta.url);

test("every preset has extensionless and JSON exports", async () => {
  const packageJson = JSON.parse(await readFile(new URL("package.json", packageRoot), "utf8"));
  const files = await readdir(packageRoot);
  const presets = files
    .filter((file) => file.endsWith(".json") && file !== "package.json")
    .map((file) => file.slice(0, -5));

  for (const preset of presets) {
    assert.equal(packageJson.exports[`./${preset}`], `./${preset}.json`);
    assert.equal(packageJson.exports[`./${preset}.json`], `./${preset}.json`);
  }
});
