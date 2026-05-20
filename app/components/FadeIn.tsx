'use client'; // Framer Motion nécessite l'exécution côté client

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Définition des variantes pour l'animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 }, // Position de départ : invisible et légèrement vers le bas
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1], // Un cubic-bezier pour un effet "smooth"
    } 
  },
};

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Permet de décaler l'animation pour un effet cascade
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden" // État initial au chargement
      animate="visible" // État à atteindre
      transition={{ delay }} // Applique le délai spécifié
    >
      {children}
    </motion.div>
  );
}