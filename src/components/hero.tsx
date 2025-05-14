import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Hero = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://img.heroui.chat/image/places?w=1920&h=1080&u=ycf-hero')`,
        }}
      ></div>
      <div className="absolute inset-0 hero-gradient z-10"></div>

      <motion.div
        className="relative z-20 text-center max-w-3xl px-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-poppins text-white mb-6"
          variants={itemVariants}
        >
          A Generation of Young Christians, Hungry for More of God
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Passionate about Growth, Faith, and Fellowship with the Father.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Button
              color="primary"
              size="lg"
              radius="full"
              className="font-poppins font-medium"
              startContent={<Icon icon="lucide:users" />}
              as="a"
              href="https://chat.whatsapp.com/EovTOmqliO06gPBd9b9VAe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Community
            </Button>
          </motion.div>
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Button
              variant="bordered"
              size="lg"
              radius="full"
              className="font-poppins font-medium text-white border-white"
              startContent={<Icon icon="lucide:play" />}
              as="a"
              href="https://youtube.com/@youngchristainfellowship?si=oRLZye7bDsHfnt5w"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch our messages
            </Button>
          </motion.div>
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Button
              variant="light"
              size="lg"
              radius="full"
              className="font-poppins font-medium text-white"
              startContent={<Icon icon="lucide:heart" />}
              as="a"
              href="#partner"
            >
              Give/Partner with Us
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-white/80 hover:text-white">
            <Icon icon="lucide:chevron-down" className="text-3xl" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};