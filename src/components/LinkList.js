import React from 'react'
import Link from './Link'

export default function LinkList(props) {

    return (
        <div>
            {links.map(
                link => <Link 
                    key={link.id}
                    link={link}
                    />
            )}
        </div>
    )
}

const links = [
    {
        id: 1,
        url: "https://prisma.com"
    },
    {
        id: 2,
        url: "https://apollo.com"
    }
]