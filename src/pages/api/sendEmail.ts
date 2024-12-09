import type { NextApiRequest, NextApiResponse } from 'next';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const window = (new JSDOM('')).window;
const purify = DOMPurify(window);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, message } = req.body;

        const isValidEmail = (email: string) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        if (!isValidEmail(email) || !message) {
            return res.status(400).json({ error: 'Geçersiz e-posta veya mesaj.' });
        }

        const sanitizedMessage = purify.sanitize(message);

        const data = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_ACCESS_TOKEN,
            template_params: {
                email: email,
                message: sanitizedMessage,
            },
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.text();
            console.log('send response : ', responseData);

            if (!response.ok) {
                return res.status(500).json({ error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.', response: responseData });
            }

            return res.status(200).json({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
        } catch (error: any) {
            return res.status(500).json({ error: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.' });
        }
    } else {
        return res.status(405).json({ error: 'Yöntem izin verilmedi.' });
    }
} 