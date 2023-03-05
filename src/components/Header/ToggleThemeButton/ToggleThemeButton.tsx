import React from 'react';
import { IoMoonSharp, IoSunnyOutline } from 'react-icons/io5';
import styles from './ToggleThemeButton.module.scss';
import useDarkModeImpl from '@fisch0920/use-dark-mode'

export const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={styles.themeButton}
	    onClick={onToggleTheme}
    >
	  {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

function useDarkMode() {
    const darkMode = useDarkModeImpl(true, {
      onChange: (state?: boolean) => {
        const htmlElement = document.documentElement
        if (state) {
          htmlElement.classList.add('dark-mode')
          htmlElement.classList.remove('light-mode')
        }
        else {
          htmlElement.classList.add('light-mode')
          htmlElement.classList.remove('dark-mode')
        }
      },
    })
  
    return {
      isDarkMode: darkMode.value,
      toggleDarkMode: darkMode.toggle,
    }
  }