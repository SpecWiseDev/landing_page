"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is IMQA and how does it work?",
    answer:
      "IMQA is an AI-powered testing platform that lets you write tests in natural language. Simply describe what you want to test, and IMQA generates production-ready test code, executes it across browsers, and provides detailed results with video evidence.",
  },
  {
    id: 2,
    question: "How does the self-healing selector feature work?",
    answer:
      "IMQA uses AI to automatically detect when UI elements change and updates selectors accordingly. This eliminates flaky tests caused by minor UI updates and significantly reduces test maintenance overhead.",
  },
  {
    id: 3,
    question: "Which browsers and platforms does IMQA support?",
    answer:
      "IMQA supports all major browsers including Chrome, Firefox, Safari, and Edge. Tests can run on Windows, macOS, and Linux environments, and integrate seamlessly with popular CI/CD platforms like GitHub Actions, GitLab CI, and Jenkins.",
  },
  {
    id: 4,
    question: "Can I integrate IMQA with my existing test suite?",
    answer:
      "Yes, IMQA is designed to work alongside your existing testing infrastructure. You can gradually migrate tests or use IMQA for new test creation while maintaining your current test suite.",
  },
  {
    id: 5,
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support including documentation, tutorials, and community forums for all users. Pro and Enterprise plans include priority email support, dedicated success managers, and custom onboarding assistance.",
  },
  {
    id: 6,
    question: "Is there a free trial available?",
    answer:
      "Yes, IMQA offers a free tier that includes up to 100 test runs per month. This allows you to explore the platform and experience the power of AI-driven testing before committing to a paid plan.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "rgba(250, 249, 246, 0.9)",
            paddingRight: "16px",
          }}
        >
          {question}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            backgroundColor: "rgba(212, 165, 116, 0.2)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="#d4a574"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="pb-6"
              style={{
                fontSize: "16px",
                lineHeight: "160%",
                color: "rgba(250, 249, 246, 0.6)",
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            style={{
              fontSize: "36px",
              letterSpacing: "-0.01em",
              color: "#d4a574",
              lineHeight: "1.15",
              fontStyle: "italic",
              fontWeight: 400,
              marginBottom: "8px",
            }}
          >
            FAQ
          </h2>
          <h2
            style={{
              fontSize: "36px",
              letterSpacing: "-0.01em",
              color: "rgba(250, 249, 246, 0.9)",
              lineHeight: "1.2",
              fontWeight: 400,
            }}
          >
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
