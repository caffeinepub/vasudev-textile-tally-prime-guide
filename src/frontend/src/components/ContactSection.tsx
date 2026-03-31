import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Innovation Drive, Tech City, CA 94105",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@quantumleap.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 234-5678",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9am – 6pm",
  },
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitContactForm();

  const validate = () => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!validateEmail(email))
      errs.email = "Please enter a valid email address.";
    if (!message.trim()) errs.message = "Message is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await mutation.mutateAsync({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      toast.success("Message sent! We'll be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Reach Out
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
          <div className="mt-5 mx-auto w-12 h-0.5 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div
                data-ocid="contact.success.success_state"
                className="flex flex-col items-center justify-center h-full min-h-[320px] text-center py-12"
              >
                <CheckCircle className="h-14 w-14 text-primary mb-5" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Thank you!
                </h3>
                <p className="text-text-body text-base max-w-sm">
                  Your message has been received. We&apos;ll get back to you
                  within one business day.
                </p>
                <Button
                  className="mt-8 bg-primary hover:bg-primary-hover text-primary-foreground uppercase tracking-widest text-xs"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card rounded-lg shadow-card p-8 space-y-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-xs uppercase tracking-wider text-foreground font-semibold"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      type="text"
                      placeholder="Jane Smith"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name)
                          setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      autoComplete="name"
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        data-ocid="contact.name.error_state"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="text-xs uppercase tracking-wider text-foreground font-semibold"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email.input"
                      type="email"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email)
                          setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      autoComplete="email"
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        data-ocid="contact.email.error_state"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-xs uppercase tracking-wider text-foreground font-semibold"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message)
                        setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      data-ocid="contact.message.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit.primary_button"
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground uppercase tracking-widest text-xs font-semibold py-3 transition-colors"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {mutation.isError && (
                  <p
                    data-ocid="contact.form.error_state"
                    className="text-destructive text-xs text-center"
                  >
                    Failed to send your message. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* ── Contact details ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-text-body text-base leading-relaxed">
                Whether you&apos;re ready to begin a project or just want to
                explore how we can help, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    <p className="text-text-body text-base">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Tech City, CA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
