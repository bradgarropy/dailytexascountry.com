const he = require("he")

const name = "custom facebook"

const shouldTransform = url => url.includes("facebook.com")

const getHTML = string => {
    const encoded = he.encode(string)
    const src = `https://www.facebook.com/plugins/video.php?href=${encoded}`

    const html = `
        <div class="video">
            <iframe
                src=${src}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allowFullScreen="true">
            </iframe>
        </div>
    `

    return html
}

module.exports = {name, shouldTransform, getHTML}
