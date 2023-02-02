import { Environment, OrbitControls,useGLTF,Float, PresentationControls} from "@react-three/drei"

// extend({ OrbitControls })

export default function Experience(){
    const computer=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return (
        <>
            <Environment preset="city" />
            <color args={['skyblue']} attach="background"/>
            <OrbitControls makeDefault/>
            {/* <mesh>
                <boxBufferGeometry />
                <meshNormalMaterial />
            </mesh> */}
            <PresentationControls >
            <Float rotationIntensity={0.4}>
             <primitive object={computer.scene} position-y={-1.2}/>

            </Float>
            </PresentationControls>

        </>
    )
}