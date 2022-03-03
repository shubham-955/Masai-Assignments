export const getFetch = async (fetchUrl) => {
    const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
    const res = await response.json();
    return res;
}

export const postFetch = async (fetchUrl, fetchData) => {
    fetch(fetchUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(fetchData),
    }).then((r) => {
        console.log(r)
        r.json();
    }
    ).then((d) => {
        console.log(d)
    })
}