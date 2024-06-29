/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import GreenButton from "./GreenButton";
import OutlineButton from "./OutlineButton";

const EcosystemCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="pt-10">
        <CarouselItem>
          <div className="flex w-screen justify-center">
            <a
              href="https://explorer.dexnetchain.com/"
              className="relative grid h-[500px] w-[307px] grid-rows-[3fr_2fr] justify-items-center gap-y-6 rounded-xl bg-glassTexture backdrop-blur-md transition ease-in-out hover:-translate-y-1.5"
            >
              <div className="absolute top-6 -z-10 h-64 w-64 bg-bannerGradientEnd blur-2xl"></div>
              <div className="absolute z-20 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-helper to-75%"></div>
              <div className="max-h-[500px]">
                <img
                  src="../../ecosystem/scan.png"
                  alt=""
                  className="h-full w-full transform object-cover"
                />
              </div>
              <div className="absolute bottom-10 z-30 flex w-full flex-col justify-center">
                <div className="text-center text-lg text-bannerGradientStart">
                  Check and analyze transactions
                </div>
                <div className="text-center text-lg">Block Explorer</div>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex w-screen justify-center">
            <a
              href="https://app.dexnetchain.com/"
              className="relative grid h-[500px] w-[307px] grid-rows-[3fr_2fr] justify-items-center gap-y-6 rounded-xl bg-glassTexture backdrop-blur-md transition ease-in-out hover:-translate-y-1.5"
            >
              <div className="absolute top-6 -z-10 h-64 w-64 bg-bannerGradientEnd blur-2xl"></div>
              <div className="absolute z-20 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-helper to-75%"></div>
              <div className="max-h-[500px]">
                <img
                  src="../../ecosystem/app.png"
                  alt=""
                  className="h-full w-full transform object-cover"
                />
              </div>
              <div className="absolute bottom-10 z-30 flex w-full flex-col justify-center">
                <div className="text-center text-lg text-bannerGradientStart">
                  app.dexnetchain.com
                </div>
                <div className="text-center text-lg">
                  Swap/Farming/Liquidity
                </div>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex w-screen justify-center">
            <a
              href="https://app.dexnetchain.com/bridge"
              className="relative grid h-[500px] w-[307px] grid-rows-[3fr_2fr] justify-items-center gap-y-6 rounded-xl bg-glassTexture backdrop-blur-md transition ease-in-out hover:-translate-y-1.5"
            >
              <div className="absolute top-6 -z-10 h-64 w-64 bg-bannerGradientEnd blur-2xl"></div>
              <div className="absolute z-20 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-helper to-75%"></div>
              <div className="max-h-[500px]">
                <img
                  src="../../ecosystem/bridge.png"
                  alt=""
                  className="h-full w-full transform object-cover"
                />
              </div>
              <div className="absolute bottom-10 z-30 flex w-full flex-col justify-center">
                <div className="text-center text-lg text-bannerGradientStart">
                  bridge.dexnetchain.com
                </div>
                <div className="text-center text-lg">
                  Sequre Blockchain Entry/Exit
                </div>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="flex w-screen justify-center">
            <a
              href="/"
              className="relative grid h-[500px] w-[307px] grid-rows-[3fr_2fr] justify-items-center gap-y-6 rounded-xl bg-glassTexture backdrop-blur-md transition ease-in-out hover:-translate-y-1.5"
            >
              <div className="absolute top-6 -z-10 h-64 w-64 bg-bannerGradientEnd blur-2xl"></div>
              <div className="absolute z-20 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-helper to-75%"></div>
              <div className="max-h-[500px]">
                <img
                  src="../../ecosystem/wallet.png"
                  alt=""
                  className="h-full w-full transform object-cover"
                />
              </div>
              <div className="absolute bottom-10 z-30 flex w-full flex-col justify-center">
                <div className="text-center text-lg text-bannerGradientStart">
                  DEXSafe
                </div>
                <div className="px-2 text-center text-lg">
                  Decentralized Wallet supporting 15+ blockchains on iOS/Android
                </div>
              </div>
            </a>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default EcosystemCarousel;
