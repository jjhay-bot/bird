import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2';

function createCamera() {
  const camera = new PerspectiveCamera(20, 5, 0.1, 100);

  camera.position.set(-17.5, 7.5, 15.5);

  return camera;
}

export { createCamera };
