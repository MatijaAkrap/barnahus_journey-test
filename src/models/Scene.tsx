import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'
import ExperienceStart from '../components/ExperienceStart'

const Scene = () => {
  const [expirenceStarted, setExpirenceStarted] = useState(false)
  const abstractRose: any = useGLTF('./scene/abstractRose.glb')
  const animations = useAnimations(abstractRose.animations, abstractRose.scene)

  useEffect(() => {
    if (expirenceStarted) {
      const actions = animations.actions
      Object.keys(actions).map((key) => {
        actions[key]!.repetitions = 1
        actions[key]?.reset().play()
      })

      const vibrationInterval = setInterval(() => {
        if ('vibrate' in navigator) {
          navigator.vibrate(500)
        }
      }, 4666.66650772)

      const animationInterval = setInterval(() => {
        Object.keys(actions).map((key) => actions[key]?.reset().play())
      }, 9333.333015441895)

      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(vibrationInterval)
        clearInterval(animationInterval)
      }
    }
  }, [expirenceStarted])

  return (
    <>
      {!expirenceStarted ? (
        <ExperienceStart expirenceStart={() => setExpirenceStarted(true)} />
      ) : (
        <primitive scale={10} position={[0, -10, -120]} object={abstractRose.scene} />
      )}
    </>
  )
}

export default Scene

useGLTF.preload('./scene/abstractRose.glb')
