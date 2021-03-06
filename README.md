
[![NPM version](https://img.shields.io/npm/v/scrolling-observer.svg?style=flat)](https://www.npmjs.org/package/scrolling-observer)
[![Build Status](https://travis-ci.org/Leo555/scrolling-observer.svg?branch=master)](https://travis-ci.org/Leo555/scrolling-observer)
[![npm download](https://img.shields.io/npm/dm/scrolling-observer.svg?style=flat-square)](https://npmjs.org/package/scrolling-observer)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Leo555/isScrolling/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Leo555/isScrolling/pulls)


# scrolling-observer

A Simple JS library that detects mobile app is scrolling or not.

To solve JavaScript Scroll Event Delay，for example [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202)。

## Example

### html script


```html
<script src="../dist/sscrolling-observer.min.js"></script>
<script>
  var scroll = window['scrolling-observer'].default() // init
  setInterval(() => {
    if (scroll.isScrolling) {
      console.log(scroll.isScrolling, new Date().getTime())
    }
  }, 50)
</script>
```

### npm: 

```sh
$ npm install --save
```

JavaScript

```javascript
import scroll from 'scrolling-observer'

// init
scroll()

// check
console.log(scroll().isScrolling)

// destroy
scroll().destroy()
```

## License

MIT
