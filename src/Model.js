import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("bardoFace.glb");
  const { actions } = useAnimations(animations, group);
  const [animationIndex, setAnimationIndex] = useState(0);
  const currentAnimation = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentAnimation.current) {
        currentAnimation.current.fadeOut(0.5);
      }
      const randomIndex = Math.floor(Math.random() * animations.length);
      const animationAction = actions[animations[randomIndex].name];
      setAnimationIndex(randomIndex);
      currentAnimation.current = animationAction.reset().fadeIn(2.5).play();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.6) * 0.1;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.6) * 0.1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("bardoFace.glb");
