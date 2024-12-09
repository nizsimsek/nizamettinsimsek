"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import DOMPurify from "dompurify";

export default function Contact() {
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

      console.log(response);

      if (!response.ok) {
        const responseBody = await response.text();
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
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to reach out if you have any questions, project inquiries, or
        just want to connect. I’m always happy to help and discuss new
        opportunities!
      </p>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={"Your email"}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder={"Your message"}
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn text={"Submit"} disabled={pending} />
      </form>
    </motion.section>
  );
}
