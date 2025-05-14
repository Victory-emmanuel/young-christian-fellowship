import React from "react";
import { motion, useInView } from "framer-motion";
import { Button, Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./section-header";

export const Partner = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [donationAmount, setDonationAmount] = React.useState<string>("50");

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  };

  const partnershipOptions = [
    {
      title: "Monthly Partner",
      description: "Support our ministry with a recurring monthly donation and help us plan for sustainable growth.",
      icon: "lucide:calendar",
      buttonText: "Become a Monthly Partner",
    },
    {
      title: "One-Time Gift",
      description: "Make a one-time contribution to support our current initiatives and immediate needs.",
      icon: "lucide:gift",
      buttonText: "Give a One-Time Gift",
    },
    {
      title: "Legacy Giving",
      description: "Include YCF in your estate planning and leave a lasting impact for generations to come.",
      icon: "lucide:landmark",
      buttonText: "Learn About Legacy Giving",
    },
  ];

  const donationOptions = ["25", "50", "100", "250", "500", "Other"];

  return (
    <section id="partner" className="section-padding bg-ycf-accent/10" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Partner with Us"
          subtitle="Your generous support helps fund our media, venue, logistics, and other ministry needs to continue our mission."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partnershipOptions.map((option, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="h-full bg-white" shadow="sm">
                <CardBody className="p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-ycf-accent/20 flex items-center justify-center mb-4">
                    <Icon icon={option.icon} className="text-2xl text-ycf-highlight" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins text-ycf-secondary">
                    {option.title}
                  </h3>
                  <p className="text-ycf-secondary/80 mb-6 flex-grow">
                    {option.description}
                  </p>
                  <Button
                    color="primary"
                    radius="full"
                    className="font-poppins font-medium w-full"
                    onPress={onOpen}
                  >
                    {option.buttonText}
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-lg mb-6 text-ycf-secondary/80 max-w-2xl mx-auto">
            "Every gift, no matter the size, makes a difference in the lives of young people seeking to grow in their faith."
          </p>
          <Button
            color="primary"
            size="lg"
            radius="full"
            className="font-poppins font-medium"
            startContent={<Icon icon="lucide:heart" />}
            onPress={onOpen}
          >
            Donate Now
          </Button>
        </motion.div>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          backdrop="blur"
          size="lg"
          radius="lg"
          classNames={{
            base: "font-poppins",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-ycf-secondary">Make a Donation</h3>
                  <p className="text-sm text-ycf-secondary/70">
                    Your contribution supports our mission
                  </p>
                </ModalHeader>
                <ModalBody className="py-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {donationOptions.map((amount) => (
                          <Button
                            key={amount}
                            color={donationAmount === amount ? "primary" : "default"}
                            variant={donationAmount === amount ? "solid" : "bordered"}
                            radius="lg"
                            className="font-medium"
                            onPress={() => setDonationAmount(amount)}
                          >
                            {amount === "Other" ? "Other" : `$${amount}`}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {donationAmount === "Other" && (
                      <Input
                        type="number"
                        label="Custom Amount"
                        placeholder="Enter amount"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                          </div>
                        }
                        variant="bordered"
                        radius="lg"
                      />
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Payment Method
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          color="primary"
                          variant="bordered"
                          radius="lg"
                          startContent={<Icon icon="logos:visa" />}
                        >
                          Credit Card
                        </Button>
                        <Button
                          color="primary"
                          variant="bordered"
                          radius="lg"
                          startContent={<Icon icon="logos:paypal" />}
                        >
                          PayPal
                        </Button>
                        <Button
                          color="primary"
                          variant="bordered"
                          radius="lg"
                          startContent={<Icon icon="lucide:smartphone" />}
                        >
                          Mobile Pay
                        </Button>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className="border-t border-gray-200 pt-4">
                  <Button color="default" variant="light" onPress={onClose} radius="full">
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    radius="full"
                    startContent={<Icon icon="lucide:heart" />}
                  >
                    Complete Donation
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};