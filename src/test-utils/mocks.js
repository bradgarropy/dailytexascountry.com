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

const mockEpisodes = [
    {
        videoId: "abc123",
        title: "Artist One - Track One",
        publishedAt: "January 1, 2021",
        localThumbnail: mockImage,
    },
    {
        videoId: "def456",
        title: "Artist Two - Track Two",
        publishedAt: "February 1, 2021",
        localThumbnail: mockImage,
    },
]

const mockPlaylist = {
    name: "Test Playlist",
    description: "This is a test playlist.",
    external_urls: {spotify: "https://spotify.com"},
    image: mockImage,
}

const mockPlaylists = [
    {
        name: "First Test Playlist",
        description: "This is the first test playlist.",
        external_urls: {spotify: "https://spotify.com"},
        image: mockImage,
    },
    {
        name: "Second Test Playlist",
        description: "This is the second test playlist.",
        external_urls: {spotify: "https://spotify.com"},
        image: mockImage,
    },
]

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

const mockTags = ["first", "second", "third"]

const mockPost = {
    frontmatter: {
        title: "Test Post",
        slug: "test-post",
        image: mockImage,
        tags: ["test"],
        date: "January 1, 2021",
    },
}

const mockPosts = [
    {
        frontmatter: {
            title: "First Post",
            slug: "first-post",
            image: mockImage,
            tags: ["test"],
            date: "January 1, 2021",
        },
    },
    {
        frontmatter: {
            title: "Second Post",
            slug: "second-post",
            image: mockImage,
            tags: ["test"],
            date: "February 1, 2021",
        },
    },
]

const mockAppCtx = {
    open: false,
    setOpen: jest.fn(),
}

export {
    mockAppCtx,
    mockEpisode,
    mockEpisodes,
    mockImage,
    mockPlaylist,
    mockPlaylists,
    mockPost,
    mockPosts,
    mockSections,
    mockSiteMetadata,
    mockTags,
}
