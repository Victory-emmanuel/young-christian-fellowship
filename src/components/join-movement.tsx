import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button, Input, Select, SelectItem, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./section-header";

export const JoinMovement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    areaOfInterest: "",
    prayerRequest: ""
  });

  // Form state is managed through individual onValueChange handlers

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = "New YCF Community Member";
    const emailBody = `
      New member has joined YCF:

      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      WhatsApp: ${formData.whatsapp}
      Area of Interest: ${formData.areaOfInterest}
      Prayer Request: ${formData.prayerRequest}
    `;

    // Send email using mailto link (this will open the user's email client)
    // In a production environment, you would use a server-side solution
    const mailtoLink = `mailto:youngchristainfellowshipp@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);

    // Show success modal
    setTimeout(() => {
      setIsSubmitting(false);
      onOpen(); // Open the WhatsApp community modal
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="join" className="section-padding bg-ycf-accent/10" ref={ref}>
      <div className="container-padding max-w-4xl mx-auto">
        <SectionHeader
          title="Join the Movement"
          subtitle="Be part of a community that's making a difference. Fill out the form below to join the YCF community."
        />

        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                variant="bordered"
                radius="lg"
                isRequired
                value={formData.firstName}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    firstName: value
                  });
                }}
              />
              <Input
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                variant="bordered"
                radius="lg"
                isRequired
                value={formData.lastName}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    lastName: value
                  });
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                name="email"
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
                variant="bordered"
                radius="lg"
                isRequired
                value={formData.email}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    email: value
                  });
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                name="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
                variant="bordered"
                radius="lg"
                value={formData.phone}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    phone: value
                  });
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                name="whatsapp"
                label="WhatsApp Number"
                placeholder="Enter your WhatsApp number"
                type="tel"
                variant="bordered"
                radius="lg"
                isRequired
                value={formData.whatsapp}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    whatsapp: value
                  });
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Select
                name="areaOfInterest"
                label="Area of Interest"
                placeholder="Select an option"
                variant="bordered"
                radius="lg"
                selectedKeys={formData.areaOfInterest ? [formData.areaOfInterest] : []}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    areaOfInterest: value.target.value
                  });
                }}
                isRequired
              >
                <SelectItem key="Volunteer">Volunteer</SelectItem>
                <SelectItem key="Prayer Team">Prayer Team</SelectItem>
                <SelectItem key="Media Team">Media Team</SelectItem>
                <SelectItem key="Worship Team">Worship Team</SelectItem>
                <SelectItem key="General Member">General Member</SelectItem>
              </Select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Textarea
                name="prayerRequest"
                label="Prayer Request (Optional)"
                placeholder="Share your prayer request with us..."
                variant="bordered"
                radius="lg"
                minRows={4}
                value={formData.prayerRequest}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    prayerRequest: value
                  });
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                color="primary"
                size="lg"
                radius="full"
                className="w-full font-poppins font-medium"
                startContent={<Icon icon="lucide:user-plus" />}
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Now"}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* WhatsApp Community Modal */}
        <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <h3 className="text-xl font-poppins font-semibold text-ycf-secondary">Thank You for Joining!</h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-ycf-secondary/80 mb-4">
                Your information has been submitted successfully. We're excited to have you as part of our community!
              </p>
              <p className="text-ycf-secondary/80 mb-4">
                Join our WhatsApp community to stay connected and receive updates about upcoming events and activities.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Icon icon="logos:whatsapp-icon" className="text-2xl mr-2" />
                  <span className="font-medium text-green-800">YCF WhatsApp Community</span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Connect with other members, receive announcements, and participate in discussions.
                </p>
                <a
                  href="https://chat.whatsapp.com/EovTOmqliO06gPBd9b9VAe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <Icon icon="lucide:external-link" className="mr-1" />
                  Join WhatsApp Group
                </a>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                variant="light"
                onPress={onClose}
                radius="full"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};