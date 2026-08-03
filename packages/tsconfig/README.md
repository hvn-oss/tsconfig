# @hvn-oss/tsconfig

Shared TypeScript configuration presets for HVN OSS projects.

## Installation

```bash
vp add -D @hvn-oss/tsconfig
```

## Presets

- `@hvn-oss/tsconfig/bun` - strict Bun and Vite+ config with ES2023 and DOM APIs.
- `@hvn-oss/tsconfig/library` - strict bundler-oriented library config.
- `@hvn-oss/tsconfig/node-library` - strict Node.js library config using `nodenext` module resolution.
- `@hvn-oss/tsconfig/react-library` - strict React library config for React packages.
- `@hvn-oss/tsconfig/vite` - strict Vite app config with DOM and React JSX.
- `@hvn-oss/tsconfig/vp-react-library` - strict React library config for Vite+ packages.
- `@hvn-oss/tsconfig/vp-vite` - strict Vite+ app config with DOM, React JSX, and Vite+ test globals.

Install the environment packages used by your chosen preset:

- `bun` requires `@types/bun` and `vite-plus`.
- `library`, `node-library`, and `react-library` require `@types/node`.
- `vite` requires `@types/node` and `vite`.
- `vp-react-library` and `vp-vite` require `@types/node` and `vite-plus`.

For example, install the Bun preset's types with:

```bash
vp add -D @types/bun vite-plus
```

The library presets include `noEmit` and are intended for type-checking while a build tool emits package output. If TypeScript should emit declarations, override the emit-related options in the consuming project.

## Usage

Extend one of the presets from your project `tsconfig.json`.

For a Bun project:

```json
{
  "extends": "@hvn-oss/tsconfig/bun",
  "include": ["src", "tests", "vite.config.ts"]
}
```

For a bundler-oriented library:

```json
{
  "extends": "@hvn-oss/tsconfig/library",
  "include": ["src", "tests"]
}
```

For a Node.js library:

```json
{
  "extends": "@hvn-oss/tsconfig/node-library",
  "include": ["src", "tests"]
}
```

For a React library:

```json
{
  "extends": "@hvn-oss/tsconfig/react-library",
  "include": ["src", "tests"]
}
```

For a Vite+ React library:

```json
{
  "extends": "@hvn-oss/tsconfig/vp-react-library",
  "include": ["src", "tests", "vite.config.ts"]
}
```

For a Vite app:

```json
{
  "extends": "@hvn-oss/tsconfig/vite",
  "include": ["src", "tests", "vite.config.ts"]
}
```

For a Vite+ app:

```json
{
  "extends": "@hvn-oss/tsconfig/vp-vite",
  "include": ["src", "tests", "vite.config.ts"]
}
```

## Development

Install dependencies:

```bash
vp install
```
