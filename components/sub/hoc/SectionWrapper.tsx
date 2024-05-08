import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

// Import styles and staggerContainer from their respective paths
import { styles } from '../../../styles';
import { staggerContainer } from '../utils/motion';

interface SectionWrapperProps {
  Component: React.ComponentType<any>; // Define Component as a React component type
  idName: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ Component, idName }) => {
  // Define variants for motion.section
  const variants: Variants = staggerContainer(0.2, 0.1);


  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {/* Render the Component passed to SectionWrapper */}
      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
