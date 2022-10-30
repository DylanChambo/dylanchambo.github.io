import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div>
        {/* Social Icons */}
        <SocialIcon url="https://github.com/DylanChambo" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/dylanchambo/" fgColor='gray' bgColor='transparent'/>
      </div>
    </header>
  )
}
