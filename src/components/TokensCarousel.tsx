/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

const TokensCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="w-screen">
        <CarouselItem className="w-screen">
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
                  <div className="text-buttonGradientEnd">Up to 3800 tps</div>
                </div>
              </div>
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full p-[7px]">
                  <img
                    src="../../logos/ethlogo.png"
                    alt=""
                    className="object-fit h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Ethereum</div>
                  <div className="text-buttonGradientEnd">119 tps</div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="flex w-11/12 space-x-4">
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/arbitrumlogo.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Arbitrum</div>
                  <div className="text-buttonGradientEnd">18 tps</div>
                </div>
              </div>
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/optimismlogo.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Optimism</div>
                  <div className="text-buttonGradientEnd">9 tps</div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="w-screen">
          <div className="flex w-screen justify-center">
            <div className="flex w-11/12 space-x-4">
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/polylogo.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Polygon</div>
                  <div className="text-buttonGradientEnd">41.4 tps</div>
                </div>
              </div>
              <div className="grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/bsclogo.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Bsc</div>
                  <div className="text-buttonGradientEnd">40.83 tps</div>
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
