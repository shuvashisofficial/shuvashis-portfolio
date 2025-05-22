"use client";

import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "Prof. Dr. Shamim Akhter",
    image: "/images/shamimsir.jpg",
    name: "Prof. Dr. Shamim Akhter",
    position:
      "Professor & Head, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
    relation: "Thesis Supervisior and Mentor",
    date: "January 08, 2024",
    quote:
      "I highly recommend Shuvashis Sarker for his exceptional research skills, strong academic performance, and unwavering dedication. He is an intelligent and hardworking individual, well-prepared for advanced study and research roles in AI and machine learning.",
  },
  {
    id: "faika",
    image: "/images/faika.jpg",
    name: "Faika Fairuj Preotee",
    position: "Adjunct Lecturer, Department of Computer Science and Engineering, Southeast Universtity, Dhaka, Bangladesh",
    relation: "Colleague",
    date: "May 22, 2025",
    quote:
      "I’ve had the pleasure of working with Shuvashis Sarker, whose analytical mindset and commitment to quality make him a valuable team member. He is detail-oriented, proactive, and excels in innovation and research-driven roles."
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

// Custom arrow components
const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Previous"
    className="absolute left-[-50px] top-[40%] z-30 rounded-full bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition"
  >
    &#8592;
  </button>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    className="absolute right-[-50px] top-[40%] z-30 rounded-full bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition"
  >
    &#8594;
  </button>
);

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative overflow-visible">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recommendations
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            What mentors and colleagues say about my work
          </p>
        </motion.div>

        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots
          infinite
          autoPlay
          autoPlaySpeed={6000}
          keyBoardControl
          containerClass="w-full relative"
          dotListClass="custom-dot-list-style"
          itemClass="px-2"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="relative h-12 w-12 border-2 border-primary/20 overflow-hidden rounded-full">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover rounded-full"
                          priority
                        />
                      ) : (
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.relation} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
