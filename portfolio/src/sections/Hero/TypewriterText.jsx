import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "React Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "AI Enthusiast",
];

export default function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 60 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="h-24 flex items-center text-center justify-center">
      <h2 className="text-cyan-400 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">
        {text}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          |
        </motion.span>
      </h2>
    </div>
  );
}
