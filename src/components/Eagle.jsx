/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/eagle/Eagle.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./models/eagle/Eagle.glb")
  const { actions } = useAnimations(animations, group)
  console.log(actions,'actions')  
  if(actions.Fly){
    console.log('entered')
    actions.Fly.play()
  }
   
       
  // const startAnimation = () => {
  //   actions.fly.play() // Replace 'animation' with the name of your animation
  // }; 
  // startAnimation()
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 1.12, -0.392]} rotation={[1.304, 0, 0]}>
          <primitive object={nodes.Bone} />
          <skinnedMesh name="Flugel" geometry={nodes.Flugel.geometry} material={materials.Fogel_Mat} skeleton={nodes.Flugel.skeleton} />
        </group>
        <group name="Sun" position={[0.112, 10.039, -4.177]} rotation={[-0.576, 0, 0]} />
        <group name="Lamp" position={[-3.872, 4.316, 3.325]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Camera" position={[7.481, 5.344, 6.508]} rotation={[1.235, 0.323, -0.762]} />
        <group name="Lamp001" position={[-0.947, 1.868, -0.815]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Lamp002" position={[1.281, 4.086, -1.573]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Sun001" position={[0.112, -0.356, -4.177]} rotation={[-2.189, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Eagle.glb')
