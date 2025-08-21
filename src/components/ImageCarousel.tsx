import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false })
  );

  // Using placeholder images until product images are available
  const placeholderImages = [
    "https://via.placeholder.com/1200x400/A91B4D/F5F5DC?text=Rumani+Dhaage+1",
    "https://via.placeholder.com/1200x400/A91B4D/F5F5DC?text=Rumani+Dhaage+2",
    "https://via.placeholder.com/1200x400/A91B4D/F5F5DC?text=Rumani+Dhaage+3",
    "https://via.placeholder.com/1200x400/A91B4D/F5F5DC?text=Rumani+Dhaage+4",
  ];

  return (
    <div className="p-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {placeholderImages.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-[3/1] items-center justify-center p-0">
                  <img src={src} alt={`Promotional Banner ${index + 1}`} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </div>
  );
}