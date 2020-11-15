import {mockImage} from "test-utils/mocks"

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

export {mockSections}
