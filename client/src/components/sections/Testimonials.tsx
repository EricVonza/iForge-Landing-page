import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { SectionHeader } from "@/components/ui/section-header"
import { sectionClasses, textClasses, spacingClasses } from "@/lib/styles"

const testimonials = [
  {
    name: "Faith Kemboi",
    role: "Engineering Student",
    image: "/avatars/sarah.svg",
    content: "iForge Academy transformed my learning experience. The practical workshops and hands-on projects gave me real-world skills.",
    initials: "SJ"
  },
  {
    name: "David Mutua",
    role: "Maker Space Member",
    image: "/avatars/david.svg",
    content: "The Maker Store has everything I need for my projects. The staff is knowledgeable and always ready to help.",
    initials: "DC"
  },
  {
    name: "Emily Wanjiru",
    role: "Tech Entrepreneur",
    image: "/avatars/emily.svg",
    content: "The online store's quick delivery and quality components have been essential for my startup.",
    initials: "ER"
  }
]

export function Testimonials() {
  return (
    <section className={sectionClasses.muted} aria-labelledby="testimonials-title">
      <div className={sectionClasses.container}>
        <div className={spacingClasses.contentGap}>
          <SectionHeader
            title="What Our Community Says"
            description="Hear from our diverse community of makers, learners, and innovators."
          />
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-[80%] lg:basis-[70%]">
                  <Card className="border-none shadow hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center p-6 md:p-8">
                      <Avatar className="w-16 h-16 mb-6">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={`${testimonial.name}'s avatar`}
                          loading="lazy"
                        />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <p className={`${textClasses.description} text-center mb-6 leading-relaxed italic max-w-xl`}>
                        "{testimonial.content}"
                      </p>
                      <div className="text-center">
                        <h3 className={textClasses.subtitle}>
                          {testimonial.name}
                        </h3>
                        <p className={textClasses.small}>{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious 
                className="-left-12 hover:scale-105 transition-transform"
                aria-label="View previous testimonial"
              />
              <CarouselNext 
                className="-right-12 hover:scale-105 transition-transform"
                aria-label="View next testimonial"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
