import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()

const link = new HttpLink({
	uri: 'http://localhost:3003/api'
})

export const apiClient = new ApolloClient({
    cache,
    link
})
