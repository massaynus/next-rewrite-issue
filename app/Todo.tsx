'use client';

import { useEffect, useState } from "react";

// This will fail to execute to fetch
const failedUrl = '/mj-builder/en/proxy/22';   // should be rewritten to  'https://jsonplaceholder.typicode.com/todos/7'
const successUrl = '/proxy/22';   // should be rewritten to  'https://jsonplaceholder.typicode.com/todos/7'

/**
 * In Logs both are successfully rewritten to the correct URL but one fails to execute
 *
    REQUEST: http://localhost:3000/mj-builder/proxy/16
    PATHNAME: /proxy/16
    REWRITTEN TO:  https://jsonplaceholder.typicode.com/todos/16


    REQUEST: http://localhost:3000/proxy/16
    PATHNAME: /proxy/16
    REWRITTEN TO:  https://jsonplaceholder.typicode.com/todos/16
*/

async function fetchUrl(url: string): Promise<string> {
    console.log('Fetching URL: ', { url })
    const response = await fetch(url)
    if (response.ok)
        return JSON.stringify(await response.json(), null, 2)

    else throw new Error(`Failed due to status code: [${response.status}]`)
}

export default function Todo() {
    const [fJson, setFJson] = useState('N/A');
    const [sJson, setSJson] = useState('');

    useEffect(() => {
        (
            async function () {

                try {
                    setFJson(await fetchUrl(failedUrl))
                } catch (error) {
                    console.log('Failed to fetch the URL:', { failedUrl })
                    setFJson(('message' in error ? error.message : JSON.stringify(error, null, 2)) as unknown as string)
                }

                try {
                    setSJson(await fetchUrl(successUrl))
                } catch (error) {
                    console.log('Failed to fetch the URL:', { successUrl })
                    setSJson(('message' in error ? error.message : JSON.stringify(error, null, 2)) as unknown as string)
                }
            }
        )()

    }, [])

    return (
        <>
            <h3>{JSON.stringify({ failedUrl, successUrl })}</h3>
            <br />
            <br />
            <br />
            <h1>Failure JSON: </h1>
            <pre>{fJson}</pre>
            <br />
            <br />
            <br />
            <h1>Success JSON: </h1>
            <pre>{sJson}</pre>
        </>
    )
}