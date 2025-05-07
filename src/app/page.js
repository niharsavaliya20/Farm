import Image from "next/image";
import Hero from "./section/hero";
import Core from "./section/core";
import Special from "./section/special";
import Outcome from "./section/outcome";
import Photos from "./section/photos";

export default function Home() {
  return (
  <>
  
     <Hero/>
     <Photos/>
     <Core/>
     <Special/>
     <Outcome/>

  </>
  );
}
