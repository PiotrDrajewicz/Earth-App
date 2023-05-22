import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
// import THREE from '@react-three/fiber'

const GetInfo = () => {
  const { gl } = useThree();
  const set = useThree((state) => state.set);
    // useThree(({camera}) => {
    //     camera.rotation.set(0, 0, 0);
    // });

  useEffect(() => {
    // gl === WebGLRenderer
    // gl.info.calls
    // set({ camera: new THREE.OrthographicCamera(2, 2, 2, 2, 1, 1) })
    // set({{  [0, 0, 10] }})
    // gl.capabilities.isWebGL2 = true;
    console.log('infoo', gl.capabilities.isWebGL2);
  });

  return null;
};

export default GetInfo;