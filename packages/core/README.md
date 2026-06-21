# @linkprobe/core

The framework-agnostic metadata extraction engine for LinkProbe.

`@linkprobe/core` extracts, analyzes, and resolves webpage metadata from URLs including Open Graph, Twitter Cards, and HTML metadata.

It is designed for building link previews, content cards, and metadata-driven applications.

## Features

* Open Graph metadata extraction
* Twitter Card metadata extraction
* HTML metadata extraction
* Metadata resolution across multiple sources
* Metadata coverage analysis
* Metadata diagnostics
* Fully typed API
* Framework-agnostic core

## Installation

```bash
npm i @linkprobe/core
```

or

```bash
pnpm add @linkprobe/core
```

## Quick Start

```ts
import { probe } from "@linkprobe/core";

const result = await probe("https://github.com");

if (result.status === "success") {
  console.log(result.metadata);
}
```

## API

### probe(url, options)

Extract metadata from a single URL.

```ts
await probe("https://github.com", {
  timeout: 5000,
});
```

### probeMany(urls, options)

Extract metadata from multiple URLs.

```ts
import { probeMany } from "@linkprobe/core";

const results = await probeMany([
  "https://github.com",
  "https://vercel.com",
]);
```

### resolveMetadata(metadata, options?)

Resolve metadata using priority rules across sources.

```ts
import { resolveMetadata } from "@linkprobe/core";

const resolved = resolveMetadata(result.metadata, {
  titlePriority: ["openGraph", "twitter", "html"],
});
```

## Coverage

Indicates how complete the extracted metadata is.

```ts
result.coverage;
```

```ts
{
  available: ["title", "description", "image", "favicon"],
  missing: [],
  score: 100
}
```

## Diagnostics

Provides insight into detected metadata sources.

```ts
result.diagnostics;
```

```ts
{
  openGraph: {
    detected: true,
    fields: ["title", "description", "image"]
  },
  twitter: {
    detected: true,
    fields: ["title", "description"]
  },
  html: {
    detected: true,
    fields: ["title", "description", "favicon"]
  }
}
```

## Error Handling

```ts
const result = await probe(url);

if (result.status === "failed") {
  console.error(result.error.code, result.error.message);
}
```

### Error Codes

* FETCH_FAILED
* TIMEOUT
* UNKNOWN_ERROR

## Custom Priorities

```ts
const resolved = resolveMetadata(result.metadata, {
  titlePriority: ["twitter", "openGraph", "html"],
  descriptionPriority: ["openGraph", "html", "twitter"],
});
```

## Supported Sources

### Open Graph

```html
<meta property="og:title" />
<meta property="og:description" />
<meta property="og:image" />
```

### Twitter Cards

```html
<meta name="twitter:title" />
<meta name="twitter:description" />
<meta name="twitter:image" />
```

### HTML Metadata

```html
<title>...</title>
<meta name="description" />
<link rel="icon" />
<link rel="canonical" />
```

## TypeScript

All APIs are fully typed.

```ts
import type {
  ProbeResult,
  Metadata,
  ResolvedMetadata,
  ProbeOptions,
} from "@linkprobe/core";
```
