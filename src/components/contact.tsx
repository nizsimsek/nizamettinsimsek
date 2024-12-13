"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import DOMPurify from "dompurify";
import { useLanguage } from "@/containers/language-context";

export default function Contact() {
  const { language } = useLanguage();
  const { ref } = useSectionInView("#contact");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setPending(true);

    const sanitizedMessage = DOMPurify.sanitize(message);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/sendEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: senderEmail,
            message: sanitizedMessage,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      }

      setSuccess("Mesajınız başarıyla gönderildi!");
    } catch (error: any) {
      setError("Sunucu hatası. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        {language === "tr" ? "İletişim" : "Contact Me"}
      </SectionHeading>

      <p className="text-gray-900 -mt-6 dark:text-white/90">
        {language === "tr"
          ? "Herhangi bir soru, projeleriniz veya sadece bağlantı kurmak istiyorsanız, benimle iletişime geçebilirsiniz. Her zaman yardıma ve yeni fırsatlar hakkında konuşmaktan mutluluk duyarım!"
          : "Feel free to reach out if you have any questions, project inquiries, or just want to connect. I’m always happy to help and discuss new opportunities!"}
      </p>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack text-gray-700 dark:bg-white dark:text-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={language === "tr" ? "E-posta adresiniz" : "Your email"}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 text-gray-700 dark:bg-white dark:text-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder={language === "tr" ? "Mesajınız" : "Your message"}
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn
          text={language === "tr" ? "Gönder" : "Submit"}
          disabled={pending}
        />
      </form>
    </motion.section>
  );
}
