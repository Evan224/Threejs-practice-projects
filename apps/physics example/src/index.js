import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const created=({scene})=>{
    // scene.background=new THREE;
}

root.render(
    <Canvas
        shadows={true}
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        onCreated={created}
    >
        <color args={['skyblue']} attach="background"/>
        <Experience />
    </Canvas>
)