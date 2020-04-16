const name = "custom youtube"

const shouldTransform = url => {
    console.log(url)
    return url.includes("youtu.be")
}

const getHTML = string => {
    const url = new URL(string)
    const id = url.pathname.slice(1)

    return `
        <div class="youtube">
            <iframe
                title=${id}
                src="https://www.youtube-nocookie.com/embed/${id}"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    `
}

module.exports = {name, shouldTransform, getHTML}
