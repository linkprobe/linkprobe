# Contributing to LinkProbe

Thank you for your interest in contributing to LinkProbe.

## Development Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Hossein-i/linkprobe.git
cd linkprobe
pnpm install
```

## Available Commands

```bash
pnpm lint
pnpm type-check
pnpm build
pnpm test
```

## Branch Strategy

Create feature branches from `develop`.

Examples:

```bash
feature/probe-many
feature/react-package
fix/metadata-resolution
```

## Commit Convention

We follow Conventional Commits.

Examples:

```text
feat(core): add metadata resolver
fix(core): handle redirect errors
docs: update README
test(core): add github integration tests
```

## Changesets

When your change affects a published package, add a changeset:

```bash
pnpm changeset
```

## Pull Requests

Before opening a pull request:

- Ensure all tests pass
- Ensure linting passes
- Add a changeset if required
- Update documentation if necessary

Thank you for contributing.
