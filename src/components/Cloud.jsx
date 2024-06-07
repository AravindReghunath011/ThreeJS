// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Command: npx gltfjsx@6.2.16 public/models/cloud/model.glb 
// */

// import { fadeOnBeforeCompile } from '../utils/fadeMaterial'

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

// export function Cloud({sceneOpacity,...props}) {
//   const { nodes, materials } = useGLTF('./models/cloud/model.gltf')
//   let materialRef = useRef()
//   useFrame(()=>{
//     materialRef.current.opacity = sceneOpacity.current
//   })
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Mball001.geometry} material={materials.Material} >
//         <meshStandardMaterial 
//         onBeforeCompile={fadeOnBeforeCompile}
//         envMapIntensity={2}
//         ref={materialRef}
//          transparent={true} />
//       </mesh>
//     </group>
//   )
// }

// useGLTF.preload('./modles/cloud/model.gltf')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/cloud/model.gltf 
*/

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

export function Cloud({ sceneOpacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/cloud/model.gltf");

  const materialRef = useRef();

  useFrame(() => {
    materialRef.current.opacity = sceneOpacity.current;
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/model.gltf");


