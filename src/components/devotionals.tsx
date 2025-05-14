import React from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./section-header";

export const Devotionals = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set(["0"]));

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(new Set(keys));
  };

  const devotionals = [
    {
      title: "Finding Strength in Weakness",
      scripture: "2 Corinthians 12:9-10",
      word: "God's power is made perfect in our weakness. When we acknowledge our limitations, we create space for His strength to work through us.",
      prayer: "Lord, help me embrace my weaknesses as opportunities for Your power to shine through me.",
      confession: "I am strong not because of who I am, but because of whose I am.",
    },
    {
      title: "Walking in Faith, Not Fear",
      scripture: "Isaiah 41:10",
      word: "Fear paralyzes, but faith propels. God promises to strengthen, help, and uphold us with His righteous hand.",
      prayer: "Father, replace my fears with faith as I trust in Your unfailing presence.",
      confession: "I choose faith over fear, knowing God is with me in every situation.",
    },
    {
      title: "The Power of Gratitude",
      scripture: "1 Thessalonians 5:16-18",
      word: "Gratitude shifts our focus from what we lack to what we have. It opens our eyes to God's goodness even in difficult circumstances.",
      prayer: "God, help me cultivate a heart of thanksgiving in all circumstances.",
      confession: "I will rejoice always, pray continually, and give thanks in all circumstances.",
    },
    {
      title: "Living with Purpose",
      scripture: "Ephesians 2:10",
      word: "You were created with intention and purpose. God has prepared good works for you to walk in that will impact others.",
      prayer: "Lord, reveal the unique purpose You've created me for and guide my steps.",
      confession: "I am God's masterpiece, created to do good works He prepared in advance.",
    },
    {
      title: "The Transforming Power of God's Word",
      scripture: "Romans 12:2",
      word: "God's Word has the power to renew our minds and transform our lives when we consistently engage with it.",
      prayer: "Holy Spirit, transform my mind through Your Word so I can discern God's will.",
      confession: "I am being transformed by the renewing of my mind through God's Word.",
    },
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
    <section id="devotionals" className="section-padding bg-white" ref={ref}>
      <div className="container-padding max-w-4xl mx-auto">
        <SectionHeader
          title="Devotionals"
          subtitle="Weekly or monthly devotionals written by the YCF team to inspire and encourage your spiritual growth."
        />

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            variant="bordered"
            className="bg-white"
          >
            {devotionals.map((devotional, index) => (
              <AccordionItem
                key={index.toString()}
                aria-label={devotional.title}
                title={
                  <div className="font-poppins font-medium text-lg text-ycf-secondary">
                    {devotional.title}
                  </div>
                }
                subtitle={
                  <div className="text-ycf-secondary/70 font-medium">
                    {devotional.scripture}
                  </div>
                }
                startContent={
                  <div className="bg-ycf-accent/20 p-2 rounded-full">
                    <Icon
                      icon="lucide:book"
                      className="text-ycf-highlight text-xl"
                    />
                  </div>
                }
                classNames={{
                  title: "text-lg",
                  trigger: "py-4",
                  content: "px-2 pb-6",
                }}
              >
                <div className="space-y-4 pl-2">
                  <div>
                    <h4 className="font-medium text-ycf-secondary mb-1">
                      Today's Word:
                    </h4>
                    <p className="text-ycf-secondary/80">{devotional.word}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-ycf-secondary mb-1">
                      Prayer:
                    </h4>
                    <p className="text-ycf-secondary/80 italic">
                      "{devotional.prayer}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-ycf-secondary mb-1">
                      Confession:
                    </h4>
                    <p className="text-ycf-secondary/80 font-medium">
                      {devotional.confession}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="light"
                      color="primary"
                      size="sm"
                      radius="full"
                      startContent={<Icon icon="lucide:download" />}
                    >
                      Download PDF
                    </Button>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            className="mt-10 text-center"
            variants={itemVariants}
          >
            {/* <Button
              color="primary"
              variant="flat"
              radius="full"
              size="lg"
              className="font-poppins"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View All Devotionals
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};