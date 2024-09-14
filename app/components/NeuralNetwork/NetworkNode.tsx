'use client'

import { useState } from "react"

interface INetworkNodeProperties {
    projectURL: string
}

export default function NetworkNode(props: INetworkNodeProperties) {
    const [size, setSize] = useState(12);

    return (
        <div className={`rounded-full bg-[#349eeb] w-${size} h-${size}`}>
            <span>&emsp;</span>
        </div>
    )
}