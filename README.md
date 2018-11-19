[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Leo555/isScrolling/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Leo555/isScrolling/pulls)



# scrolling-observer

A Simple JS library that detects mobile app is scrolling.



## Example

### html script


```html
<script src="../dist/isScrolling.min.js"></script>
<script>
    let scroll = isScrolling.default() // 初始化
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

Use this in your es6 script:

```javascript

```

## License

MIT
