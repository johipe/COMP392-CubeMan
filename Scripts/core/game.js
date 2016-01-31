/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
//import GeometryUtils = THREE.GeometryUtils;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var cube;
var body;
var rLeg;
var lLeg;
var rArm;
var lArm;
var head;
var cubeGeometry;
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
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var vertices = new Array();
var faces = new Array();
var customGeometry;
var customMaterials = new Array();
var customMesh;
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
    // Call the Custom Mesh function
    //initializeCustomMesh();
    //Add the body Cube to the scene
    bodycubeGeometry = new CubeGeometry(4.792, 7.372, 7.362);
    bodycubeMaterial = new LambertMaterial({ color: 0x00ff00 });
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
    legRcubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    rLeg = new Mesh(legRcubeGeometry, legRcubeMaterial);
    rLeg.castShadow = true;
    rLeg.receiveShadow = true;
    rLeg.position.x = 0.35;
    rLeg.position.y = 4.170;
    rLeg.position.z = -2.055;
    // scene.add(rLeg);
    // THREE.Geometry.mer
    //THREE.GeometryUtils.merge(geometry, mesh);
    console.log("Added body cube to the scene");
    //Add the left leg Cube to the scene
    legLcubeGeometry = new CubeGeometry(2.240, 7.362, 2.248);
    legLcubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    lLeg = new Mesh(legLcubeGeometry, legLcubeMaterial);
    lLeg.castShadow = true;
    lLeg.receiveShadow = true;
    lLeg.position.x = 0.50;
    lLeg.position.y = 4.170;
    lLeg.position.z = 0.94;
    //scene.add(lLeg);
    console.log("Added body cube to the scene");
    //Add the left arm Cube to the scene
    armLcubeGeometry = new CubeGeometry(2.240, 2.248, 6);
    armLcubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    lArm = new Mesh(armLcubeGeometry, armLcubeMaterial);
    lArm.castShadow = true;
    lArm.receiveShadow = true;
    lArm.position.x = 0.615;
    lArm.position.y = 12.520;
    lArm.position.z = 5.901;
    //scene.add(lLeg);
    console.log("Added body cube to the scene");
    //Add the right arm Cube to the scene
    armRcubeGeometry = new CubeGeometry(2.240, 2.248, 6);
    armRcubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    rArm = new Mesh(armRcubeGeometry, armRcubeMaterial);
    rArm.castShadow = true;
    rArm.receiveShadow = true;
    rArm.position.x = 0.861;
    rArm.position.y = 12.520;
    rArm.position.z = -6.501;
    //scene.add(lLeg);
    console.log("Added body cube to the scene");
    console.log("Added body cube to the scene");
    //Add the head Cube to the scene
    headcubeGeometry = new CubeGeometry(3.25, 3.25, 3.25);
    headcubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    head = new Mesh(headcubeGeometry, headcubeMaterial);
    head.castShadow = true;
    head.receiveShadow = true;
    head.position.x = 0.578;
    head.position.y = 16.524;
    head.position.z = -0.375;
    //scene.add(head);
    console.log("Added body cube to the scene");
    //add all the parts to the human object
    human = new THREE.Object3D(); //create an empty container
    human.add(rLeg); //add a mesh with geometry to it
    human.add(body);
    human.add(lLeg);
    human.add(lArm);
    human.add(rArm);
    human.add(head);
    scene.add(human); //when done, add the group to the scene
    //Add a Cube to the Scene
    cubeGeometry = new BoxGeometry(4, 4, 4);
    cubeMaterial = new LambertMaterial({ color: 0xff0000 });
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 0; //-4 red
    cube.position.y = 10; //3
    cube.position.z = 0;
    //scene.add(cube);
    console.log("Added Cube Primitive to scene...");
    // add controls
    gui = new GUI();
    //control = new Control(customMesh);
    control = new Control(0.02);
    //addControlPoints();
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function initializeCustomMesh() {
    vertices = [
        new THREE.Vector3(1, 3, 1),
        new THREE.Vector3(1, 3, -1),
        new THREE.Vector3(1, -1, 1),
        new THREE.Vector3(1, -1, -1),
        new THREE.Vector3(-1, 3, -1),
        new THREE.Vector3(-1, 3, 1),
        new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(-1, -1, 1)
    ];
    faces = [
        new THREE.Face3(0, 2, 1),
        new THREE.Face3(2, 3, 1),
        new THREE.Face3(4, 6, 5),
        new THREE.Face3(6, 7, 5),
        new THREE.Face3(4, 5, 1),
        new THREE.Face3(5, 0, 1),
        new THREE.Face3(7, 6, 2),
        new THREE.Face3(6, 3, 2),
        new THREE.Face3(5, 7, 0),
        new THREE.Face3(7, 2, 0),
        new THREE.Face3(1, 3, 4),
        new THREE.Face3(3, 6, 4),
    ];
    createCustomMesh();
    console.log("Added Custom Mesh to Scene");
}
function addControlPoints() {
    control.points.push(new Point(3, 5, 3));
    control.points.push(new Point(3, 5, 0));
    control.points.push(new Point(3, 0, 3));
    control.points.push(new Point(3, 0, 0));
    control.points.push(new Point(0, 5, 0));
    control.points.push(new Point(0, 5, 3));
    control.points.push(new Point(0, 0, 0));
    control.points.push(new Point(0, 0, 3));
}
function createCustomMesh() {
    customGeometry = new Geometry();
    customGeometry.vertices = vertices;
    customGeometry.faces = faces;
    customGeometry.mergeVertices();
    customGeometry.computeFaceNormals();
    customMaterials = [
        new LambertMaterial({ opacity: 0.6, color: 0x44ff44, transparent: true }),
        new MeshBasicMaterial({ color: 0x000000, wireframe: true })
    ];
    customMesh = THREE.SceneUtils.createMultiMaterialObject(customGeometry, customMaterials);
    customMesh.children.forEach(function (child) {
        child.castShadow = true;
    });
    customMesh.name = "customMesh";
    scene.add(customMesh);
}
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function addControl(controlObject) {
    gui.add(controlObject, 'rotationSpeed', 0, 0.5);
    /*gui.add(controlObject, 'clone');
    for (var index = 0; index < 8; index++) {
        var folder: GUI;
        folder = gui.addFolder('Vertices ' + (index + 1));
        folder.add(controlObject.points[index], 'x', -10, 10);
        folder.add(controlObject.points[index], 'y', -10, 10);
        folder.add(controlObject.points[index], 'z', -10, 10);
        
    }*/
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
    //animate cube
    cube.rotation.x += control.rotationSpeed;
    cube.rotation.y += control.rotationSpeed;
    cube.rotation.z += control.rotationSpeed;
    //body.rotation.y += control.rotationSpeed;
    //lLeg.rotation.y += control.rotationSpeed;
    //rLeg.rotation.y += control.rotationSpeed;
    human.rotation.y += control.rotationSpeed;
    /* vertices = new Array<Vector3>();
     for (var index = 0; index < 8; index++) {
         vertices.push(new Vector3(
             control.points[index].x,
             control.points[index].y,
             control.points[index].z));
     }*/
    // remove our customMesh from the scene and add it every frame 
    scene.remove(scene.getObjectByName("customMesh"));
    createCustomMesh();
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
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
    // camera.lookAt(new Vector3(5, 0, 0));
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map