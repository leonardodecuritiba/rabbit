var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (err, conn) {

    //criação de um novo canal
    conn.createChannel(function (err, ch) {

        //nome do canal
        var q = 'hello';

        //msg default para ser enviada
        var msg = 'Hello World 123!';

        //passando o nome da fila para conexão do RabbitMQ
        ch.assertQueue(q, { durable: false });

        // O RabbitMQ trabalha com Buffer, estou passando a msg para ele e para qual fila ela deve ser enviada
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s", msg);

    });
    setTimeout(function () { conn.close(); process.exit(0) }, 500);

});