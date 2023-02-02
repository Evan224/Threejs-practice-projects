import {Text, Environment, OrbitControls,useGLTF,Float, PresentationControls, ContactShadows,Html} from "@react-three/drei"

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
            <PresentationControls global rotation={[0.13,0.1,0]} polar={[-0.4,0.2]} azimuth={[-1,0.75]} config={{
                mass:2, tension: 200, friction: 20, precision: 0.0001
            }}>
            <Float rotationIntensity={0.4}>
                <rectAreaLight 
                    width={2.5}
                    height={2.5}
                    intensity={50}
                    color={'#ff6900'}
                    rotation={[0.1,Math.PI,0]}
                    position={[0,0.55,-1.15]}
                />
             <primitive object={computer.scene} position-y={-1.2}>
                <Html transform wrapperClass="htmlScreen" distanceFactor={1.17} position={[0,1.56,-1.4]} rotation-x={-0.256}>
                    <iframe src="https://bruno-simon.com/html/" />
                </Html>
                    </primitive>
                <Text position={[4,0.75,0.75]} rotation-y={-1.25} maxWidth={2} textAlign={"center"}>
                    Changkong 
                    Zhou
                </Text>

            </Float>
            </PresentationControls>

            <ContactShadows position-y={-1.5}  opacity={0.5} blur={1.5} scale={5}  />

        </>
    )
}