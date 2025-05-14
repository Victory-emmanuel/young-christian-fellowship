import React from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";


export const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <h2 className="sm:text-4xl text-3xl font-semibold">About YCF</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="https://img.heroui.chat/image/places?w=800&h=600&u=ycf-about"
              alt="Youth Christian Fellowship community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ycf-secondary/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-4">
              <p className="text-sm font-medium text-ycf-secondary">
                Est. 2005
              </p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-semibold font-poppins mb-6"
            >
              Who We Are
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-4"
            >
              YCF is a movement of young Christians passionate about growing in
              faith, building a relationship with God, and spreading the gospel
              through love and community.
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold font-poppins mb-2 mt-6"
            >
              Vision Statement
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-4"
            >
              To have a generation of young Christians who are{" "}
              <span className="text-ycf-highlight font-semibold">
                deeply rooted in their faith
              </span>
              , ready to serve God, make a positive impact, change the world and
              raise an army to burn for Jesus.
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold font-poppins mb-2 mt-6"
            >
              Mission Statement
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-6"
            >
              To provide a supportive environment where young Christians who are
              hungry for God can grow spiritually, build meaningful
              relationships, and cultivate their gifts through prayer, bible
              study and deep intimacy.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2">
                <Icon
                  icon="lucide:check-circle"
                  className="text-ycf-highlight text-xl"
                />
                <span className="font-medium">Bible-based teaching</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="lucide:check-circle"
                  className="text-ycf-highlight text-xl"
                />
                <span className="font-medium">Supportive community</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="lucide:check-circle"
                  className="text-ycf-highlight text-xl"
                />
                <span className="font-medium">Service opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="lucide:check-circle"
                  className="text-ycf-highlight text-xl"
                />
                <span className="font-medium">Spiritual growth</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              {/* <Button
                color="primary"
                size="lg"
                radius="full"
                className="font-poppins font-medium"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Learn More About Our Mission
              </Button> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
