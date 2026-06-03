import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={sendEmail}
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="
      rounded-[32px]
      border
      border-cyan-500/20
      bg-slate-950/60
      backdrop-blur-xl
      p-8
      md:p-10

      hover:border-cyan-400/40
      transition-all
      duration-500
      "
    >
      <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

      {/* Name + Email */}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-slate-500 mb-3">Your Name</label>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
            w-full
            rounded-2xl
            border
            border-cyan-500/20

            bg-slate-950/80

            px-5
            py-4

            text-white

            outline-none

            focus:border-cyan-400
            focus:shadow-[0_0_20px_rgba(34,211,238,.15)]

            transition-all
            duration-300
            "
          />
        </div>

        <div>
          <label className="block text-sm text-slate-500 mb-3">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="
            w-full
            rounded-2xl
            border
            border-cyan-500/20

            bg-slate-950/80

            px-5
            py-4

            text-white

            outline-none

            focus:border-cyan-400
            focus:shadow-[0_0_20px_rgba(34,211,238,.15)]

            transition-all
            duration-300
            "
          />
        </div>
      </div>

      {/* Subject */}

      <div className="mt-6">
        <label className="block text-sm text-slate-500 mb-3">Subject</label>

        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Internship Opportunity / Collaboration"
          className="
          w-full
          rounded-2xl
          border
          border-cyan-500/20

          bg-slate-950/80

          px-5
          py-4

          text-white

          outline-none

          focus:border-cyan-400
          focus:shadow-[0_0_20px_rgba(34,211,238,.15)]

          transition-all
          duration-300
          "
        />
      </div>

      {/* Message */}

      <div className="mt-6">
        <label className="block text-sm text-slate-500 mb-3">Message</label>

        <textarea
          rows={8}
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, internship opportunity or collaboration..."
          className="
          w-full
          rounded-2xl
          border
          border-cyan-500/20

          bg-slate-950/80

          px-5
          py-4

          text-white

          resize-none
          outline-none

          focus:border-cyan-400
          focus:shadow-[0_0_20px_rgba(34,211,238,.15)]

          transition-all
          duration-300
          "
        />
      </div>

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        type="submit"
        disabled={loading}
        className="
        mt-8

        w-full

        py-5

        rounded-full

        bg-linear-to-r
        from-cyan-500
        via-sky-500
        to-blue-500

        text-black
        font-bold

        hover:shadow-[0_0_35px_rgba(34,211,238,.35)]

        transition-all
        duration-300
        "
      >
        {loading ? "Sending..." : "🚀 Send Message"}
      </motion.button>

      {success && (
        <p className="mt-5 text-center text-green-400">
          Message sent successfully 🚀
        </p>
      )}

      <p className="text-center text-slate-500 text-sm mt-5">
        Your information is kept private and never shared.
      </p>
    </motion.form>
  );
}
