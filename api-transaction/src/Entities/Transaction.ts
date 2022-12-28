import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity()
export class Transaction extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Generated("uuid")
    transactionExternalId: string;
    
    @Column()
    @Generated("uuid")
    accountExternalIdDebit: string;

    @Column()
    @Generated("uuid")
    accountExternalIdCredit:string;

    @Column()
    tranferTypeId:number;

    @Column()
    transactionStatusId: number;

    @Column()
    value:number;

    @Column()
    createdAt: Date;
}