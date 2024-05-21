"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef } from "react";
import GreenButton from "~/components/GreenButton";
import OutlineButton from "~/components/OutlineButton";

export default function HomePage() {
  return (
    <div className="snap h-screen w-full overflow-y-scroll scroll-smooth">
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden">
        <img
          src="../../chip.png"
          alt=""
          className="absolute -top-[25%] left-[17%] -z-10 h-[125vh] w-[125vw] object-cover"
        />
        <div className="mb-[8vh] mt-[21.5vh] grid w-full max-w-7xl content-between">
          <div className="">
            <div className="text-8xl font-bold">DexNetChain</div>
            <div className="mt-8 w-96 text-xl font-bold">
              EVM compatible blockchain powered by confirmation of authority
              (PoA)
            </div>
            <GreenButton text={"Connect Wallet"} className="mt-8 w-48" />
          </div>
          <div className="">
            <div className="w-full max-w-xl text-xl">
              <span>It provides relatively</span>{" "}
              <span className="font-bold">
                {" "}
                faster transactions by using the Byzantine Fault Tolerance (BFT)
              </span>
            </div>
            <div className="mt-6 flex space-x-6">
              <div className="rounded-xg bg-glassTexture grid h-32 w-52 content-between p-3 backdrop-blur-md">
                <div className="bg-lightElement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/dexLogo.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">DexnetChain</div>
                  <div className="text-buttonGradientEnd">до 3800 tps</div>
                </div>
              </div>
              <div className="rounded-xg bg-glassTexture grid h-32 w-52 content-between p-3 backdrop-blur-md">
                <div className="bg-lightElement flex h-10 w-10 items-center justify-center rounded-full p-[7px]">
                  <img
                    src="../../logos/ethLogo.png"
                    alt=""
                    className="object-fit h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Ethereum</div>
                  <div className="text-buttonGradientEnd">119 tps</div>
                </div>
              </div>
              <div className="rounded-xg bg-glassTexture grid h-32 w-52 content-between p-3 backdrop-blur-md">
                <div className="bg-lightElement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/arbitrumLogo.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Arbitrum</div>
                  <div className="text-buttonGradientEnd">18 tps</div>
                </div>
              </div>
              <div className="rounded-xg bg-glassTexture grid h-32 w-52 content-between p-3 backdrop-blur-md">
                <div className="bg-lightElement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/optimismLogo.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Optimism</div>
                  <div className="text-buttonGradientEnd">9 tps</div>
                </div>
              </div>
              <div className="rounded-xg bg-glassTexture grid h-32 w-52 content-between p-3 backdrop-blur-md">
                <div className="bg-lightElement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/polyLogo.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Polygon</div>
                  <div className="text-buttonGradientEnd">41.4 tps</div>
                </div>
              </div>
              <div className="rounded-xg bg-glassTexture grid h-32 w-52 content-between p-3 backdrop-blur-md">
                <div className="bg-lightElement flex h-10 w-10 items-center justify-center rounded-full">
                  <img
                    src="../../logos/bscLogo.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">BSC</div>
                  <div className="text-buttonGradientEnd">40.83 tps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-screen w-screen flex-col items-center justify-items-center">
        <div className="flex max-w-7xl flex-col space-y-20">
          <div className="grid w-full items-center">
            <div className="text-5xl font-bold">Преимущества</div>
          </div>
          <div className="flex space-x-20">
            <div className="items-between bg-glassTexture relative grid h-96 w-96 justify-items-center space-y-2 rounded-xl p-8 backdrop-blur-md">
              <div className="shadow-elementGlow absolute top-12 z-20 h-10 w-8"></div>
              <div className="shadow-elementGlow2 absolute top-12 z-20 h-10 w-8"></div>
              <img src="../../medal1.png" alt="" className="z-30" />
              <div className="w-3/4 text-center">
                Валидаторы поддерживают сеть и получают вознаграждения
              </div>
            </div>
            <div className="items-between bg-glassTexture relative z-10 grid h-96 w-96 justify-items-center space-y-2 rounded-xl p-8 backdrop-blur-md">
              <div className="shadow-elementGlow absolute top-12 z-20 h-10 w-8"></div>
              <div className="shadow-elementGlow2 absolute top-12 z-20 h-10 w-8"></div>

              <img src="../../medal2.png" alt="" className="z-30" />
              <div className="text-center text-sm">
                Газ с транзакций перераспределяется между кошельками
                валидаторами в пропорциях 90% – между всеми кошельками
                валидаторами, 10% – на генезис кошелек (дефляционная модель
                бизнеса)
              </div>
              <div className="absolute"></div>
            </div>
            <div className="items-between bg-glassTexture relative grid h-96 w-96 justify-items-center space-y-2 rounded-xl p-8 backdrop-blur-md">
              <div className="shadow-elementGlow absolute top-12 z-20 ml-8 h-10 w-8"></div>
              <div className="shadow-elementGlow2 absolute top-12 z-20 h-10 w-8"></div>
              <img src="../../medal3.png" alt="" className="z-30" />
              <div className="w-3/4 text-center">
                Эмиссия ограничена 3,000,000,000 DNC
              </div>
              <div className="mt-2 flex space-x-4 px-4">
                <GreenButton text="Whitepaper" />
                <OutlineButton text="Whitepaper" className="text-white" />
                <div className="absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex h-screen w-screen max-w-7xl items-center justify-items-center space-x-[10%]">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="max-w-96 text-5xl font-bold">
                To start earning profits
              </div>
              <div className="text-2xl font-bold">
                you need to purchase a{" "}
                <span className="text-bannerGradientStart font-bold">
                  DexNode
                </span>{" "}
                device
              </div>
            </div>
            <div className="max-w-xl">
              <p className="">
                Node of the global decentralized Dexnet network generating
                tokens for maintaining the network. The Dexnet Node features a
                high-frequency ground communication channel operating at 915
                MHz. Dexnet Nodes detect each other within a radius of up to 5.5
                km and establish a direct communication channel, overlapping
                each other with a ground radio signal based on the principle of
                honeycomb cells.
              </p>
            </div>
            <GreenButton text="Buy DexNode" />
          </div>
          <div className="">
            <img src="../../dexNode1.png" alt="" className="mix-blend-screen" />
            <div className="mt-20 space-y-4 ">
              <div className="flex space-x-8">
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
        </div>
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="max-w-7xl">
          <div className="text-7xl font-bold">
            DEXCHAIN <br></br>
            ECOSYSTEM
          </div>
          <div className="flex space-x-8">
            <div className="bg-glassTexture grid h-[500px] w-[307px] grid-rows-[3fr_2fr] gap-y-6 rounded-xl backdrop-blur-md">
              <div className="max-h-[500px]">
                <img
                  src="../../ecosystem/app.png"
                  alt=""
                  className="h-full w-full transform object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <Link
                  href="/"
                  className="text-bannerGradientStart text-center text-lg"
                >
                  scan.dexchain.com
                </Link>
                <div className="text-center text-lg">Block Explorer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
