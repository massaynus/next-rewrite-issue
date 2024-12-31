'use client';

import { useEffect, useState } from "react";

async function fetchUrl(url: string): Promise<string> {
    console.log('Fetching URL: ', { url })
    const response = await fetch(url)
    return JSON.stringify(await response.json(), null, 2)
}

export default function Todo() {
    const [json, setJson] = useState('');

    useEffect(() => {
        (
            async function () {
                // This will fail to execute to fetch
                const failedUrl = '/mj-builder/en/proxy/20';   // should be rewritten to  'https://jsonplaceholder.typicode.com/todos/7'
                const successUrl = '/proxy/20';   // should be rewritten to  'https://jsonplaceholder.typicode.com/todos/7'

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

                try {
                    setJson(await fetchUrl(failedUrl))
                } catch (_) {
                    console.log('Failed to fetch the URL:', { failedUrl })
                }

                try {
                    setJson(await fetchUrl(successUrl))
                } catch (_) {
                    console.log('Failed to fetch the URL:', { successUrl })
                }
            }
        )()

    }, [])

    return (
        <pre>{json}</pre>
    )
}