import {Text, Environment, OrbitControls,useGLTF,Float, PresentationControls, ContactShadows,Html} from "@react-three/drei"
import {Perf} from 'r3f-perf'
import {Debug,RigidBody,Physics, CuboidCollider,BallCollider} from '@react-three/rapier'

export default function Experience(){

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1,2,3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Physics>
                <Debug scale={1} />
                <RigidBody type="Static" shape="Plane" colliders={"ball"}>
                    <mesh castShadow position={[-2,2,0]}>
                        <sphereGeometry />
                        <meshStandardMaterial color="red" />
                    </mesh>
                </RigidBody>

                <RigidBody type="Static"  >
                <mesh castShadow position={[2,2,0]}>
                    <boxGeometry />
                    <meshStandardMaterial color="green" />
                </mesh>
                </RigidBody>

                <RigidBody colliders={false} position={[0,1,0]} rotation={[Math.PI*0.1,0,0]}>
                    <CuboidCollider  args={[1.5,1.5,1.5]}/>
                    <mesh castShadow >
                        <torusGeometry args={[1,0.5,16,32]} />
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                </RigidBody>

                <RigidBody type="fixed" shape="Plane" >
                    <mesh receiveShadow position-y={-1.25}>
                        <boxGeometry args={[10,1,10]} />
                        <meshStandardMaterial color="ivory" />
                    </mesh>
                </RigidBody>
            </Physics>

        </>
    )
}