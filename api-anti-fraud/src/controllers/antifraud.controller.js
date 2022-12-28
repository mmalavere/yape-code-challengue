import {pool} from '../db.js'

const kafka = require('kafka-node')

const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'})

export const validateAntiFradu = async (req, res) => {
    
    const {id} = req.params
    var consumer = new kafka.Consumer(client, [{topic: 'antifraud'}]);
    var producer = new kafka.producer(client)
    var status = '';

    producer.send({topic: 'antifraud', value: id});

    consumer.on('response', function(response){
        status = response
    })

    await pool.query('UPDATE transaction SET transactionStatusId = ? WHERE transactionExternalId = ? ', [status, id])

    res.json('update transaction')
}