import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } from 'graphql';

export const TransactionTypes = new GraphQLObjectType({
    name: 'Transaction',
    fields: {
        transactionExternalId: {type: GraphQLID},
        tranferTypeId: {type: GraphQLInt},
        transactionStatusId: {type: GraphQLInt},
        value: {type: GraphQLInt},
        createdAt: {type: GraphQLString}
    }
})