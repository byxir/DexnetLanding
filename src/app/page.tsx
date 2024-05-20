import Link from "next/link";
import GreenButton from "~/components/GreenButton";

export default function HomePage() {
  return (
    <div className="relative flex h-screen w-screen justify-center overflow-x-hidden">
      <img
        src="../../chip.png"
        alt=""
        className="absolute -top-[25%] left-[17%] h-[160vh] w-[160vw] object-cover"
      />
      <div className="mt-48 w-full max-w-7xl">
        <div className="text-8xl font-bold">DexNetChain</div>
        <div className="mt-8 w-96 text-xl font-bold">
          EVM compatible blockchain powered by confirmation of authority (PoA)
        </div>
        <GreenButton text={"Connect Wallet"} className="mt-8 w-48" />
      </div>
    </div>
  );
}
