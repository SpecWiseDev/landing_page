"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users, Headphones, Zap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Dedicated success team",
    description: "Named account manager and solutions engineer",
  },
  {
    icon: Headphones,
    title: "Priority support",
    description: "4-hour response SLA with 24/7 availability",
  },
  {
    icon: Zap,
    title: "Custom integrations",
    description: "Tailored solutions for your tech stack",
  },
];

export function EnterpriseContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputStyles = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#1a1a1a",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    color: "rgba(250, 249, 246, 0.9)",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "36px",
                letterSpacing: "-0.01em",
                color: "rgb(111, 131, 159)",
                lineHeight: "1.15",
                fontStyle: "italic",
                fontWeight: 400,
                marginBottom: "8px",
              }}
            >
              Get in touch
            </h2>
            <h3
              style={{
                fontSize: "36px",
                letterSpacing: "-0.01em",
                color: "rgba(250, 249, 246, 0.9)",
                lineHeight: "1.2",
                fontWeight: 400,
                marginBottom: "32px",
              }}
            >
              Let&apos;s discuss your needs
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(212, 165, 116, 0.3)",
                }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(212, 165, 116, 0.15)" }}
                >
                  <Check className="w-8 h-8" style={{ color: "#d4a574" }} />
                </div>
                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "rgba(250, 249, 246, 0.9)",
                    marginBottom: "8px",
                  }}
                >
                  Thank you!
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(250, 249, 246, 0.6)",
                  }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(250, 249, 246, 0.7)",
                        marginBottom: "8px",
                      }}
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyles}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(250, 249, 246, 0.7)",
                        marginBottom: "8px",
                      }}
                    >
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyles}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(250, 249, 246, 0.7)",
                        marginBottom: "8px",
                      }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      style={inputStyles}
                      placeholder="Acme Inc"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="size"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(250, 249, 246, 0.7)",
                        marginBottom: "8px",
                      }}
                    >
                      Company size
                    </label>
                    <select
                      id="size"
                      name="size"
                      required
                      value={formData.size}
                      onChange={handleChange}
                      style={{
                        ...inputStyles,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px",
                        paddingRight: "40px",
                      }}
                    >
                      <option value="">Select size</option>
                      <option value="50-200">50-200 employees</option>
                      <option value="200-500">200-500 employees</option>
                      <option value="500-1000">500-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(250, 249, 246, 0.7)",
                      marginBottom: "8px",
                    }}
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyles, resize: "none" }}
                    placeholder="Tell us about your testing challenges..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "rgb(249, 250, 245)",
                    borderRadius: "4px",
                    color: "#1a1a1a",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Request a demo"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pt-16"
          >
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#d4a574",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "24px",
              }}
            >
              What you get
            </h4>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "rgba(212, 165, 116, 0.1)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#d4a574" }} />
                    </div>
                    <div>
                      <h5
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          color: "rgba(250, 249, 246, 0.9)",
                          marginBottom: "4px",
                        }}
                      >
                        {benefit.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "rgba(250, 249, 246, 0.6)",
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional info */}
            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(250, 249, 246, 0.5)",
                  marginBottom: "8px",
                }}
              >
                Prefer to email directly?
              </p>
              <a
                href="mailto:enterprise@imqa.ai"
                style={{
                  fontSize: "16px",
                  color: "#d4a574",
                  textDecoration: "none",
                }}
              >
                enterprise@imqa.ai
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
