import { PerspectiveCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ReactFiber() {
  const handleGitHubClick = () => {
    window.open("https://github.com/salieri256")
  }

  const handleTwitterClick = () => {
    window.open("https://x.com/salieri_nk")
  }

  const handlePointerEnter = () => {
    window.document.body.style.cursor = "pointer"
  }

  const handlePointerLeave = () => {
    window.document.body.style.cursor = "auto"
  }

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[0, -2, 40]}
        lookAt={(x, y, z) => {}} />
      <Text>Portfolio | salieri256</Text>
      <Text
        position={[0, -2, 0]}
        onClick={handleGitHubClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}>
        GitHub
      </Text>
      <Text
        position={[0, -4, 0]}
        onClick={handleTwitterClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}>
        Twitter
      </Text>
    </Canvas>
  )
}
