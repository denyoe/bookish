import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()

const link = new HttpLink({
	uri: 'https://bookish.bleek.io/api'
	// uri: process.env.API_URL
	// uri: 'http://localhost:3003/'
})

export const apiClient = new ApolloClient({
    cache,
    link
})
