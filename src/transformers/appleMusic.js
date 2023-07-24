const name = "custom apple music"

const shouldTransform = url => url.includes("music.apple.com")

const getHTML = string => {
    const url = new URL(string)
    url.hostname = "embed.music.apple.com"

    const html = `<div class="apple-music"><iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${url}"></iframe></div>`
    return html
}

module.exports = {name, shouldTransform, getHTML}
