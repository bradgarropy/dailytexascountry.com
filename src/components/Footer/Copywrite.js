import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledCopywrite = styled.p`
    font-size: 0.9rem;
    grid-column: 1 / span 3;
    margin: 0;
`

const Copywrite = ({year, company}) => {
    const currentYear = new Date().getFullYear()
    let years = currentYear

    if (year && year !== currentYear) {
        years = `${year} - ${currentYear}`
    }

    const copywrite = ["©", years, company].join(" ").trim()

    return <StyledCopywrite>{copywrite}</StyledCopywrite>
}

Copywrite.propTypes = {
    year: PropTypes.number,
    company: PropTypes.string,
}

export default Copywrite
