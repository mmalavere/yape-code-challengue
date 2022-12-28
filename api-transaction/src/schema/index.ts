import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {CREATE_TRANSACTION} from './Mutation/Transaction'
import { GET_TRANSACTION } from './Querys/Transaction';

const Query = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        getTransaction: GET_TRANSACTION
    },
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createTransaction: CREATE_TRANSACTION
    },
});

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})