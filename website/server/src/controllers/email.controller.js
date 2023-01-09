const nodemailer = require('nodemailer')
/**
 * Function to send an email from a contact form
 * To test the emails we are using MailTrapIo => https://mailtrap.io/
 * @param {Object} req Expecting name, surname, tlf, email, address, text
 * @param {*} res Just a console.log
 */
async function sendEmail(req, res) {
    const { name, surname, tlf, email, address, text } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: 'henalupaesdebarros@gmail.com',
        subject: 'Formulario de Contacto',
        html: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
            <div class="container">
                <h1>Formulario de Contacto</h1>
                <p>Nombre: ${name}</p>
                <p>Apellido: ${surname}</p>
                <p>Teléfono: ${tlf}</p>
                <p>Email: ${email}</p>
                <p>Dirección: ${address}</p>
                <p>Mensaje: ${text}</p>
            </div>
          </body>
        </html>`
    })
    res.send('Email enviado')
}

module.exports = sendEmail;