import { Text } from '@react-three/drei'
import React from 'react'
import { fadeOnBeforeCompile, fadeOnBeforeCompileFlat } from '../utils/fadeMaterial'

const TextSection = ({title,subtitle,...props}) => {
  return (
    <>
      <group {...props}>
        {!!title&&(
            <Text
            color="white"
            anchorX={'left'}
            anchorY="bottom"
            fontSize={0.7}
            maxWidth={2.5}
            >
              {title}
              <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat} />
            </Text>
        )}
      
      <Text
      color="white"
      anchorX={'left'}
      anchorY="top"
      fontSize={0.25}
      maxWidth={2.5}
      >
        {subtitle}
        <meshStandardMaterial color={"white"} onBeforeCompile={fadeOnBeforeCompileFlat} />
      </Text>
      </group>
    </>
  )
}

export default TextSection