'use client';

import { useEffect, useState } from "react";

export default function Todo() {
    const [json, setJson] = useState('');

    useEffect(() => {
        (
            async function () {
                const response = await fetch('/app/en/proxy/1')
                const body = await response.json();

                setJson(JSON.stringify(body, null, 2))
            }
        )()

    }, [])

    return (
        <pre>{json}</pre>
    )
}