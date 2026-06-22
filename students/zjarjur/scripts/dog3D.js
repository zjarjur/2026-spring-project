

//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
//Instantiate a loader for the .gltf file






const loader = new GLTFLoader();

console.log(loader);

//This is the DIV where we will place the renderer (a type of Canvas element)
const screen = document.getElementById("screen");
const w = window.innerWidth;
const h = window.innerHeight;

//We need a Renderer, Scene object, and Camera object
//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w/2, h/2);
screen.appendChild(renderer.domElement);

//Camera
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//Scene object
const scene = new THREE.Scene;

//Controls for orbiting the object
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = .03;

//Keep the 3D object on a global variable so we can access it later
let object = "models/max.glb";

let scale = 1;


//Load the file
function callThisFuncWhenModelIsLoaded(loadedModel) {
  scene.add(callThisFuncWhenModelIsLoaded.scene);
  console.log('my model is loaded');
}

loader.load(object, (gltf) => {
        console.log("Imported model", gltf);
        gltf.scene.scale.set(scale, scale, scale);
        scene.add(gltf.scene);
      },
      () => {
        console.log("progress");
      },
      () => {
        console.log("error");
      },);

console.log(scene);
console.log(object);

/*

//The following section sets up object parameters for our objects
const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
})
const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
})

//Create 2 Mesh objects for us to view
const wireMesh = new THREE.Mesh(geo, wireMat);
const mesh = new THREE.Mesh(geo, mat);

scene.add(mesh);
mesh.add(wireMesh);
wireMesh.scale.setScalar(1.001);

*/

//A light
const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

//functions for animation
function animate0(t = 0){
    requestAnimationFrame(animate0);
    renderer.render(scene, camera);
}

/*
function animate(t = 0) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.001;
    renderer.render(scene, camera);
    controls.update();
}

function animate2(t = 0) {
    requestAnimationFrame(animate2);
    // mesh.scale.setScalar(Math.cos(0.001 * t) * 1.0);
    mesh.rotation.y = t * 0.001;
    renderer.render(scene, camera);
    controls.update();
}
*/

animate0();