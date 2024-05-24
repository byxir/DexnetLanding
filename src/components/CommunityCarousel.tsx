import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import GreenButton from "./GreenButton";
import OutlineButton from "./OutlineButton";
import GlassCard from "./glassCard";

const CommunityCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="py-14">
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="grid w-11/12 grid-cols-2 grid-rows-2 gap-4">
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="grid w-11/12 grid-cols-2 grid-rows-2 gap-4">
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="grid w-11/12 grid-cols-2 grid-rows-2 gap-4">
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard className="h-24 w-full">
                <span>PHOTO</span>
              </GlassCard>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CommunityCarousel;
