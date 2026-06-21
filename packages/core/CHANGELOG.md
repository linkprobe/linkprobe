# @linkprobe/core

## 0.2.0

### Minor Changes

- 97c02fe: Introduce metadata coverage analysis and improve public API surface.

  This update adds a new `coverage` field to probe results,
  providing insight into metadata completeness and quality.

  It also refines exported APIs to better reflect the intended public surface.

## 0.1.1

### Patch Changes

- Fix monorepo tooling and prepare standard package for npm publishing.
  - Fix lint formatting and rename `FetchHtmlOptions`
  - Add `exports` and `files` to `@linkprobe/standard`
  - Update README to reflect current packages
  - Restore Husky hooks and editor config

## 0.1.0

### Minor Changes

- Initial public release of LinkProbe Core.

  Features:
  - Open Graph metadata extraction
  - Twitter Card metadata extraction
  - HTML metadata extraction
  - Metadata resolution
  - Diagnostics support
  - Error handling
  - Request timeout support
