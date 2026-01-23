
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
        <div className="relative z-20 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">

          {/* WARSTWA TŁA */}
          <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" />

          {/* TREŚĆ */}
          <div className="relative px-6 py-6 text-white font-sans">

            {/* GŁÓWNY NAGŁÓWEK */}
            <h2 className="
      text-2xl md:text-3xl font-extrabold mb-4 text-center
      bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-300
      bg-clip-text text-transparent
    ">
              Diagnostyka komputerowa – odczyt błędów i parametrów rzeczywistych
            </h2>

            {/* LEAD */}
            <p className="text-sm md:text-base text-white/80 mb-6 text-center">
              Mobilna diagnostyka samochodowa oparta na{" "}
              <span className="text-cyan-300 font-semibold">realnych danych z ECU</span>,
              a nie zgadywaniu i wymianie części na ślepo.
            </p>

            <div className="space-y-6 text-sm md:text-base text-white/85">

              {/* ZAKRES */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Zakres usługi (etap początkowy)
                </h3>

                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li><span className="text-white">Odczyt błędów</span> sterownika silnika (ECU)</li>
                  <li><span className="text-white">Kasowanie błędów</span> – jeśli usterka na to pozwala</li>
                  <li><span className="text-white">Parametry rzeczywiste</span> podczas pracy silnika</li>
                  <li><span className="text-white">Wstępna analiza</span> możliwej przyczyny problemu</li>
                </ul>
              </div>

              {/* PARAMETRY */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-blue-300">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Czym są parametry rzeczywiste?
                </h3>

                <p className="text-white/80">
                  Są to dane odczytywane na żywo przez sterownik silnika, takie jak{" "}
                  <span className="text-blue-300 font-semibold">korekty paliwowe</span>,{" "}
                  <span className="text-blue-300 font-semibold">lambda</span>,{" "}
                  <span className="text-blue-300 font-semibold">MAF</span>,{" "}
                  <span className="text-blue-300 font-semibold">MAP</span>, temperatura,
                  kąt zapłonu i pozycja przepustnicy.
                </p>
              </div>

              {/* PRZYKŁAD */}
              <div className="border-t border-white/10 pt-5">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Przykład diagnostyki – wysoka lambda
                </h3>

                <p className="text-white/80 mb-3">
                  <span className="text-purple-300 font-semibold">Objawy w parametrach:</span><br />
                  – <span className="text-white">wysokie korekty paliwowe</span><br />
                  – mieszanka uboga<br />
                  – ECU wydłuża czas wtrysku
                </p>

                <p className="text-white/80">
                  <span className="text-purple-300 font-semibold">Wniosek diagnostyczny:</span><br />
                  Sterownik kompensuje problem, który bardzo często nie leży w sondzie,
                  lecz w <span className="text-white">dolocie</span>,
                  <span className="text-white"> MAF</span> lub
                  <span className="text-white"> ciśnieniu paliwa</span>.
                </p>
              </div>

              {/* STOPKA */}
              <p className="text-center text-xs pt-4 text-white/60">
                Diagnostyka to analiza danych – nie zgadywanie i niepotrzebna wymiana części.
              </p>

            </div>
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