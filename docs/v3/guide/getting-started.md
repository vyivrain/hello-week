# Getting Started

Welcome to the Hello Week documentation!

## Installation

Hello Week is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/).
You'll first need to install Hello Week `core` package as well as any plugins.

```bash
# Using npm
npm install hello-week preact --D

# Using Yarn
yarn add hello-week preact --D
```

## Download

You can also download the library manually:

**Repository:** [download](https://codeload.github.com/mauroreisvieira/hello-week/zip/master) latest version.

## CDN

A number of free CDNs host Hello Week's dist files. A clever way to choose a CDN and figure out the URLs of the files you need is to visit the package on [Yarn](https://yarnpkg.com/).

> For example, visit the [Hello-Week](https://cdn.jsdelivr.net/npm/hello-week@2.10.3/) package.

### Inside HTML

```html
<link href="hello.week.css" rel="stylesheet" />
<link href="default.theme.css" rel="stylesheet" />

<div class="calendar"></div>

<script type="module">
  import { HelloWeek } from "hello-week.min.js";
  new Hello Week({
    selector: '.calendar'
  });
</script>
```

## FAQ’s

Below is the list of frequently asked questions.
If you think a common question is missing from the list, please create an issue here.

**1.** How is Hello Week different to other tools?