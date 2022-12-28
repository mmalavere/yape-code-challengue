import { GraphQLList, GraphQLID } from 'graphql';
import {Transaction} from '../../Entities/Transaction'
import {TransactionTypes} from '../typeDefs/Transaction'

export const GET_TRANSACTION = {
    type: TransactionTypes,
    args:{
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any){
        return await Transaction.findOne({where: {"transactionExternalId": args.id}})
    }
}