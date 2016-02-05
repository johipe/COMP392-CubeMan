1; //Source File: Game.ts 
2; //Author: Johanna Ponce
3; //Last Modified Date: Feb, 05, 2016 
4; //Last Modified by: Johanna Ponce
5; //Main scene setup and controller for the humanoid character. Assignment 1 for Advanced Graphics 
/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var scene;
var renderer;
var camera;
var axes;
var body;
var rLeg;
var lLeg;
var rArm;
var lArm;
var head;
var bodycubeGeometry;
var legRcubeGeometry;
var legLcubeGeometry;
var armLcubeGeometry;
var armRcubeGeometry;
var headcubeGeometry;
var planeGeometry;
var cubeMaterial;
var bodycubeMaterial;
var legRcubeMaterial;
var legLcubeMaterial;
var headcubeMaterial;
var armLcubeMaterial;
var armRcubeMaterial;
var planeMaterial;
var plane;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var human;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(15);
    axes.position.x = -14.5;
    axes.position.y = 0;
    axes.position.z = -14.5;
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    //Add a Plane to the Scene
    planeGeometry = new PlaneGeometry(60, 30);
    planeMaterial = new LambertMaterial({ color: 0xFFFFFF });
    plane = new Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    //Add the body Cube to the scene
    bodycubeGeometry = new CubeGeometry(4.792, 7.372, 7.362);
    bodycubeMaterial = new LambertMaterial({ color: 0xeeb2f7 });
    body = new Mesh(bodycubeGeometry, bodycubeMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    body.position.x = 0.52;
    body.position.y = 11.22;
    body.position.z = -0.47;
    //scene.add(body);
    console.log("Added body cube to the scene");
    //Add the right leg Cube to the scene
    legRcubeGeometry = new CubeGeometry(2.240, 7.362, 2.248);
    legRcubeMaterial = new LambertMaterial({ color: 0x176de6 });
    rLeg = new Mesh(legRcubeGeometry, legRcubeMaterial);
    rLeg.castShadow = true;
    rLeg.receiveShadow = true;
    rLeg.position.x = 0.35;
    rLeg.position.y = 4.170;
    rLeg.position.z = -2.055;
    // scene.add(rLeg);
    console.log("Added right leg cube to the scene");
    //Add the left leg Cube to the scene
    legLcubeGeometry = new CubeGeometry(2.240, 7.362, 2.248);
    legLcubeMaterial = new LambertMaterial({ color: 0x176de6 });
    lLeg = new Mesh(legLcubeGeometry, legLcubeMaterial);
    lLeg.castShadow = true;
    lLeg.receiveShadow = true;
    lLeg.position.x = 0.50;
    lLeg.position.y = 4.170;
    lLeg.position.z = 0.94;
    //scene.add(lLeg);
    console.log("Added left leg cube to the scene");
    //Add the left arm Cube to the scene
    armLcubeGeometry = new CubeGeometry(2.240, 2.248, 6);
    armLcubeMaterial = new LambertMaterial({ color: 0xe617df });
    lArm = new Mesh(armLcubeGeometry, armLcubeMaterial);
    lArm.castShadow = true;
    lArm.receiveShadow = true;
    lArm.position.x = 0.615;
    lArm.position.y = 12.520;
    lArm.position.z = 5.901;
    //scene.add(lLeg);
    console.log("Added left arm cube to the scene");
    //Add the right arm Cube to the scene
    armRcubeGeometry = new CubeGeometry(2.240, 2.248, 6);
    armRcubeMaterial = new LambertMaterial({ color: 0xe617df }); // FFDAB9
    rArm = new Mesh(armRcubeGeometry, armRcubeMaterial);
    rArm.castShadow = true;
    rArm.receiveShadow = true;
    rArm.position.x = 0.861;
    rArm.position.y = 12.520;
    rArm.position.z = -6.501;
    //scene.add(lLeg);
    console.log("Added right arm cube to the scene");
    //Add the head Cube to the scene
    headcubeGeometry = new CubeGeometry(3.25, 3.25, 3.25);
    headcubeMaterial = new LambertMaterial({ color: 238206179 });
    head = new Mesh(headcubeGeometry, headcubeMaterial);
    head.castShadow = true;
    head.receiveShadow = true;
    head.position.x = 0.578;
    head.position.y = 16.524;
    head.position.z = -0.375;
    //scene.add(head);
    console.log("Added head cube to the scene");
    //add all the parts to the human object
    human = new THREE.Object3D(); //create an empty container
    human.add(rLeg); //add a mesh with geometry to it
    human.add(body);
    human.add(lLeg);
    human.add(lArm);
    human.add(rArm);
    human.add(head);
    scene.add(human); //when done, add the group to the scene
    console.log("Added Humanoid character to scene...");
    gui = new GUI();
    // add controls
    control = new Control(0, 0, 0, "#37bae1", "#cc9ad4", "#e13ddb", "#e13ddb", "#2f74d4", "#2f74d4");
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function updateCubes() {
    head.material.setValues({ color: control.colorHead });
    body.material.setValues({ color: control.colorBody });
    rArm.material.setValues({ color: control.colorRightArm });
    lArm.material.setValues({ color: control.colorLeftArm });
    rLeg.material.setValues({ color: control.colorRightLeg });
    lLeg.material.setValues({ color: control.colorLeftLeg });
}
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function addControl(controlObject) {
    var rotationFolder = gui.addFolder('Rotation Control');
    rotationFolder.add(controlObject, 'x_rotationSpeed', 0, 0.5).listen();
    rotationFolder.add(controlObject, 'y_rotationSpeed', 0, 0.5).listen();
    rotationFolder.add(controlObject, 'z_rotationSpeed', 0, 0.5).listen();
    rotationFolder.add(controlObject, 'resetRotation').name('Reset ');
    rotationFolder.open();
    var colorFolder = gui.addFolder('Color Control');
    colorFolder.addColor(controlObject, 'colorHead').name('Head Color').listen();
    colorFolder.addColor(controlObject, 'colorBody').name('Body Color').listen();
    colorFolder.addColor(controlObject, 'colorRightArm').name('Right Arm Color').listen();
    colorFolder.addColor(controlObject, 'colorLeftArm').name('Left Arm Color').listen();
    colorFolder.addColor(controlObject, 'colorRightLeg').name('Right Leg Color').listen();
    colorFolder.addColor(controlObject, 'colorLeftLeg').name('Left Leg Color').listen();
    colorFolder.add(controlObject, 'randomColors').name('Random Colors');
    colorFolder.add(controlObject, 'resetColours').name('Reset Colors');
    colorFolder.open();
    //Listen for variables changes outside of the GUI. 
    //Ref: http://dat-gui.googlecode.com/git-history/561b4a1411ed13b37be8ff974174d46b1c09e843/index.html        
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
// Setup main game loop
function gameLoop() {
    stats.update();
    //animate human
    human.rotation.x += control.x_rotationSpeed;
    human.rotation.y += control.y_rotationSpeed;
    human.rotation.z += control.z_rotationSpeed;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
    updateCubes();
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map