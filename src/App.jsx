import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Background from "./components/Background";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import Overlay from "./components/Overlay";
import { usePlay } from "./contexts/Play";

function App() {
  const {play,end} = usePlay()
  return (
    <>
      <Canvas >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={play && !end ?20 :0} damping={0.5}>

        <Experience />  
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.05} />
        </EffectComposer>
        
      </Canvas>
      <Overlay/>
    </>
  );
}

export default App;
