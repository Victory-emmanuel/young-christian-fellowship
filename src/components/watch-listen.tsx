import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./section-header";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  index: number;
}

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

const YouTubeCarousel: React.FC<{ videos: YouTubeVideoProps[] }> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // We'll keep this for dynamic checking, but we'll also use Tailwind's responsive classes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      {/* Main video display - with landscape optimization */}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg landscape:h-[70vh] landscape:max-h-[500px]">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videos[currentIndex].videoId}`}
          title={videos[currentIndex].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-ycf-secondary rounded-full p-2 shadow-md z-10"
        aria-label="Previous video"
      >
        <Icon icon="lucide:chevron-left" className="text-xl" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-ycf-secondary rounded-full p-2 shadow-md z-10"
        aria-label="Next video"
      >
        <Icon icon="lucide:chevron-right" className="text-xl" />
      </button>

      {/* Video thumbnails for larger screens - using custom breakpoints */}
      <div className="hidden md:block mt-4">
        <div className="grid grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={video.videoId}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                index === currentIndex ? 'ring-2 ring-ycf-highlight scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                alt={`Thumbnail for ${video.title}`}
                className="w-full aspect-video object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator for mobile - using custom breakpoints */}
      <div className="flex mobile:flex md:hidden justify-center mt-4 gap-2">
        {videos.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-ycf-highlight' : 'bg-gray-300'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ name, role, quote, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full" shadow="sm">
        <CardBody className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src={`https://img.heroui.chat/image/avatar?w=200&h=200&u=ycf-testimonial-${index}`}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-poppins font-medium text-ycf-secondary">
                {name}
              </h4>
              <p className="text-sm text-ycf-secondary/70">{role}</p>
            </div>
          </div>
          <div className="mb-2">
            <Icon icon="lucide:quote" className="text-ycf-accent text-2xl" />
          </div>
          <p className="text-ycf-secondary/80 italic">{quote}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const WatchListen = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const youtubeVideos = [
    {
      videoId: "SKM6L-MvoPc",
      title: "YCF Moments of Intimacy (MOI)",
    },
    {
      videoId: "uROIGTG_GYM",
      title: "YCF Worship Experience",
    },
    {
      videoId: "SKM6L-MvoPc",
      title: "YCF Community Gathering",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Member since 2019",
      quote: "YCF has completely transformed my spiritual journey. The community here has become like family, supporting me through life's challenges and celebrating my victories.",
    },
    {
      name: "Michael Chen",
      role: "Worship Team Leader",
      quote: "Being part of the worship team at YCF has helped me discover my gifts and use them to glorify God. I've grown so much in my faith and leadership abilities.",
    },
    {
      name: "Priya Patel",
      role: "Small Group Host",
      quote: "Hosting a small group has been one of the most rewarding experiences. Seeing young people open up about their faith journey and grow together is incredible.",
    },
  ];

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

  return (
    <section id="watch" className="section-padding bg-white" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <SectionHeader
          title="Watch & Listen"
          subtitle="Experience our Moments of Intimacy (MOI) videos and hear testimonies from our community members."
        />

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <YouTubeCarousel videos={youtubeVideos} />
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Testimonials
            </h3>
            <p className="text-ycf-secondary/80 max-w-2xl mx-auto">
              Hear from our community members about how YCF has impacted their lives and spiritual journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <Button
              color="primary"
              variant="flat"
              radius="full"
              size="lg"
              className="font-poppins"
              endContent={<Icon icon="lucide:youtube" />}
              as="a"
              href="https://youtube.com/@youngchristainfellowship?si=oRLZye7bDsHfnt5w"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch our MOI videos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};