import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import Scene from './models/Scene'

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault />
      <ambientLight intensity={4} />
      <pointLight position={[20, -20, -20]} castShadow intensity={12.15} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </>
  )
}

export default Experience
