import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator("dog-3d");
const model = 'images/max.glb';
const scale = 0.5;

// dog.loadCube();
//dog.loadAxes();
dog.loadFloor();
dog.load(model, scale);
dog.animate();

dog.cameraPosition({x: -5, y: 3, z: 3});
