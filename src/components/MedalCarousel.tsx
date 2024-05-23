import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import GreenButton from "./GreenButton";
import OutlineButton from "./OutlineButton";

const MedalCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="">
          <div className="flex w-screen justify-center">
            <div className="relative grid h-96 w-11/12 justify-items-center space-y-2 rounded-xl bg-glassTexture p-8 backdrop-blur-md md:h-96 md:w-96">
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow"></div>
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow2"></div>
              <img src="../../medal1.png" alt="" className="z-30" />
              <div className="w-3/4 text-center">
                Валидаторы поддерживают сеть и получают вознаграждения
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex w-screen justify-center">
            <div className="relative grid h-96 w-11/12 justify-items-center space-y-2 rounded-xl bg-glassTexture p-8 backdrop-blur-md md:h-96 md:w-96">
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow"></div>
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow2"></div>

              <img src="../../medal2.png" alt="" className="z-30" />
              <div className="text-center text-sm">
                Газ с транзакций перераспределяется между кошельками
                валидаторами в пропорциях 90% – между всеми кошельками
                валидаторами, 10% – на генезис кошелек (дефляционная модель
                бизнеса)
              </div>
              <div className="absolute"></div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex w-screen justify-center">
            <div className="relative grid h-96 w-11/12 justify-items-center space-y-2 rounded-xl bg-glassTexture p-8 backdrop-blur-md md:h-96 md:w-96">
              <div className="absolute top-12 z-20 ml-8 h-10 w-8 shadow-elementGlow"></div>
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow2"></div>
              <img src="../../medal3.png" alt="" className="z-30" />
              <div className="w-3/4 text-center">
                Эмиссия ограничена 3,000,000,000 DNC
              </div>
              <div className="mt-2 grid w-full grid-cols-2 gap-x-4 px-4">
                <GreenButton text="Whitepaper" className="w-full" />
                <OutlineButton text="Whitepaper" className="text-white" />
                <div className="absolute"></div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default MedalCarousel;
