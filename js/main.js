import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { DragControls } from "three/addons/controls/DragControls.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";

let scene, renderer, camera, light, cube;
let ADD = 0.02;

const init = function () {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 30;

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 10);
    scene.add(light);

    let material = new THREE.MeshPhongMaterial({ color: 0x0000f0 });
    let geometry = new THREE.BoxGeometry(5, 5, 5);
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(2);
    document.body.appendChild(renderer.domElement);

}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

const animate = function () {
    cube.rotation.x += ADD;
    cube.rotation.y += ADD;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();
animate();