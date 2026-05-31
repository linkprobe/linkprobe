# @linkprobe/core

The framework-agnostic metadata extraction engine for LinkProbe.

`@linkprobe/core` provides utilities for extracting and resolving webpage metadata from URLs. It supports Open Graph, Twitter Cards, and standard HTML metadata, making it ideal for building link previews, content cards, social embeds, and metadata-driven experiences.

## Installation

```bash
pnpm add @linkprobe/core
```

## Quick Start

```ts
import {probe} from "@linkprobe/core";

const result = await probe("https://github.com");

if (result.status === "success") {
  console.log(result.metadata);
}
```

## Example Response

```ts
{
  status: "success",
  metadata: {
    url: "https://github.com",
    openGraph: {
      title: "GitHub",
      description: "...",
      image: "..."
    },
    twitter: {
      title: "GitHub"
    },
    html: {
      title: "GitHub"
    }
  },
  page: {
    requestedUrl: "https://github.com",
    finalUrl: "https://github.com",
    contentType: "text/html"
  }
}
```

## Metadata Resolution

Metadata may be available from multiple sources.

Use `resolveMetadata()` to create a unified representation using customizable priority rules.

```ts
import {probe, resolveMetadata} from "@linkprobe/core";

const result = await probe("https://github.com");

if (result.status === "success") {
  const metadata = resolveMetadata(result.metadata);

  console.log(metadata);
}
```

Example output:

```ts
{
  title: "GitHub",
  description: "...",
  image: "...",
  favicon: "...",
  siteName: "GitHub"
}
```

## Custom Priorities

```ts
const metadata = resolveMetadata(result.metadata, {
  titlePriority: ["twitter", "openGraph", "html"],
});
```

## Options

### probe(url, options)

```ts
await probe("https://github.com", {
  timeout: 5000,
});
```

| Option  | Type   | Description                     |
| ------- | ------ | ------------------------------- |
| timeout | number | Request timeout in milliseconds |

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

## Error Handling

```ts
const result = await probe(url);

if (result.status === "failed") {
  console.error(result.error.code, result.error.message);
}
```

Possible error codes:

```txt
FETCH_FAILED
TIMEOUT
UNKNOWN_ERROR
```

## TypeScript

All public APIs are fully typed and exported by the package.

```ts
import type {Metadata, ProbeResult, ProbeOptions, ResolvedMetadata} from "@linkprobe/core";
```
