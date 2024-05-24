/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import GreenButton from "~/components/GreenButton";
import { Bars2Icon } from "@heroicons/react/24/outline";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface ScrollContextType {
  elementsRefs: Record<string, React.RefObject<HTMLDivElement>>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash
      : "#home",
  );

  const homeRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const dexNodeRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  const elementsRefs: Record<string, React.RefObject<HTMLDivElement>> = useMemo(
    () => ({
      homeRef: homeRef,
      advantagesRef: advantagesRef,
      dexNodeRef: dexNodeRef,
      ecosystemRef: ecosystemRef,
      communityRef: communityRef,
      partnersRef: partnersRef,
    }),
    [],
  );

  const hashValues = [
    "#home",
    "#advantages",
    "#dexNode",
    "#ecosystem",
    "#community",
    "#partners",
  ];

  useEffect(() => {
    const initialScroll = () => {
      const currentHash = window.location.hash || "#home";
      const refKey = currentHash.slice(1) + "Ref";
      elementsRefs[refKey]?.current?.scrollIntoView({ behavior: "smooth" });
    };
    initialScroll();
  }, [elementsRefs]);

  const handleClick = (hashValue: string) => {
    const refKey = hashValue.slice(1) + "Ref";
    if (elementsRefs[refKey]?.current) {
      elementsRefs[refKey]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const hash = `#${entry.target.id}`;
          setCurrentHash(hash);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    Object.values(elementsRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(elementsRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elementsRefs]);
  return (
    <div className="">
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden font-exo text-white">
        <div className="fixed left-16 top-[calc(50vh-150px)] z-40 hidden justify-items-center space-y-8 md:grid">
          {hashValues.map((hashValue) => (
            <div key={hashValue} className="mt-20">
              <div
                id={hashValue.slice(1)}
                onClick={() => {
                  handleClick(hashValue);
                }}
                className={`cursor-pointer rounded-full ${currentHash === hashValue ? "h-4 w-4 bg-movingGlow shadow-elementGlow3" : "h-2 w-2 bg-white"}`}
              ></div>
            </div>
          ))}
        </div>
        <div className="fixed -top-32 left-0 z-0 h-64 w-64 rotate-45 animate-horizontalFloat md:-top-60 md:h-96 md:w-96 md:animate-horizontalFloatPartial ">
          <div className="h-full w-full rotate-[35deg] bg-movingGlow blur-[100px] md:blur-[130px]"></div>
        </div>
        <div className="fixed z-50 mt-4 flex h-14 w-11/12 items-center justify-between rounded-xg bg-glassTexture px-4 backdrop-blur-xl md:h-20 md:w-full md:max-w-7xl">
          <Link href="/" className="">
            <img src="../../logo.png" alt="" className="w-36 md:w-auto" />
          </Link>
          <div className="flex space-x-6">
            <div
              onClick={() => {
                handleClick("#home");
              }}
              className={`hidden cursor-pointer ease-in-out hover:text-bannerGradientStart md:block`}
            >
              Main
            </div>
            <div
              onClick={() => {
                handleClick("#advantages");
              }}
              className={`hidden cursor-pointer ease-in-out hover:text-bannerGradientStart md:block`}
            >
              Advantages
            </div>
            <div
              onClick={() => {
                handleClick("#dexNode");
              }}
              className={`hidden cursor-pointer ease-in-out hover:text-bannerGradientStart md:block`}
            >
              How to start
            </div>
            <div
              onClick={() => {
                handleClick("#ecosystem");
              }}
              className={`hidden cursor-pointer ease-in-out hover:text-bannerGradientStart md:block`}
            >
              Ecosystem
            </div>
            <div
              onClick={() => {
                handleClick("#community");
              }}
              className={`hidden cursor-pointer ease-in-out hover:text-bannerGradientStart md:block`}
            >
              Community
            </div>
            <div
              onClick={() => {
                handleClick("#partners");
              }}
              className={`hidden cursor-pointer ease-in-out hover:text-bannerGradientStart md:block`}
            >
              Become a partner
            </div>
          </div>
          <GreenButton
            text={"Connect Wallet"}
            className="hidden w-48 md:block"
          />
          <Bars2Icon className="block h-7 w-7 md:hidden" />
        </div>
        <img
          src="../../backgroundPng.png"
          alt="background"
          className="fixed -z-10 h-full w-full object-cover"
        />
        <ScrollContext.Provider value={{ elementsRefs }}>
          {children}
        </ScrollContext.Provider>
      </div>
    </div>
  );
};

export default PageWrapper;

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
