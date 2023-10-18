import { federation } from "@module-federation/vite";
import json from "@rollup/plugin-json";
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const path = dirname(fileURLToPath(new URL(import.meta.url)));
const root = resolve(path, "src/client");
const outDir = resolve(path, "dist/client");

export default defineConfig(async () => {
  const federationPlugin = await federation({
    options: {
      workspaceRoot: path,
      outputPath: "dist/client",
      tsConfig: "tsconfig.json",
      federationConfig: "module-federation/federation.config.cjs",
      verbose: true,
      dev: true,
    },
    adapter: createEsBuildAdapter({ plugins: [] }),
  });

  return {
    root,
    plugins: [federationPlugin, json()],
    build: {
      outDir,
    },
  };
});
