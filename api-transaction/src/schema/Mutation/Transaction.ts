import {GraphQLString, GraphQLInt} from 'graphql'
import {v4 as uuidv4} from 'uuid'
import {Transaction} from '../../Entities/Transaction'
import {messageType} from '../typeDefs/Message'


export const CREATE_TRANSACTION = {
    type: messageType,
    args:{
        tranferTypeId: {type: GraphQLInt},
        value: {type: GraphQLInt},
    },
    async resolve(parent: any, args:any){
        
        const {tranferTypeId, value} = args

        if(value < 0){
            
            return {
                success: 0,
                message: 'Negative transfers are not accepted'
            }

        } else if (value > 1000){
            
            return {
                success: 0,
                message: 'Transfer rejected, amount greater than 1000'
            }
            
        } else {
            const accountExternalIdDebit = tranferTypeId === 1 ? uuidv4() : ''
            const accountExternalIdCredit = tranferTypeId === 2 ? uuidv4() : ''
            
            const result = await Transaction.insert({
                transactionExternalId: uuidv4(),
                accountExternalIdDebit: accountExternalIdDebit,
                accountExternalIdCredit: accountExternalIdCredit,
                tranferTypeId: tranferTypeId,
                transactionStatusId: 1,
                value: value,
                createdAt: new Date()
            });
    
            console.log(result.raw.affectedRows);

            if(result.raw.affectedRows === 1) {
                return {
                    success: 1,
                    message: 'Transaction created'
                }
            } else {
                return {
                    success: 0,
                    message: 'The transaction has not been generated'
                }
            }

        }
    }
}