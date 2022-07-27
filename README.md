<h1 align="center">
Website Preview Tool
</h1>

<p align="center">
  <strong>Get a screenshot of a website from the command line</strong>
</p>
<p align="center">
  <h3 align="center">
    <a href="https://github.com/LuisPavelA/website-preview-tool">GitHub</a>
    <span> · </span>
    <a href="https://www.npmjs.com/package/website-preview-tool">NPM</a>
  </h3>
</p>

<p align="center">
  Made with Puppeteer and Commander.
</p>

## - How to use

### You can run the tool by doing: 

```
npx website-preview-tool website <link>
```
**You need to add `https://` or `http://`**

### You can install it on your computer globally by doing

```
npm install -g website-preview-tool
```

and then you can run it by doing 

```
website-preview-tool website <link>
```

## - Options
`-o <output>` - Set the name of the screenshot output. The default is `website_preview.png`

`-h <number_of_pixels>` - Set the height of the website. The default is `1920`.

`-w <number_of_pixels>` - Set the width of the website. The default is `1080`.
