
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
import { FaTools } from 'react-icons/fa';
import { ColourfulText } from '../components/colourful-text.jsx';
import { NoiseBackground } from "../components/noise-background.jsx";


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
      opacity: Math.random() * 0.4 + 0.3,
      scale: Math.random() * 0.6 + 0.6,
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
];


export const Main = () => {

  const dtcItems = useRandomDTC(40);
  return (
    <>



      <div className="relative  min-h-screen w-full flex flex-col items-center overflow-x-hidden">


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

        <div className="  flex justify-center items-center  z-10  ">
        <h1 className="text-lg  md:text-4xl lg:text-4xl font-bold text-center text-black relative z-2 font-sans">
               <ColourfulText text="Mobilna diagnostyka samochodowa "   /> <br/>
          </h1>
        </div>
            <Modal>

            <ModalTrigger className="bg-transparent  dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">

            <div className="flex  justify-center">
              <NoiseBackground
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
              </NoiseBackground>
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
                          className="rounded-lg h-[12rem] w-[12rem] md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                        <h6 className="text-neutral-700 dark:text-neutral-300 text-center mt-2 text-sm">
                          {image.description}
                        </h6>
                      </motion.div>
                    ))}
                  </div>

                </ModalContent>
              </ModalBody>

        </Modal>
        <div className="relative z-20 max-w-4xl mx-auto  px-6 py-6
  rounded-2xl
  bg-black/30 backdrop-blur-xl
  border border-white/10
  text-white font-sans">

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Diagnostyka komputerowa – odczyt błędów i parametrów rzeczywistych
          </h2>

          <p className="text-sm md:text-base text-white/80 mb-4 text-center">
            Mobilna diagnostyka samochodowa oparta na realnych danych z ECU, a nie zgadywaniu i wymianie części na ślepo.
          </p>

          <div className="space-y-4 text-sm md:text-base text-white/85">

            <div>
              <h3 className="font-semibold text-white mb-1">
                Zakres usługi (etap początkowy):
              </h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>odczyt błędów sterownika silnika (ECU)</li>
                <li>kasowanie błędów – jeśli usterka na to pozwala</li>
                <li>podgląd parametrów rzeczywistych podczas pracy silnika</li>
                <li>wstępna analiza i wskazanie możliwej przyczyny problemu</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">
                Czym są parametry rzeczywiste?
              </h3>
              <p className="text-white/80">
                Są to dane odczytywane na żywo przez sterownik silnika, m.in. korekty paliwowe,
                lambda, przepływ powietrza (MAF), ciśnienie w kolektorze (MAP),
                temperatury, kąt zapłonu i pozycja przepustnicy.
                Ich analiza bardzo często pozwala znaleźć usterkę nawet wtedy,
                gdy w sterowniku nie ma zapisanych błędów.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="font-semibold text-white mb-1">
                Przykład diagnostyki – wysoka lambda, ECU podaje dużo paliwa
              </h3>

              <p className="text-white/80 mb-2">
                <span className="font-semibold text-white">Objawy w parametrach:</span><br />
                – wysokie korekty paliwowe (np. +20–30%)<br />
                – lambda wskazuje mieszankę ubogą<br />
                – ECU wydłuża czas wtrysku
              </p>

              <p className="text-white/80 mb-2">
                <span className="font-semibold text-white">Co to oznacza:</span><br />
                Sterownik „widzi” za dużo tlenu w spalinach, więc próbuje skorygować mieszankę,
                dodając coraz więcej paliwa.
              </p>

              <p className="text-white/80">
                <span className="font-semibold text-white">Możliwe przyczyny:</span><br />
                – nieszczelność dolotu (lewe powietrze)<br />
                – zaniżony odczyt przepływomierza MAF<br />
                – uszkodzona lub zakłamująca sonda lambda<br />
                – nieszczelny wydech przed sondą<br />
                – zbyt niskie ciśnienie paliwa
              </p>
            </div>

            <p className="text-center text-white/70 text-xs pt-4">
              Diagnostyka to analiza danych – nie zgadywanie i niepotrzebna wymiana części.
            </p>

          </div>
        </div>



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