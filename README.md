# liteproxy.ui
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/collinkleest/liteproxy.ui/release.yaml)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fliteproxy.collinkleest.com)
![GitHub Release](https://img.shields.io/github/v/release/collinkleest/liteproxy.ui)

## Table of Contents

1. [Local Development](#local-development)
4. [Build](#build)
3. [Linting](#linting)


### Local Development
Clone repo and change directory into `liteproxy.ui`
```bash
git clone https://github.com/collinkleest/liteproxy.ui.git
cd liteproxy.ui
```

Install the dependencies with your npm dep engine of choice (i choose `pnpm`)
```bash
pnpm install
```

Run the local development server
```bash
pnpm dev
```

### Build
Build the application, this will put the build output into the `dist` folder.
```bash
pnpm build
```

After you've built a production version of the application you can preview it with the following.
```bash
pnpm preview
```

### Linting
```bash
pnpm lint
```