import React from "react";
import { motion, useInView } from "framer-motion";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./section-header";

export const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const socialLinks = [
    { icon: "lucide:instagram", label: "Instagram", url: "#" },
    { icon: "lucide:youtube", label: "YouTube", url: "https://youtube.com/@youngchristainfellowship?si=oRLZye7bDsHfnt5w" },
    { icon: "lucide:brand-tiktok", label: "TikTok", url: "#" },
  ];

  const contactInfo = [
    {
      icon: "lucide:mail",
      label: "Email",
      value: "youngchristainfellowshipp@gmail.com",
      action: "Send Email",
      url: "mailto:youngchristainfellowshipp@gmail.com",
    },
    {
      icon: "lucide:message-square",
      label: "WhatsApp",
      value: "Join our WhatsApp community",
      action: "Join Now",
      url: "https://chat.whatsapp.com/EovTOmqliO06gPBd9b9VAe",
    },
    {
      icon: "lucide:send",
      label: "Contact Form",
      value: "Fill out our contact form",
      action: "Send Message",
      url: "#contact-form",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions or want to learn more? Reach out to us through any of the channels below."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-poppins font-semibold">Get in Touch</h3>
            <p className="text-ycf-secondary/80">
              We'd love to hear from you! Whether you have questions about our programs, want to join our community, or need prayer support, our team is here to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-ycf-accent/20 flex items-center justify-center mr-4 mt-1">
                    <Icon icon={item.icon} className="text-xl text-ycf-highlight" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ycf-secondary">{item.label}</h4>
                    <p className="text-ycf-secondary/80 mb-1">{item.value}</p>
                    <a
                      href={item.url}
                      className="text-sm font-medium text-ycf-highlight hover:underline flex items-center gap-1"
                    >
                      {item.action}
                      <Icon icon="lucide:arrow-right" className="text-xs" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-medium text-ycf-secondary mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      isIconOnly
                      variant="light"
                      radius="full"
                      aria-label={social.label}
                      className="text-ycf-secondary hover:text-ycf-highlight"
                      as="a"
                      href={social.url}
                    >
                      <Icon icon={social.icon} className="text-xl" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card shadow="sm" className="overflow-visible">
              <CardBody className="p-6">
                <h3 className="text-2xl font-poppins font-semibold mb-6">Send a Message</h3>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      variant="bordered"
                      radius="lg"
                      isRequired
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      variant="bordered"
                      radius="lg"
                      isRequired
                    />
                  </div>
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    type="email"
                    variant="bordered"
                    radius="lg"
                    isRequired
                  />
                  <Input
                    label="Subject"
                    placeholder="What is this regarding?"
                    variant="bordered"
                    radius="lg"
                    isRequired
                  />
                  <Textarea
                    label="Message"
                    placeholder="Type your message here..."
                    variant="bordered"
                    radius="lg"
                    minRows={4}
                    isRequired
                  />
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    radius="full"
                    className="w-full font-poppins font-medium"
                    startContent={<Icon icon="lucide:send" />}
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};