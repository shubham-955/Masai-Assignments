import React, { useState } from 'react'

export const UseApi = (initialValue) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState(initialValue)

    const fetchApi = (api) => {
        fetch(api)
            .then(response =>
                response.json()
            )  // convert to json
            .then(json =>
                setData(json)
            )    //print data to console
            .catch((err) =>
                setError(true)
            ).finally(() => setLoading(false))
    };

    return { loading, error, data, fetchApi };
}
