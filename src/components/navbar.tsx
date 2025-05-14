import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Link, Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Devotionals", href: "#devotionals" },
    { name: "Join", href: "#join" },
    { name: "Watch & Listen", href: "#watch" },
    { name: "Partner", href: "#partner" },
    { name: "Contact", href: "#contact" },
  ];

  const navbarVariants = {
    initial: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      className="fixed top-0 w-full z-50"
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <HeroNavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="h-16 md:h-20"
        classNames={{
          wrapper: "container-padding max-w-7xl mx-auto",
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand>
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2"
            >
              <Icon icon="lucide:heart" className="text-ycf-highlight text-2xl" />
              <span className="font-poppins font-semibold text-xl text-ycf-secondary">YCF</span>
            </motion.div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-6" justify="center">
          {navItems.map((item, i) => (
            <NavbarItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="font-medium text-ycf-secondary hover:text-ycf-highlight transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Button
                color="primary"
                variant="flat"
                radius="full"
                className="font-poppins font-medium"
                startContent={<Icon icon="lucide:heart" />}
              >
                Donate
              </Button>
            </motion.div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="pt-8 bg-white/95 backdrop-blur-sm">
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {navItems.map((item, i) => (
                  <NavbarMenuItem key={`${item.name}-${i}`}>
                    <motion.div
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.href}
                        className="w-full py-3 text-lg font-poppins font-medium text-ycf-secondary hover:text-ycf-highlight"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="mt-6">
                  <motion.div
                    variants={menuItemVariants}
                    custom={navItems.length}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Button
                      color="primary"
                      className="w-full font-poppins"
                      startContent={<Icon icon="lucide:heart" />}
                    >
                      Donate Now
                    </Button>
                  </motion.div>
                </NavbarMenuItem>
              </>
            )}
          </AnimatePresence>
        </NavbarMenu>
      </HeroNavbar>
    </motion.div>
  );
};