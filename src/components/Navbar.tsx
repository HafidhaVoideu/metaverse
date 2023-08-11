import search from "../assets/search.svg";
import menu from "../assets/menu.svg";

import { motion } from "framer-motion";
import styles from "../styles";

import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings}  py-8 relative`}
    >
      <div className="gradient-01 w-[50%] absolute inset-0"></div>

      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}
      >
        <img
          src={search}
          alt="search"
          className="w-[24px] h-[24px] object-contain "
        />
        <h2 className="font-extrabold text-white text-[24px]  leading-[30.24px]">
          METAVERSUS
        </h2>
        <img
          src={menu}
          alt="menu"
          className="w-[24px]  h-[24px] object-contain "
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
