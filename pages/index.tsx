import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import Keyboard from '../components/keyboard/keyboard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [keyInput, setKeyInput] = useState('')

  const handleKeyInput = useCallback((key: string) => {
    /*
      Here we could do some checks and logic before updating the state, e.g.
      const isChar = /^[a-z]$/.test(key)
      const isBackspace = key === 'Backspace'
      const isSubmit = key === 'Enter'
    */
    setKeyInput(key)
  }, [])

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => handleKeyInput(key)
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyInput])


  return (
    <div className={styles.container}>
      <h1>Keyboard Demo</h1>
      <div className={styles.main}>
        <div className={styles.content}>{keyInput}</div>
      </div>
      <Keyboard handleKeyInput={handleKeyInput} />
    </div>
  )
}

export default Home
