import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { Perf } from 'r3f-perf'
import ReactDOM from 'react-dom/client'
import * as THREE from 'three'
import Experience from './Experience'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='main'>
    <Leva
      collapsed={false}
      oneLineLabels={false}
      flat={true}
      theme={{
        sizes: {
          titleBarHeight: '28px',
        },
        fontSizes: {
          root: '10px',
        },
      }}
    />
    <Canvas
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }}
    >
      {/* <Perf position='top-left' /> */}
      <Experience />
    </Canvas>
  </div>
)
