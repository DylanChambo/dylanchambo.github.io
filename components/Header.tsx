// @ts-ignore
import styles, { bgColor, fgColor } from './Header.module.scss';

import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={[styles.icons, styles.headerPart].join(' ')}>
        
        <SocialIcon
            url="https://github.com/DylanChambo"
            fgColor={fgColor}
            bgColor={bgColor}
        />
        <SocialIcon
            url="https://www.linkedin.com/in/dylanchambo/"
            fgColor={fgColor}
            bgColor={bgColor}
        />

      </div>

      <div className={[styles.email, styles.headerPart].join(' ')}>
        <SocialIcon
          network="email"
          fgColor={fgColor}
          bgColor={bgColor}
        />
        
        <p className={styles.text}>Get In Touch</p>
      </div>
    </header>
  )
}
