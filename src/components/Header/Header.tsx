// @ts-ignore
import styles, { bgColor, fgColor } from "./Header.module.scss";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToggleThemeButton } from "./ToggleThemeButton/ToggleThemeButton";
import { Social } from "../../models/Social";

type Props = {
  socials: Social[]
};


export default function Header({ socials }: Props) {
  return (
    <span className={styles.container}>
      <header className={styles.header}>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.3
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 1 }}
          className={[styles.icons, styles.headerPart].join(' ')}
        >
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor={fgColor}
              bgColor={bgColor}
            />
          ))}

        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.3
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 1 }}
          className={[styles.email, styles.headerPart].join(' ')}
        >

          <SocialIcon
            url="#contact"
            network="email"
            fgColor={fgColor}
            bgColor={bgColor}
          />
          <Link href="#contact">
            <p className={styles.text}>Get In Touch</p>
          </Link>
          <ToggleThemeButton />
        </motion.div>

      </header>
    </span>
  )
}
