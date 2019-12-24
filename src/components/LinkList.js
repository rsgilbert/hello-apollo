import React from 'react'
import Link from './Link'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'


const LINK_QUERY = gql`
    {
        links {
            id
            url
        }
    }

`
export default function LinkList(props) {
    
    return (        
        <Query query={LINK_QUERY}>
            {({ loading, error, data }) => {
                if(loading) return <div>Fetching</div>
                if(error) return <div>Error</div>
                const links = data.links                
                return (
                    links.map(
                    link => <Link 
                        key={link.id}
                        link={link}
                        />
                    )
                )
            }}
        </Query>
    )
}

const localLinks = [
    {
        id: 1,
        url: "https://prisma.com"
    },
    {
        id: 2,
        url: "https://apollo.com"
    }
]