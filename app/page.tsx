import Image from 'next/image'

import bgImage from "../public/body_bg.jpg"
import { hero } from "./lib/data";
import Hero from './lib/ui/hero';
import BannerAd from './lib/ui/BannerAd';
import SideBar from './lib/ui/SideBar';

import { glassAntique, libreFranklin } from './lib/ui/fonts';



export default function Home() {
  return (
    <div className='flex'>
      {/* <BannerAd/> */}
      <SideBar/>
      <main className='z-90'>
        <Hero content={hero} test={"this is a test prop"}/>
        <Image 
          src={bgImage}  
          alt='Photo of the author'
          quality={100}
          height={10000}
          sizes="100vw"
        />
      </main>
    </div>
  )
}
