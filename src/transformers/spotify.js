const name = "custom spotify"

const shouldTransform = url => url.includes("open.spotify.com")

const getHTML = string => {
    const {origin, pathname} = new URL(string)
    const src = `${origin}/embed${pathname}`

    const html = `
        <div class="spotify">
            <iframe
                src=${src}
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        </div>
    `

    return html
}

module.exports = {name, shouldTransform, getHTML}
