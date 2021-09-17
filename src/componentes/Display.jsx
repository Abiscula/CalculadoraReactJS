import React from 'react'

export default function Display({value}) {
    return (
        <div className="display">
            <span>{value || 0}</span>
        </div>
    )
}