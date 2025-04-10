import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitterSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareYoutube, FaSquareGithub } from "react-icons/fa6";
import Buttons from "./button";
import Image from "../assets/profile1.jpg";

export default function Profile() {
  // Function to handle the active section state and the go back functionality
  const [ActiveSection, setActiveSection] = useState("main");
  const GoBack = () => setActiveSection("main");

  return (
    // Main container with background and layout
    <div className="border-2 border-primary p-8 rounded-lg flex flex-col justify-center items-center gap-8 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
            >
              <img
                src={Image}
                alt="logo"
                className="mx-auto w-[150px] h-[150px] lg:w-[225px] lg:h-[225px] object-cover rounded-lg lg:border-[20px] border-[10px] border-primary"
              />

              <hr className="border-b-2 mt-10 mb-8 w-full border-primary" />

              <ul className="text-primary mt-4 text-lg font-bold">
                <li>She/Her</li>
                <li>Aspiring Programmer</li>
                <li>INTJ</li>
                <li>Philippines</li>
              </ul>

              <hr className="border-b-2 mt-10 mb-8 w-full border-primary" />

              <nav className="flex justify-center items-center gap-4 text-3xl text-primary">
                <div className="text-primary flex justify-center items-center gap-4">
                  <a
                    href="https://x.com/Itsjeanne_8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <FaTwitterSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/watusiyaaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <TiSocialInstagram />
                  </a>
                  <a
                    href="https://youtube.com/@jinnnn_8?si=vPykWkvR5aQ9rzZC"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                  >
                    <FaSquareYoutube />
                  </a>
                  <a
                    href="https://github.com/watusiyaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    <FaSquareGithub />
                  </a>
                </div>
              </nav>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-l-2 p-1 min-h-[510px] ml-5 mr-5 border-primary" />

        {/* Right Section */}
        <div className="text-center">
          <AnimatePresence mode="wait">
            {ActiveSection === "main" && (
              <motion.div
                key="main"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl text-primary font-bold">WATUSIYAAA</h1>
                <p className="text-primary text-lg">
                  Hi! Call Me <span className="font-bold">Jini!</span>
                </p>

                <hr className="border-b-2 mt-7 mb-8 w-full border-primary" />

                <div className="flex flex-col gap-4">
                  <Buttons
                    text="Likes and dislikes"
                    onClick={() => setActiveSection("likes")}
                  />
                  <Buttons
                    text="DM and Pings"
                    onClick={() => setActiveSection("dms")}
                  />
                  <Buttons
                    text="Stanlist...kinda?"
                    onClick={() => setActiveSection("stan")}
                  />
                  <Buttons
                    text="Want to Friend Request?"
                    onClick={() => setActiveSection("rq")}
                  />
                  <a
                    href="https://docs.google.com/document/d/1YFiF8b5e61wFeGdCMEhHZaWRU2v-a0qE-iOzZ7d9vzo/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Buttons text="Card List (Dani Bot)" />
                  </a>
                </div>
              </motion.div>
            )}

            {ActiveSection === "likes" && (
              <motion.div
                key="likes"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-primary">
                  Likes & Dislikes
                </h1>

                <hr className="border-b-2 mt-7 mb-8 w-full border-primary" />

                <p className="text-primary">
                  <span className="font-bold text-2xl">Likes:</span>
                  <br />
                  <span className="italic underline text-lg">Food:</span>{" "}
                  Chocolates, Ice Cream, Noodles (any form of cooking them),
                  <br /> Fish, Fruits and Veggies (mostly)
                  <br />
                  <span className="italic underline text-lg">Movies:</span>{" "}
                  Anime, C-Dramas (mostly ancient China themed), and some <br />
                  K-Dramas, Action, Documentary
                  <br />
                  <span className="italic underline text-lg">
                    Music Genre:
                  </span>{" "}
                  Pop, Kpop, Jpop, Rap, Hiphop, R&B, Alternative, <br />
                  Alternative R&B, Ballad, Indie, Neo Soul
                  <br />
                  <br />
                  <span className="font-bold text-2xl">Dislikes:</span>
                  <br />
                  <span className="italic underline text-lg">Food:</span> I
                  really only hate eggplants and raw garlic (i like the flavored
                  one
                  <br /> though) also any food that is weird (but that's given
                  tbh so lol)
                  <br />
                  <span className="italic underline text-lg">Movies:</span>{" "}
                  Horror. and Live-Actions (not all of them ofc)
                  <br />
                  <span className="italic underline text-lg">
                    Music Genre:
                  </span>{" "}
                  EDM, Metal Rock. Basically noise music (i know some people{" "}
                  <br />
                  like it but not really a fan sorry)
                  <br />
                </p>

                <div className="relative w-full h-20">
                  <button
                    onClick={GoBack}
                    className="absolute bottom-0 right-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-tertiary hover:text-secondary transition"
                  >
                    Go Back
                  </button>
                </div>
              </motion.div>
            )}

            {ActiveSection === "dms" && (
              <motion.div
                key="dms"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-primary">
                  DM and Pings
                </h1>

                <hr className="border-b-2 mt-7 mb-8 w-full border-primary" />

                <p className="text-primary">
                  <span className="italic underline text-lg">DMs:</span> No DMs
                  unless its really important. I dont really entertain
                  <br /> people if the DM is not that important (except for
                  friends ofc)
                  <br />
                  <br />
                  <span className="italic underline text-lg">Pings:</span> Only
                  ping me if its important as well (like card <br />
                  trade/buy or bug fix). But I still entertain even if it isn't
                  though.
                </p>

                <div className="relative w-full h-20">
                  <button
                    onClick={GoBack}
                    className="absolute bottom-0 right-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-tertiary hover:text-secondary transition"
                  >
                    Go Back
                  </button>
                </div>
              </motion.div>
            )}

            {ActiveSection === "stan" && (
              <motion.div
                key="stan"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-primary">
                  Stanlist...kinda?
                </h1>

                <hr className="border-b-2 mt-7 mb-8 w-full border-primary" />

                <p className="text-primary">
                  ....i do have a few tbh. Reason is I'm more into music outside
                  kpop nowadays <br />
                  so the groups that i listen have lessen so much
                  <br />
                  <br />
                  <span className="italic underline text-lg">
                    Ult:
                  </span> NJZ{" "}
                  <span className="text-xs">
                    (i mean what can i say? this should be obvious already XD)
                  </span>
                  <br />
                  <span className="italic underline text-lg">Stan:</span> 2NE1,
                  Blackpink, XG, aespa, Bigbang
                  <br />
                  <span className="italic underline text-lg">Casual:</span> Ive,
                  Seventeen, Boynextdoor, Riize <br />
                  <span className="italic underline text-lg">
                    Soloist:
                  </span>{" "}
                  Olivia Marsh, Jennie, G-Dragon, Woozi, IU, Rosé, CL
                  <br />
                  <br />
                  <span className="italic underline text-lg">
                    Outside kpop:
                  </span>{" "}
                  The Internet, Kendrick Lamar, Tyler the Creator, SZA, Doechii,{" "}
                  <br />
                  Sabrina Carpenter, Laufey, Chapell Roan, 5SOS, Bruno Mars,
                  Joji, Vaundy, King Gnu
                  <br />
                  Aimer, LiSA, YOASOBI, Yorushika, SawanoHiroyuki[nZk], Hikaru
                  Utada
                </p>

                <div className="relative w-full h-20">
                  <button
                    onClick={GoBack}
                    className="absolute bottom-0 right-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-tertiary hover:text-secondary transition"
                  >
                    Go Back
                  </button>
                </div>
              </motion.div>
            )}

            {ActiveSection === "rq" && (
              <motion.div
                key="friend"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-primary">
                  Want to Friend Request?
                </h1>

                <hr className="border-b-2 mt-7 mb-8 w-full border-primary" />

                <p className="text-primary italic text-2xl">
                  I dont accept Friend Request espescially if I dont know that
                  person
                  <br /> entirely. I'll accept if I know you already and I can
                  trust you (at least)
                  <br />
                  <br />
                  As for if I send a request to you, I never sent request unless{" "}
                  <br />I need to DM you regarding something (like important
                  things
                  <br />i dont send if i just need help)
                </p>

                <div className="relative w-full h-20">
                  <button
                    onClick={GoBack}
                    className="absolute bottom-0 right-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-tertiary hover:text-secondary transition"
                  >
                    Go Back
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
