/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

/* eslint-disable @next/next/no-img-element */
import Facebook from "public/socials/Facebook";
import Instagram from "public/socials/Instagram";
import LinkedIn from "public/socials/LinkedIn";
import Twitter from "public/socials/Twitter";
import CommunityCarousel from "~/components/CommunityCarousel";
import EcosystemCarousel from "~/components/EcosystemCarousel";
import GreenButton from "~/components/GreenButton";
import MedalCarousel from "~/components/MedalCarousel";
import OutlineButton from "~/components/OutlineButton";
import TokensCarousel from "~/components/TokensCarousel";
import GlassCard from "~/components/glassCard";
import { Sticks } from "~/components/sticks";
import { useScroll } from "~/components/wrapper/pageWrapper";

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { elementsRefs } = useScroll();

  return (
    <div className="h-auto w-screen overflow-x-hidden md:w-full">
      <div
        ref={elementsRefs.homeRef}
        id="home"
        className="relative flex min-h-screen w-screen justify-center overflow-x-hidden overflow-y-hidden"
      >
        <div className="absolute top-[380px] z-20 h-full w-[2000px] md:-top-[22%] md:left-[7%] md:h-[125vh] md:w-[125vw]">
          <div className="h-125vh relative grid w-full justify-items-center md:h-[125vh]">
            <img
              src="../../chip.png"
              alt=""
              className="z-20 h-full w-[1400px] object-cover md:w-full md:max-w-[350vw]"
            />
            <div className="absolute top-10  z-10 md:top-48">
              <Sticks />
            </div>
            <div className="absolute top-[288px] z-40 mr-2 animate-float4 ease-in-out md:top-[50vh]">
              <img src="../../logos/4.png" alt="" className="w-36 md:w-80" />
            </div>

            <div className="absolute top-[291px] z-[39] mr-3 animate-float3 ease-in-out md:top-[51.2vh]">
              <img src="../../logos/3.png" alt="" className="w-32 md:w-64" />
            </div>
            <div className="absolute top-[294px] z-[38] mr-2 animate-float2 ease-in-out md:top-[51.8vh]">
              <img src="../../logos/2.png" alt="" className="w-28 md:w-56" />
            </div>
            <div className="absolute top-[298px] z-[37] mr-1 animate-float1 ease-in-out md:top-[52.6vh]">
              <img src="../../logos/1.png" alt="" className="w-24 md:w-48" />
            </div>
          </div>
        </div>
        <div className="z-30 mb-[8vh] mt-[21.5vh] grid w-full max-w-7xl content-between justify-items-center md:justify-items-start">
          <div className="grid justify-items-center md:block">
            <div className="text-center text-5xl font-bold md:text-8xl">
              DexnetChain
            </div>
            <div className="mt-8 w-96 p-0 text-center text-base font-bold md:px-0 md:text-start md:text-xl">
              EVM compatible blockchain powered by confirmation of authority
              (COA)
            </div>
            <GreenButton text={"Synchronize Node"} className="mt-8 w-48" />
          </div>
          <div className="mt-[640px] grid w-full max-w-7xl justify-items-center space-y-8 md:mt-0 md:block">
            <div className="w-11/12 max-w-xl text-center text-base md:w-full md:text-start md:text-xl">
              <span>It provides relatively</span>{" "}
              <span className="font-bold">
                Faster transactions by using the Byzantine Fault Tolerance (BFT)
              </span>
            </div>
            <div className="mt-6 hidden max-w-7xl grid-cols-6 gap-x-6 md:grid">
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/dexLogo.png"
                    alt="network"
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
                    src="../../logos/ethLogo.png"
                    alt="network"
                    className="object-fit h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Ethereum</div>
                  <div className="text-buttonGradientEnd">119 tps</div>
                </div>
              </div>
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/arbitrumLogo.png"
                    alt="network"
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
                    src="../../logos/optimismLogo.png"
                    alt="network"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Optimism</div>
                  <div className="text-buttonGradientEnd">9 tps</div>
                </div>
              </div>
              <div className=" grid h-32 w-full max-w-52 content-between rounded-xg bg-glassTexture p-3 backdrop-blur-md">
                <div className="bg-lightelement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/polyLogo.png"
                    alt="network"
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
                    src="../../logos/bscLogo.png"
                    alt="network"
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Bsc</div>
                  <div className="text-buttonGradientEnd">40.83 tps</div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <TokensCarousel />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={elementsRefs.advantagesRef}
        id="advantages"
        className="grid h-screen w-screen flex-col items-center justify-items-center"
      >
        <div className="flex w-screen flex-col space-y-6 md:w-full md:max-w-7xl md:space-y-20">
          <div className="grid w-full items-center">
            <div className="text-center text-3xl font-bold md:text-start md:text-5xl">
              Advantages
            </div>
          </div>
          <div className="block md:hidden">
            <MedalCarousel />
          </div>
          <div className={`hidden space-x-20 md:flex`}>
            <div className="items-between relative grid h-96 w-96 justify-items-center space-y-2 rounded-xl bg-glassTexture p-8 backdrop-blur-md">
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow"></div>
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow2"></div>
              <img src="../../medal1.png" alt="" className="z-30" />
              <div className="w-3/4 text-center">
                Validators support the network and receive rewards.
              </div>
            </div>
            <div className="items-between relative z-10 grid h-96 w-96 justify-items-center space-y-2 rounded-xl bg-glassTexture p-8 backdrop-blur-md">
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow"></div>
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow2"></div>

              <img src="../../medal2.png" alt="" className="z-30" />
              <div className="text-center text-sm">
                Gas fees from transactions are redistributed among validator
                wallets in the following proportions: 90% to all validator
                wallets, and 10% to the genesis wallet (deflationary business
                model).
              </div>
              <div className="absolute"></div>
            </div>
            <div className="items-between relative grid h-96 w-96 justify-items-center space-y-2 rounded-xl bg-glassTexture p-8 backdrop-blur-md">
              <div className="absolute top-12 z-20 ml-8 h-10 w-8 shadow-elementGlow"></div>
              <div className="absolute top-12 z-20 h-10 w-8 shadow-elementGlow2"></div>
              <img src="../../medal3.png" alt="" className="z-30" />
              <div className="w-3/4 text-center">
                The total supply is limited to 3,000,000,000 DNC.
              </div>
              <div className="mt-2 grid w-full grid-cols-2 gap-x-4 px-4">
                <GreenButton text="Whitepaper" className="w-full" />
                <OutlineButton text="Tokenomics" className="text-white" />
                <div className="absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={elementsRefs.dexNodeRef}
        id="dexNode"
        className="flex justify-center"
      >
        <div className="flex h-screen w-screen max-w-7xl flex-col items-center justify-items-center md:flex-row md:space-x-[10%]">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="w-full max-w-96 text-center text-3xl font-bold md:text-start md:text-5xl">
                To start earning profits
              </div>
              <div className="text-center text-lg font-bold md:text-start md:text-2xl">
                you need to purchase a{" "}
                <span className="font-bold text-bannerGradientStart">
                  DexNode
                </span>{" "}
                device
              </div>
            </div>
            <div className="max-w-xl">
              <p className="px-4 text-center text-xs md:px-0 md:text-start md:text-base">
                Node of the global decentralized Dexnet network generating
                tokens for maintaining the network. The Dexnet Node features a
                high-frequency ground communication channel operating at 915
                MHz. Dexnet Nodes detect each other within a radius of up to 5.5
                km and establish a direct communication channel, overlapping
                each other with a ground radio signal based on the principle of
                honeycomb cells.
              </p>
            </div>
            <div className="hidden justify-center md:flex md:justify-start">
              <GreenButton text="Buy DexNode" className="w-64" />
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-center px-4 md:mt-0 md:justify-start">
            <img src="../../dexNode1.gif" alt="" className="mix-blend-screen" />
            <div className="mt-12 space-y-4 text-xxs md:text-base ">
              <div className="flex space-x-5">
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <span className="text-bannerGradientStart">CPU:</span>
                    <span className="">8 core Amlogic s912 Cortex</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-bannerGradientStart">ETHERNET</span>
                    <span className="">RJ45</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-bannerGradientStart">
                      Satellite system:
                    </span>
                    <span className="">SpaceX SWARM</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <span className="text-bannerGradientStart">RAM:</span>
                    <span className="">4 GB</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-bannerGradientStart">SD:</span>
                    <span className="">2TB</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-bannerGradientStart">GSM:</span>
                    <span className="">with e-sim DEX Mobile</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <span className="text-bannerGradientStart">DexWan: </span>
                <span className="">
                  own high-frequency terrestial channel 915MHz, 5.5k m k
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:hidden md:justify-start">
            <GreenButton text="Buy DexNode" className="w-64" />
          </div>
        </div>
      </div>
      <div
        ref={elementsRefs.ecosystemRef}
        id="ecosystem"
        className="flex h-screen w-screen items-center justify-center"
      >
        <div className="w-screen max-w-7xl md:space-y-20">
          <div className="text-center text-3xl font-bold md:text-start md:text-7xl">
            DEXCHAIN ECOSYSTEM
          </div>
          <div className="hidden space-x-8 md:flex">
            <a
              href="/"
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
                  scan.dexchain.com
                </div>
                <div className="text-center text-lg">Block Explorer</div>
              </div>
            </a>
            <a
              href="/"
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
            <a
              href="/"
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
                  Secure Blockchain Entry/Exit
                </div>
              </div>
            </a>
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
              <div className="absolute bottom-10 z-30 flex w-full flex-col justify-center px-2">
                <div className="text-center text-lg text-bannerGradientStart">
                  DEXSafe
                </div>
                <div className="text-center text-lg">
                  Decentralized Wallet supporting 15+ blockchains on iOS/Android
                </div>
              </div>
            </a>
          </div>
          <div className="block md:hidden">
            <EcosystemCarousel />
          </div>
        </div>
      </div>
      <div
        ref={elementsRefs.communityRef}
        id="community"
        className="relative flex min-h-screen w-screen items-center justify-center"
      >
        <div className="relative flex w-full max-w-7xl flex-col md:space-y-12">
          <div className="mb-12 text-center text-5xl font-bold md:mb-0 md:text-start">
            DEXCHAIN
            <br></br>
            COMMUNITY
          </div>
          <div className="mb-12 flex max-w-lg justify-center md:mb-0 md:block">
            <p className="w-11/12 text-center text-base md:w-full md:text-start md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex justify-center space-x-8 md:justify-start">
            <div className="flex flex-col justify-center md:block">
              <div className="text-center text-5xl font-bold text-bannerGradientStart md:text-start">
                46
              </div>
              <div className="w-max text-center text-lg md:text-start">
                countries
              </div>
            </div>
            <div className="">
              <div className="text-center text-5xl font-bold text-bannerGradientStart md:text-start">
                271 890
              </div>
              <div className="text-center text-lg md:text-start">clients</div>
            </div>
          </div>

          <div className="absolute -left-[10vw] top-[420px] w-[120vw] max-w-6xl overflow-x-hidden md:-top-16 md:left-[55%] md:w-full">
            <img src="../../WorldMap.png" alt="" className="z-20 w-full" />
          </div>
          <div className=""></div>
          <div className="hidden md:block">
            <div className="grid max-w-6xl grid-cols-4 grid-rows-2 gap-8">
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
              <GlassCard>
                <span>PHOTO</span>
              </GlassCard>
            </div>
          </div>
          <div className="mt-52 block md:hidden">
            <CommunityCarousel />
          </div>
        </div>
        <div className="absolute -right-40 z-0">
          <div className="h-80 w-80 rounded-full bg-movingGlow blur-[100px]"></div>
        </div>
      </div>
      <div
        ref={elementsRefs.partnersRef}
        id="partners"
        className="flex h-screen w-screen flex-col items-center justify-center"
      >
        <div className="flex w-11/12 max-w-7xl flex-col justify-center space-y-12 md:w-full">
          <div className="text-center text-4xl font-bold">OUR PARTNERS</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <GlassCard className="relative flex h-16 w-full content-center">
              <img
                src="../../logos/coingeckoLogo.png"
                alt=""
                className="px-3"
              />
            </GlassCard>
            <GlassCard className="relative flex h-16 w-full content-center">
              <img
                src="../../logos/profixoneLogo.png"
                alt=""
                className="px-3"
              />
            </GlassCard>
            <GlassCard className="relative flex h-16 w-full content-center">
              <img
                src="../../logos/pancakeswapLogo.png"
                alt=""
                className="px-3"
              />
            </GlassCard>
            <GlassCard className="relative flex h-16 w-full content-center">
              <img
                src="../../logos/dexFreedomLogo.jpg"
                alt=""
                className="h-[50px] px-3"
              />
            </GlassCard>
            <GlassCard className="relative flex h-16 w-full content-center">
              <img
                src="../../logos/coinmarketcapLogo.png"
                alt=""
                className="h-[50px] px-3"
              />
            </GlassCard>
          </div>
        </div>
        <div className="mt-24 grid w-11/12 justify-items-center md:w-full">
          <div className="text-center text-3xl font-bold md:text-5xl">
            BECOME A DEXCHAIN
            <br></br>
            PARTNER
          </div>
          <div className="mt-8 max-w-4xl text-center text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
          <GreenButton text="Become a partner" className="mt-8 w-64" />
        </div>
      </div>
      <div id="footer" className="flex justify-center bg-footerColor py-10">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="mb-8 grid justify-items-center space-y-4 md:mb-0 md:block">
            <img src="../../logo.png" alt="" className="w-64" />
            <div className="hidden text-sm md:block">
              Copyright © 2010-2024 Dexnet technology.<br></br>
              Все права защищены.
            </div>
          </div>
          <div className="hidden space-x-6 md:flex">
            <div className="">Privacy Policy</div>
            <div className="">Terms of Service</div>
          </div>
          <div className="space-y-4">
            <div className="pb-1 text-center font-bold text-white text-opacity-50 md:text-start">
              FOLLOW US ON SOCIALS
            </div>
            <div className="flex space-x-6 md:space-x-3">
              <a href="https://www.facebook.com/people/Dexnet/100094044572486/">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/company/dexnetone/">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/dexnet.one/">
                <Instagram />
              </a>
              <a href="https://x.com/DexNet_one">
                <Twitter />
              </a>
            </div>
          </div>
          <div className="mt-8 flex space-x-6 md:hidden">
            <div className="">Privacy Policy</div>
            <div className="">Terms of Service</div>
          </div>
          <div className="mt-12 block text-center text-xs md:hidden">
            Copyright © 2010-2024 Dexnet technology.<br></br>
            Все права защищены.
          </div>
        </div>
      </div>
    </div>
  );
}
