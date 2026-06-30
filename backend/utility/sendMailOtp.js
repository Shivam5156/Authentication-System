require('dotenv').config();
const axios = require('axios');

const sendOtpMail = async (email, content) => {
    try {
      

        const response = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
                sender: {
                    name: "Auth App",
                    email: process.env.SENDER_EMAIL
                },
                to: [{ email: email }],
                subject: "OTP Verification",
                htmlContent: `<h2>${content}</h2>`
            },
            {
                headers: {
                    "api-key": process.env.BREVO_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("✅ Mail Sent:", response.data);

    } catch (error) {
        console.error(" FULL ERROR:", error.response?.data || error.message);
        throw new Error("Email not sent");
    }
};

module.exports = sendOtpMail;