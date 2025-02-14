import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

export const Experience = ({ avatarAnimation, mouthOpenness }) => {
  const texture = useTexture("textures/nirma-classroom.jpg");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls />
      <Avatar
        position={[0, -3, 5]}
        scale={2}
        animation={avatarAnimation}
        mouthOpenness={mouthOpenness}
      />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width * 1.75, viewport.height * 1.75]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};