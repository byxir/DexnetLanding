/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import GlassCard from "./glassCard";

const CommunityCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="pt-14">
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="grid w-11/12 grid-cols-2 grid-rows-2 gap-4">
              <img
                src="../../community/1.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
              <img
                src="../../community/2.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
              <img
                src="../../community/3.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
              <img
                src="../../community/4.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="grid w-11/12 grid-cols-2 grid-rows-2 gap-4">
              <img
                src="../../community/5.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
              <img
                src="../../community/6.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
              <img
                src="../../community/7.webp"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
              <img
                src="../../community/8.jpeg"
                alt=""
                className="h-24 w-full rounded-xg object-cover"
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CommunityCarousel;
