import {Text, Environment, OrbitControls,useGLTF,Float, PresentationControls, ContactShadows,Html} from "@react-three/drei"
import { useEffect } from "react";
import { LoadingManager } from 'three';
import URDFLoader from 'urdf-loader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
// import { URDFLoader } from 'three/examples/jsm/loaders/'
// extend({ OrbitControls })

export default function Experience(){
    const computer=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    // const urdf=useLoader(URDFLoader,'../models/urdf/robot.urdf')
    const obj = useLoader(OBJLoader, './models/Classroom.obj')
    // function TestScene() {
    //     // const obj = useLoader(OBJLoader, './models/classroom_model_1/source/Classroom_Obj/Classroom_Obj.obj')
    //     console.log(obj, 'obj')
    //     return <primitive object={obj} scale={10}/>
    //   }
    

    // useEffect(()=>{
    //     const manager = new LoadingManager();
    //     const loader = new URDFLoader( manager );
    //     // loader.packages = {
    //     //     packageName : './package/dir/'            // The equivalent of a (list of) ROS package(s):// directory
    //     // };
    //     loader.load(
    //         './models/urdf/robot.urdf',
    //       robot => {
    //         console.log( robot)
    //         // The robot is loaded!
    //         // scene.add( robot );
        
    //       },
    //       ()=>{},
    //         (e)=>{console.log(e)}
    //     );
    // },[])

    return (
        <>
            <Environment preset="city" />
            <color args={['skyblue']} attach="background"/>
            <OrbitControls makeDefault/>
            {/* <ambientLight /> */}
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[0, 10, 0]} intensity={1.5} />
            {/* <mesh>
                <boxBufferGeometry />
                <meshNormalMaterial />
            </mesh> */}
            <PresentationControls global rotation={[0.13,0.1,0]} polar={[-0.4,0.2]} azimuth={[-1,0.75]} config={{
                mass:2, tension: 200, friction: 20, precision: 0.0001
            }}>
            <Float rotationIntensity={0.4}>
                {/* <rectAreaLight 
                    width={2.5}
                    height={2.5}
                    intensity={50}
                    color={'#ff6900'}
                    rotation={[0.1,Math.PI,0]}
                    position={[0,0.55,-1.15]}
                />
             <primitive object={computer.scene} position-y={-1.2}>

            </primitive> */}
            <primitive object={obj} scale={1}         castShadow
          />
            {/* <TestScene /> */}

            </Float>
            </PresentationControls>

            <ContactShadows position-y={-1.5}  opacity={0.5} blur={1.5} scale={5}  />

        </>
    )
}