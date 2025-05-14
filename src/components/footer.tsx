import React from "react";
import { motion } from "framer-motion";
import { Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: [
        { label: "Our Mission", href: "#about" },
        { label: "Leadership Team", href: "#" },
        { label: "Statement of Faith", href: "#" },
        { label: "History", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Devotionals", href: "#devotionals" },
        { label: "Sermons", href: "#watch" },
        { label: "Bible Study Materials", href: "#" },
        { label: "Prayer Requests", href: "#" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { label: "Join", href: "#join" },
        { label: "Volunteer", href: "#" },
        { label: "Partner", href: "#partner" },
        { label: "Events Calendar", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "lucide:instagram", label: "Instagram", url: "#" },
    { icon: "lucide:youtube", label: "YouTube", url: "https://youtube.com/@youngchristainfellowship?si=oRLZye7bDsHfnt5w" },
    { icon: "lucide:brand-tiktok", label: "TikTok", url: "#" },
  ];

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
    <footer className="bg-ycf-secondary text-white">
      <motion.div
        className="container-padding max-w-7xl mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:heart" className="text-ycf-accent text-2xl" />
              <span className="font-poppins font-semibold text-xl">YCF</span>
            </div>
            <p className="text-white/80">
              A Generation of Young Christians, Hungry for More of God. Passionate about Growth, Faith, and Fellowship with the Father.
            </p>
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
                    className="text-white/80 hover:text-ycf-accent"
                    as="a"
                    href={social.url}
                  >
                    <Icon icon={social.icon} className="text-xl" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="font-poppins font-semibold text-lg">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-ycf-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-white/60 text-sm">
            &copy; Young Christian Fellowship, 2025. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-white">
              Privacy Policy
            </Link>
            <div className="text-white/60">
              Follow us on instagram, youtube, tiktok
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};