
import MovingBorder from '../components/moving-border.jsx';
import { Button } from '../components/moving-border'
import { SparklesCore } from "../components/sparkles"
import { BackgroundGradientAnimation } from "../components/background-gradient-animation"
import { VortexDemoSecond } from "../components/vortex"
import { PixelatedCanvas } from "../components/pixelated-canvas"
import img1 from '../public/7-.jpg'
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
import { FaTools } from 'react-icons/fa';
import { ColourfulText } from '../components/colourful-text.jsx';

const images = [
  {
    src: image1,
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
  }
];


export const Main = () => {
  return (
    <>


      <div className="py-2 mx-5 flex justify-end items-start overflow-hidden " >
        <div className="absolute top-20 left-30 transform -translate-x-1/2 z-10">
        <h1 className="text-2xl  md:text-4xl lg:text-4xl font-bold text-center text-black relative z-2 font-sans">
       Mobilna   <ColourfulText text=" diagnostyka" />
          </h1>
        </div>
            <Modal>

              <ModalTrigger className="bg-transparent  dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">
                <Button borderRadius="1.5rem"
                  className="p-1 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <span className="group-hover/modal-btn:translate-x-40 text-center text-s transition duration-500 shadow-sm ">

                      My toolkit

                  </span>

                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute top-0  transition duration-500 text-white z-20">
                  <FaTools size={25} color="black" style={{marginTop: '8px'}}/>
                  </div>
                </Button>
              </ModalTrigger>
              <ModalBody>
                <ModalContent className="overflow-auto h-[100%]  ">

              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-2 w-full px-2 sm:px-0">

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
                        className="rounded-xl mt-4 mr-40 md:-mr-4 p-1 mb-8 bg-white dark:bg-neutral-800 overflow-hidden max-w-full max-h-full"
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
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

              </div>

          </div>

      <div className="mx-auto mt-8 flex w-full items-center justify-center">
        <PixelatedCanvas
          src={img1}
          width={800}
          height={600}
          cellSize={4}
          dotScale={0.8}
          shape=" attract"
          backgroundColor="#0000000"
          dropoutStrength={0.1}
          interactive
          distortionStrength={0.1}
          distortionRadius={200}
          distortionMode="repel"
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={1}
          sampleAverage
          className="rounded-xl shadow-lg"
        />
      </div>
      </>
  )
}