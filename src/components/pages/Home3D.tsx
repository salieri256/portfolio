import { Loader, OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CircleGeometry, TextureLoader } from "three";
import myIcon from "@/assets/icon.jpg"
import jetBrainsMonoRegularFont from "~/public/fonts/jet-brains-mono-regular.woff"
import jetBrainsMonoBoldFont from "~/public/fonts/jet-brains-mono-bold.woff"

export default function Home3D() {
  const handleBlogClick = () => {
    window.location.href = "/blog/"
  }

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

  const textureLoader = new TextureLoader()
  const iconTexture = textureLoader.load(myIcon.src)
  new CircleGeometry()

  return (
    <>
      <Canvas>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 40]} />
        <group
          position={[0, -3, 0]}>
          <mesh
            position={[0, 8, 0]}
            onPointerEnter={event => event.eventObject.scale.set(1.2, 1.2, 1.2)}
            onPointerLeave={event => event.eventObject.scale.set(1, 1, 1)}>
            <circleGeometry args={[5, 128]} />
            <meshBasicMaterial
              map={iconTexture}
              side={2} />
          </mesh>
          <Text
            color={"black"}
            font={jetBrainsMonoBoldFont}>
            Portfolio | salieri256
          </Text>
          <Text
            color={"black"}
            font={jetBrainsMonoRegularFont}
            position={[0, -2, 0]}
            onClick={handleBlogClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}>
            Blog
          </Text>
          <Text
            color={"black"}
            font={jetBrainsMonoRegularFont}
            position={[0, -4, 0]}
            onClick={handleGitHubClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}>
            GitHub
          </Text>
          <Text
            color={"black"}
            font={jetBrainsMonoRegularFont}
            position={[0, -6, 0]}
            onClick={handleTwitterClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}>
            Twitter
          </Text>
        </group>
      </Canvas>
      <Loader />
    </>
  )
}
