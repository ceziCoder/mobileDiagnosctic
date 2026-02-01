
import MovingBorder from '../components/moving-border.jsx';
import { Button } from '../components/moving-border'
import { SparklesCore } from "../components/sparkles"
import { BackgroundGradientAnimation } from "../components/background-gradient-animation"
import { VortexDemoSecond } from "../components/vortex"
import { PixelatedCanvas } from "../components/pixelated-canvas"
import img1 from '../public/7-.jpg'
import React from 'react';
import { useMemo } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/animated-modal.jsx";
import { motion } from "motion/react";
import image1 from '../public/4-.jpg';
import image2 from '../public/2-.jpg';
import image3 from '../public/3-.jpg';
import image4 from '../public/5-.jpg';
import image5 from '../public/7-.jpg';
import image8 from '../public/8.jpg';
import image9 from '../public/9.jpg';
import image10 from '../public/12.jpg';
import image11 from '../public/13.jpg';
import i1 from '../public/1.png';
import i2 from '../public/2.png';
import i3 from '../public/3.png';
import i4 from '../public/4.png';
import i5 from '../public/5.png';
import i6 from '../public/6.png';
import i7 from '../public/7.png';
import i8 from '../public/8.png';
import i9 from '../public/9.png';
import i10 from '../public/10.png';
import i11 from '../public/11.png';
import i12 from '../public/12.png';
import i13 from '../public/13.png';
import i14 from '../public/14.png';
import i15 from '../public/15.png';
import i16 from '../public/16.png';
import i17 from '../public/17.png';
import i18 from '../public/18.png';
import i19 from '../public/19.png';
import i20 from '../public/20.png';
import i21 from '../public/21.png';
import i22 from '../public/22.png';
import i23 from '../public/23.png';
import i24 from '../public/24.png';
import i25 from '../public/25.png';

import { FaTools } from 'react-icons/fa';
import { ColourfulText } from '../components/colourful-text.jsx';
import { NoiseBackground1 } from "../components/noise-background1.jsx";
import { NoiseBackground2 } from "../components/noise-background2.jsx";
import { NoiseBackground3 } from "../components/noise-background3.jsx";
import { HoverBorderGradient } from '../components/hover-border-gradient.jsx';


const bgImages = [
  i1, i2, i3, i4, i5,
  i6, i7, i8, i9, i10,
  i11, i12, i13, i14, i15,
  i16, i17, i18, i19, i20,
  i21, i22, i23, i24, i25
];


const useRandomImages = (count = 20) => {
  return useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      src: bgImages[Math.floor(Math.random() * bgImages.length)],
      top: Math.random() * 100,
      left: Math.random() * 110,
      rotate: Math.random() * 40 - 20,
      opacity: Math.random() * 0.4 + 0.6,
      scale: Math.random() * 0.05 + 0.08,
    }));
  }, [count]);
};

const DTC_CODES = [
  "P0100", "P0101", "P0171", "P0172",
  "P0300", "P0301", "P0401",
  "P0420", "P0500",
  "P0562", "P0606",
  "U0100", "U0121",
];

const useRandomDTC = (count = 30) => {
  return useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      code: DTC_CODES[Math.floor(Math.random() * DTC_CODES.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 40 - 20,
      opacity: Math.random() * 0.1 + 0.4,
      scale: Math.random() * 0.1 + 0.7,
    }));
  }, []);
};




const images = [
  {
    src: image9,
    description: "Launch",
  },
  {
    src: image2,
    description: "Launch",
  },
  {
    src: image3,
    description: "Autel  Xhorse",
  },
  {
    src: image4,
    description: "Xhorse",
  },
  {
    src: image5,
    description: "Launch",
  },
  {
    src: image8,
    description: "Xhorse",
  },
  {
    src: image1,
    description: "Launch",
  },
  {
    src: image10,
    description: "Launch",
  },
  {
    src: image11,
    description: "Micsig",
  },
];


export const Main = () => {

  const dtcItems = useRandomDTC(40);
  const bgItems = useRandomImages(25);
  return (
    <>



      <div className="relative  min-h-screen w-full flex flex-col items-start overflow-x-hidden">


        <div className="fixed inset-0 -z-10">
          <PixelatedCanvas
            src={image9}
            width={window.innerWidth}
            height={window.innerHeight}
            cellSize={3}
            dotScale={0.9}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0.1}
            interactive={false}
            distortionStrength={0.1}
            distortionRadius={200}
            distortionMode="repel"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={1}
            sampleAverages
            objectFit="cover"
            className="w-full h-full "
          />
        </div>



        <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
          {dtcItems.map(item => (
            <motion.div
              key={item.id}
              className="absolute font-mono text-xs md:text-sm text-white/70 dark:text-white/50"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                rotate: item.rotate,
                opacity: item.opacity,
                scale: item.scale,
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.code}
            </motion.div>
          ))}
        </div>
        <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
          {bgItems.map(item => (
            <motion.img
              key={item.id}
              src={item.src}
              alt=""
              className="absolute select-none"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                rotate: item.rotate,
                opacity: item.opacity,
                scale: item.scale,
              }}
              animate={{
                y: [0, -20, 0],

              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="  flex justify-center items-center  z-10  ">
          <h1 className="text-lg m-2  md:text-4xl lg:text-4xl font-bold text-center text-black relative z-2 font-sans">
            <ColourfulText text="Mobilna diagnostyka samochodowa " /> <br />
          </h1>
        </div>

                                          {/* FIRST MODAL*/}
        <Modal>

          <ModalTrigger className="bg-transparent  dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">

            <div className="flex  justify-center">
              <NoiseBackground1
                containerClassName="w-fit   md:p-4 rounded-full "
                noiseIntensity={0.01}
                speed={0.4}
                backdropBlur={true}
                animating={true}
                gradientColors={[
                  "rgb(255, 10, 150)",
                  "rgb(100, 150, 255)",
                  "rgb(255, 200, 100)",
                ]}
              >
                <button className="
                  h-full w-full cursor-pointer
                  rounded-full
                  px-3 py-1 text-sm
                  sm:px-4 sm:py-2 sm:text-base
                  bg-linear-to-r from-neutral-100 via-neutral-100 to-white
                  text-black
                  shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)]
                  transition-all duration-100
                  active:scale-98
                  dark:from-black dark:via-black dark:to-neutral-900
                  dark:text-white
                  dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]
                  ">
                  narzedzia
                </button>
              </NoiseBackground1>
            </div>

          </ModalTrigger>
          <ModalBody>
            <ModalContent className="overflow-auto h-[100%]  ">

              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-2 w-full px-2 sm:px-0 ">

                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 + 12,
                    }}
                    whileHover={{
                      scale: 1.5,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 2.0,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl mt-4 mr-30 md:-mr-4 p-1 mb-8 bg-white dark:bg-neutral-800 overflow-hidden max-w-full max-h-full"
                  >
                    <img
                      src={image.src}
                      alt=""
                      width="800"
                      height="800"
                      className="rounded-lg h-[12rem] w-[12rem] md:h-40 md:w-40 object-cover flex-shrink-0 select-none pointer-events-none"
                    />
                    <h6 className="text-neutral-700 dark:text-neutral-300 text-center mt-2 text-sm">
                      {image.description}
                    </h6>
                  </motion.div>
                ))}
              </div>

            </ModalContent>
          </ModalBody>
                                       {/* SECOUND MODAL*/}
          <Modal>
            <ModalTrigger className="bg-transparent dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">
              <div className='flex justify-center'>
              <NoiseBackground2
                containerClassName="w-fit md:p-4 rounded-full"
                noiseIntensity={0.02}
                speed={0.2}
                backdropBlur={true}
                animating={true}
              >
                  <button className="   h-full w-full cursor-pointer
                  rounded-full
                  px-5 sm:px-6 py-1 text-sm
                   sm:py-2 sm:text-base  bg-black/50 text-white dark:bg-black dark:text-white">
                  Diagnostyka
                </button>
              </NoiseBackground2>
              </div>
            </ModalTrigger>

            <ModalBody className="overflow-hidden">
              <ModalContent className="max-h-[90vh] overflow-y-auto px-4 py-6">

                {/* KARTA */}
                <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm">

                  <div className="px-6 py-6 text-white font-sans">

                    <h2 className="
            text-2xl md:text-3xl font-extrabold mb-4 text-center
            bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-300
            bg-clip-text text-transparent">
                      Diagnostyka komputerowa – odczyt błędów i parametrów rzeczywistych
                    </h2>

                    <p className="text-sm md:text-base text-white/80 mb-6 text-center">
                      Mobilna diagnostyka samochodowa oparta na{" "}
                      <span className="text-cyan-300 font-semibold">realnych danych z ECU</span>,
                      a nie zgadywaniu i wymianie części na ślepo.
                    </p>

                    <div className="space-y-6 text-sm md:text-base text-white/85">

                      <div>
                        <h3 className="font-semibold mb-2 text-cyan-300">
                          Zakres usługi (etap początkowy)
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/80">
                          <li><span className="text-white">Odczyt błędów</span> ECU= 50zl</li>
                          <li><span className="text-white">Kasowanie błędów</span></li>
                          <li><span className="text-white">Parametry rzeczywiste</span></li>
                          <li><span className="text-white">Wstępna analiza</span></li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 text-blue-300">
                          Czym są parametry rzeczywiste?
                        </h3>
                        <p className="text-white/80">
                          Dane live z ECU: korekty paliwowe, lambda, MAF, MAP,
                          temperatura, kąt zapłonu i pozycja przepustnicy.
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-5">
                        <h3 className="font-semibold mb-3 text-purple-300">
                          Przykład diagnostyki – wysoka lambda
                        </h3>

                        <p className="text-white/80 mb-3">
                          <span className="font-semibold text-purple-300">Objawy:</span><br />
                          – wysokie korekty paliwowe<br />
                          – mieszanka uboga<br />
                          – ECU wydłuża wtrysk
                        </p>

                        <p className="text-white/80">
                          <span className="font-semibold text-purple-300">Wniosek:</span><br />
                          Najczęściej dolot, MAF lub ciśnienie paliwa – nie sonda.
                        </p>
                      </div>
                      <h3 className="font-semibold mb-3 text-purple-100">
                        kontakt : mobilnadiagnostyka@zohomail.eu
                      </h3>

                      <p className="text-center text-md pt-4 text-red-400">
                        Diagnostyka to analiza danych – nie zgadywanie !!!!!!.
                      </p>

                    </div>
                  </div>
                </div>

              </ModalContent>
            </ModalBody>
          </Modal>
        </Modal>
                                        {/* THIRD MODAL */}
        <Modal>
          <ModalTrigger className="bg-transparent dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">
            <div className='flex justify-center'>
              <NoiseBackground3
                containerClassName="w-fit md:p-4 rounded-full"
                noiseIntensity={0.02}
                speed={0.2}
                backdropBlur={true}
                animating={true}
              >
                <button className="   h-full w-full cursor-pointer
                  rounded-full
                  px-5 sm:px-6 py-1 text-sm
                   sm:py-2 sm:text-base  bg-black/50 text-white dark:bg-black dark:text-white">
                  Dorabianie kluczy
                </button>
              </NoiseBackground3>
            </div>
          </ModalTrigger>

          <ModalBody className="overflow-hidden">
            <ModalContent className="max-h-[90vh] overflow-y-auto px-4 py-6">

              {/* KARTA */}
              <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm">

                <div className="px-6 py-6 text-white font-sans">

                  <h2
                    className="
    text-2xl md:text-3xl font-extrabold mb-4 text-center
    bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-300
    bg-clip-text text-transparent"
                  >
                    Dorabianie kluczy samochodowych – immobilizer i pilot
                  </h2>

                  <p className="text-sm md:text-base text-white/80 mb-6 text-center">
                    Profesjonalne dorabianie i programowanie kluczy na{" "}
                    <span className="text-cyan-300 font-semibold">oryginalnych danych immobilizera</span>,
                    bez zgadywania i bez ryzyka blokady ECU.
                  </p>

                  <div className="space-y-6 text-sm md:text-base text-white/85">

                    <div>
                      <h3 className="font-semibold mb-2 text-cyan-300">
                        Zakres usługi
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-white/80">
                        <li><span className="text-white">Dorabianie kluczy</span> z immobilizerem</li>
                        <li><span className="text-white">Programowanie pilota</span> centralnego zamka</li>
                        <li><span className="text-white">Adaptacja transponderów</span> ID / PCF</li>
                        <li><span className="text-white">Kasowanie zgubionych kluczy</span> z pamięci ECU</li>
                        <li><span className="text-white">Obsługa OBD lub EEPROM</span> (jeśli wymagane)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-blue-300">
                        Jakimi narzędziami pracuję?
                      </h3>
                      <p className="text-white/80">
                        <span className="text-blue-300 font-semibold">Xhorse</span> – klucze, transpondery, EEPROM<br />
                        <span className="text-blue-300 font-semibold">Launch</span> – programowanie kluczy OBD<br />
                        <span className="text-blue-300 font-semibold">Autel</span> – IMMO, adaptacje, synchronizacje
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-5">
                      <h3 className="font-semibold mb-3 text-purple-300">
                        Co jest potrzebne?
                      </h3>

                      <p className="text-white/80 mb-3">
                        – sprawny kluczyk lub karta (jeśli dostępna)<br />
                        – dokument potwierdzający własność pojazdu<br />
                        – dostęp do pojazdu (mobilnie)
                      </p>

                      <p className="text-white/80">
                        <span className="font-semibold text-purple-300">Uwaga:</span><br />
                        W niektórych modelach wymagany jest odczyt pamięci
                        (BCM / ECU / EZS) – informuję przed wykonaniem usługi.
                      </p>
                    </div>

                    <h3 className="font-semibold mb-3 text-purple-100">
                      kontakt: mobilnadiagnostyka@zohomail.eu
                    </h3>

                    <p className="text-center text-md pt-4 text-red-400">
                      Klucze i immobilizer to dane – nie eksperymenty.
                    </p>

                  </div>


                </div>
              </div>

            </ModalContent>
          </ModalBody>
        </Modal>

      </div>




    </>
  )
}

{/*














     <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      </div>













               <Button borderRadius="1rem"
                  className="p-1 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <span className="group-hover/modal-btn:translate-x-40 text-center text-s transition duration-500 shadow-sm ">

                      Moje narzędzia

                  </span>

                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute top-0  transition duration-500 text-white z-20">
                  <FaTools size={25} color="black" style={{marginTop: '8px'}}/>
                  </div>
                </Button>



















  */ }