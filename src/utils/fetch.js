const post = async (url, data) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
    }

    let response = await fetch(url, options)
    const body = await response.json()

    response = {
        ok: response.ok,
        status: response.status,
        body,
    }

    console.log(response)

    return response
}

export {post}
