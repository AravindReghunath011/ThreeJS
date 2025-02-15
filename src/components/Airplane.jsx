/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/airplane/model.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const HELIXSPEED = 6
export function Airplane(props) {
    const helix = useRef()
    useFrame((_state,delta)=>{
        helix.current.rotation.x += delta * HELIXSPEED
    })
  const { nodes, materials } = useGLTF('./models/airplane/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh  geometry={nodes.PUSHILIN_Plane_Circle000.geometry} material={materials.plane} >
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh ref={helix} geometry={nodes.PUSHILIN_Plane_Helix.geometry} material={materials.plane} position={[1.09, 0.23, 0]} >
        <meshStandardMaterial color={"white"} />

      </mesh>
    </group>
  )
}

useGLTF.preload('./models/airplane/model.glb')
