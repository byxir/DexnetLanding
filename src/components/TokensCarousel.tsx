import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const TokensCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="">
          <div className="flex w-screen justify-center">
            <div className="flex w-11/12 space-x-4">
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/dexlogo.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">DexnetChain</div>
                  <div className="text-buttonGradientEnd">До 3800 tps</div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default TokensCarousel;
