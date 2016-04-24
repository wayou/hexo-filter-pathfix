# hexo-filter-pathfix

using absolute path for assets in posts. 
enabling hexo `post_asset_folder` only makes the relative asset path work in post page, while in other page like index,category and tag the path will broken.

[![build status](https://secure.travis-ci.org/wayou/hexo-filter-pathfix.svg)](http://travis-ci.org/wayou/hexo-filter-pathfix)
[![dependency status](https://david-dm.org/wayou/hexo-filter-pathfix.svg)](https://david-dm.org/wayou/hexo-filter-pathfix)

## Installation

```
npm install --save hexo-filter-pathfix
```

## Usage
- install package
- enable `post_asset_folder` in your hexo config file `_config.yml`
- reference assets in relative path in your post

## Example

```markdown
![this is the cover](cover.jpg)
```
the above will produce:
```html
<img title="this is the cover" src="/2015/01/18/post-title/cover.jpg">
```

## Credits
[wayou](https://github.com/wayou/)

## License

MIT
