const mockSiteMetadata = {title: "Daily Texas Country"}

const mockImage = {
    childImageSharp: {
        fluid: {
            aspectRatio: 1,
            base64: "",
            sizes: "",
            src: "",
            srcSet: "",
            srcSetWebp: "",
            srcWebp: "",
        },
    },
}

const mockEpisode = {
    videoId: "abc123",
    title: "Artist - Track",
    publishedAt: "January 1, 2021",
    localThumbnail: mockImage,
}

const mockSections = [
    {
        html: "<p>First about content.</p>",
        frontmatter: {
            title: "First About Section",
            image: mockImage,
        },
    },
    {
        html: "<p>Second about content.</p>",
        frontmatter: {
            title: "Second About Section",
            image: mockImage,
        },
    },
]

export {mockImage, mockSections, mockEpisode, mockSiteMetadata}
