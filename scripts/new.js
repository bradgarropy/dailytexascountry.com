// npm run new [title] [tags...]

const fs = require("fs")
const slugify = require("slugify")
const {format} = require("date-fns")

const [title = "new post", ...tags] = process.argv.slice(2)

const slug = slugify(title)
const date = format(Date.now(), "yyyy-MM-dd")

const frontmatter = `---
slug: ${slug}
title: ${title}
date: ${date}
tags: [${tags.join(", ")}]
image: images/default.jpg
---

TODO`

const basePath = "content/posts"
const postPath = `${basePath}/${slug}`
const imagePath = `${basePath}/${slug}/images`

fs.mkdirSync(postPath)
fs.writeFileSync(`${postPath}/index.md`, frontmatter)

fs.mkdirSync(imagePath)
fs.copyFileSync("static/default.jpg", `${imagePath}/default.jpg`)
