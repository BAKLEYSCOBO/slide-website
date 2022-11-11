import React from "react";
import Navbar from "./NavbarArtist";
import HeroArtist from "./HeroArtist";
import OurArtist from "./OurArtist";
import FooterArtist from "./FooterArtist";
import Footer from "./FooterArtist";
import { motion } from "framer-motion";

const ArtistPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 1}}
    >
      <Navbar />
      <HeroArtist />
      <OurArtist />
      <FooterArtist />
    </motion.div>
  );
};

export default ArtistPage;
