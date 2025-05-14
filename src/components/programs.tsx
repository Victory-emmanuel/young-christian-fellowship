import React from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./section-header";

interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  schedule: string;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  icon,
  title,
  description,
  schedule,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        className="card-hover h-full"
        shadow="none"
        radius="lg"
        isPressable
      >
        <CardBody className="p-6">
          <div className="w-12 h-12 rounded-full bg-ycf-accent/20 flex items-center justify-center mb-4">
            <Icon icon={icon} className="text-2xl text-ycf-highlight" />
          </div>
          <h3 className="text-xl font-semibold mb-2 font-poppins text-ycf-secondary">
            {title}
          </h3>
          <p className="text-ycf-secondary/80 mb-4">{description}</p>
          <div className="flex items-center mt-auto text-sm font-medium text-ycf-highlight">
            <Icon icon="lucide:calendar" className="mr-2" />
            <span>{schedule}</span>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Programs = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      icon: "lucide:book-open",
      title: "Bible Study",
      description: "Deep dive into scripture with guided discussions and practical applications for daily life.",
      schedule: "Every Thursday by 8 PM",
    },
    {
      icon: "lucide:heart",
      title: "Moments of Intimacy (MOI)",
      description: "A bi-monthly gathering focused on deep worship, prayer, and intimate connection with God.",
      schedule: "February, April, June, August, October, December",
    },
    {
      icon: "lucide:crown",
      title: "THE BECOMING",
      description: "Our major annual conference designed to transform and equip young Christians for greater impact.",
      schedule: "Every October yearly",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Programs & Events"
          subtitle="Join us for regular gatherings designed to strengthen your faith and build community."
        />

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                icon={program.icon}
                title={program.title}
                description={program.description}
                schedule={program.schedule}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};