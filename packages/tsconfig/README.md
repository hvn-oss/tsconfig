# @hvn-oss/tsconfig

Shared TypeScript configuration presets for HVN OSS projects.

## Installation

```bash
vp add -D @hvn-oss/tsconfig
```

## Presets

- `@hvn-oss/tsconfig/library` - strict Node-oriented library config using `nodenext` module resolution.
- `@hvn-oss/tsconfig/react-library` - strict React library config for React packages.
- `@hvn-oss/tsconfig/vite` - strict Vite app config with DOM, React JSX, and Vitest globals.
- `@hvn-oss/tsconfig/vp-react-library` - strict React library config for Vite+ packages.
- `@hvn-oss/tsconfig/vp-vite` - strict Vite+ app config with DOM, React JSX, and Vite+ test globals.

## Usage

Extend one of the presets from your project `tsconfig.json`.

```json
{
  "extends": "@hvn-oss/tsconfig/library",
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
