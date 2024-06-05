const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key : process.env.API_SENDGRID,
        },
    })
);

const sendEmailController = (req, res) =>{
    try {
        const {name, email, msg} = req.body;
        if(!name || !email|| !msg){
                return res.status(500).send({
                   success: false,
                   message: "Please Enter all fields...."     
                })
        }

        transporter.sendMail({
            to: 'akhockey59@gmail.com',
            from: 'akhockey59@gmail.com',
            subject: "contact us regarding protfolio",
            html: `
            <h3> Detail Information </h3>
            <ul>
            <li><p>Name : ${name} </p></li>
            <li><p>Email : ${email} </p></li>
            <li><p>Message  : ${msg} </p></li>
            </ul>
            `
        })

        return res.status(200).send({
            success: 'true',
            message: 'Email sent successfully',
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error in Email API"});
    }
}

module.exports = { sendEmailController };