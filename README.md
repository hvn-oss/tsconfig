# HVN OSS TypeScript Config

Shared TypeScript configuration presets for HVN OSS projects.

## Packages

- `@hvn-oss/tsconfig` - reusable `tsconfig.json` presets for libraries, Vite apps, Vite+ apps, and React libraries.

## Usage

Install the package in a project:

```bash
vp add -D @hvn-oss/tsconfig
```

Extend one of the presets from your project `tsconfig.json`:

```json
{
  "extends": "@hvn-oss/tsconfig/library",
  "include": ["src"]
}
```

Available presets:

- `@hvn-oss/tsconfig/library`
- `@hvn-oss/tsconfig/react-library`
- `@hvn-oss/tsconfig/vite`
- `@hvn-oss/tsconfig/vp-react-library`
- `@hvn-oss/tsconfig/vp-vite`

See [`packages/tsconfig`](./packages/tsconfig) for package-specific documentation.

## Development

Install dependencies:

```bash
vp install
```

Check everything is ready:

```bash
vp run ready
```

Run checks across the workspace:

```bash
vp check
```

Run tests across packages:

```bash
vp run -r test
```

Build packages:

```bash
vp run -r build
```
