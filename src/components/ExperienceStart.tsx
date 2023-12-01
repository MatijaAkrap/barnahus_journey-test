import { Plane } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Dispatch, useState } from 'react'
import { Sounds } from '../common/Sounds'
import Button from './Button'

interface IExperienceStart {
  expirenceStart: (start: boolean) => void
  setEnebleControls?: Dispatch<React.SetStateAction<boolean>>
}

const ExperienceStart = (props: IExperienceStart) => {
  const { size } = useThree()
  const [hideButton, setHideButton] = useState(false)
  //   const backgroundMusic: HTMLAudioElement = new Audio(Sounds.BackgroundMusic)
  //   const buttonClick: HTMLAudioElement = new Audio(Sounds.ButtonClick)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()

    // buttonClick.volume = 0.3
    // buttonClick.play()

    setTimeout(() => {
      props.expirenceStart(true)
      // props.setEnebleControls(true);
    }, 70)

    // backgroundMusic.volume = 0.1
    // backgroundMusic.play()
    // backgroundMusic.loop = true
    // setTimeout(() => {
    //   backgroundMusic.volume = 0.1
    // }, 1500)

    setHideButton(true)
  }

  return (
    <Plane
      args={[size.width, size.height]}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, Math.PI / 2]}
    >
      <meshBasicMaterial attach='material' transparent opacity={0} />
      <Button hideButton={hideButton} handleOnClick={handleClick} />
    </Plane>
  )
}

export default ExperienceStart
