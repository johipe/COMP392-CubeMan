/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
//import GeometryUtils = THREE.GeometryUtils;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var cube: Mesh;
var body:Mesh;
var rLeg:Mesh;
var lLeg:Mesh;
var rArm:Mesh;
var lArm:Mesh;
var head:Mesh;
var cubeGeometry: CubeGeometry;
var bodycubeGeometry: CubeGeometry;
var legRcubeGeometry: CubeGeometry;
var legLcubeGeometry: CubeGeometry;
var armLcubeGeometry: CubeGeometry;
var armRcubeGeometry: CubeGeometry;
var headcubeGeometry: CubeGeometry;
var planeGeometry: PlaneGeometry;
var cubeMaterial: LambertMaterial;
var bodycubeMaterial: LambertMaterial;
var legRcubeMaterial: LambertMaterial;
var legLcubeMaterial: LambertMaterial;
var headcubeMaterial: LambertMaterial;
var armLcubeMaterial: LambertMaterial;
var armRcubeMaterial: LambertMaterial;
var planeMaterial: LambertMaterial;
var plane: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var controlY: Control;
var controlZ: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var human;
var sphereColorA;

var parameters;

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
 	planeGeometry = new PlaneGeometry(60,30);
	planeMaterial = new LambertMaterial({color:0xFFFFFF});
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
    bodycubeMaterial = new LambertMaterial({color:0xeeb2f7});
    body = new Mesh(bodycubeGeometry, bodycubeMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    
    body.position.x = 0.52;
    body.position.y= 11.22;
    body.position.z = -0.47;
    
    //scene.add(body);
    console.log("Added body cube to the scene");
    
    //Add the right leg Cube to the scene
    legRcubeGeometry = new CubeGeometry(2.240, 7.362, 2.248);
    legRcubeMaterial = new LambertMaterial({color:0x176de6});
    rLeg = new Mesh(legRcubeGeometry, legRcubeMaterial);
    rLeg.castShadow = true;
    rLeg.receiveShadow = true;
    
    rLeg.position.x = 0.35;
    rLeg.position.y= 4.170;
    rLeg.position.z = -2.055;
    
   // scene.add(rLeg);
    console.log("Added right leg cube to the scene");
    
    //Add the left leg Cube to the scene
    legLcubeGeometry = new CubeGeometry(2.240, 7.362, 2.248);
    legLcubeMaterial = new LambertMaterial({color:0x176de6});
    lLeg = new Mesh(legLcubeGeometry, legLcubeMaterial);
    lLeg.castShadow = true;
    lLeg.receiveShadow = true;
    
    lLeg.position.x = 0.50;
    lLeg.position.y= 4.170;
    lLeg.position.z = 0.94;
    
    //scene.add(lLeg);
    console.log("Added left leg cube to the scene");    
     
    //Add the left arm Cube to the scene
    armLcubeGeometry = new CubeGeometry(2.240,2.248, 6);
    armLcubeMaterial = new LambertMaterial({color:0xe617df});
    lArm = new Mesh(armLcubeGeometry, armLcubeMaterial);
    lArm.castShadow = true;
    lArm.receiveShadow = true;
    
    lArm.position.x = 0.615;
    lArm.position.y= 12.520;
    lArm.position.z = 5.901;
    
    //scene.add(lLeg);
    console.log("Added left arm cube to the scene");    
    
    //Add the right arm Cube to the scene
    armRcubeGeometry = new CubeGeometry(2.240, 2.248, 6);
    armRcubeMaterial = new LambertMaterial({color:0xe617df}); // FFDAB9
    rArm = new Mesh(armRcubeGeometry, armRcubeMaterial);
    rArm.castShadow = true;
    rArm.receiveShadow = true;
    
    rArm.position.x = 0.861;
    rArm.position.y= 12.520;
    rArm.position.z = -6.501;
    
    //scene.add(lLeg);
    console.log("Added right arm cube to the scene");  
  
    
    //Add the head Cube to the scene
    headcubeGeometry = new CubeGeometry(3.25, 3.25, 3.25);
    headcubeMaterial = new LambertMaterial({color:238206179});
    head = new Mesh(headcubeGeometry, headcubeMaterial);
    head.castShadow = true;
    head.receiveShadow = true;
    
    head.position.x = 0.578;
    head.position.y= 16.524;
    head.position.z = -0.375;
    
    //scene.add(head);
    console.log("Added head cube to the scene");           
     
    //add all the parts to the human object
    human = new THREE.Object3D();//create an empty container
    human.add( rLeg );//add a mesh with geometry to it
    human.add(body);
    human.add(lLeg);
    human.add(lArm);
    human.add(rArm);
    human.add(head);
    scene.add( human );//when done, add the group to the scene
    
    
    //Add a Cube to the Scene
	cubeGeometry = new BoxGeometry(4, 4, 4);
	cubeMaterial = new LambertMaterial({color:0xff0000});
	cube = new Mesh(cubeGeometry, cubeMaterial);    
	cube.castShadow = true;
    
    cube.position.x = 0; //-4 red
    cube.position.y = 10; //3
    cube.position.z = 0;
    
	//scene.add(cube);
	console.log("Added Cube Primitive to scene...");
    
    // add controls
    gui = new GUI();
    //var folder
    //control = new Control(customMesh);
    
                    //control = new Control(0, 0, 0);
                    //body #906c96
                    //body #906c96
                    control = new Control(0, 0, 0, "#37bae1", "#cc9ad4", "#e13ddb", "#810d7d", "#2f74d4", "#0E4188" );
                    
                    
                    //head
                    //body #906c96
                    //arms #810d7d
                    //legs #0E4188
                    
                    
                    
    //controlY = new Control(0, 'Y Rotation');
    //controlZ = new Control(0, 'Z Rotation');
    
    //addControlPoints();
    addControl(control);
    //addControl(controlY);
    //addControl(controlZ);
    
    //control = new Control(0,0,0);
   // gui.add(controlX, 'clone');
   //head.material.setValues({color: 0xcc9900});
   //head.material.setValues({color: gui.addColor(head.material,'color')});
   //parameters = {
       
		//colorA: "#000033", // color (change "#" to "0x")
	//	colorB: "#ffff00", // color (change "#" to "0x")
       
   //}
   
   
   
	           //sphereColorA = gui.addColor( parameters, 'colorA' ).name('Color (Diffuse)').listen();
               
    // sphereColorA = gui.addColor( control, 'colorA').name('Head Color:');
	//sphereColorA.onChange(function(value) // onFinishChange
	//{   sphereColorA.colorA( value.replace("#", "0x") );   });
   
   //gui.addColor(head.material,'color');
    

    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function updateCubes()
{
   // var value = parameters.material;
    //var newMaterial;
    //newMaterial = new LambertMaterial({color:0x000000});
    
    //head.material = newMaterial;
    //head.material.color.setHex(parameters.color.replace("#",'0x'));
    
   //head.material.setValues({color: parameters.colorA}); 
    
      head.material.setValues({color: control.colorHead}); 
      body.material.setValues({color: control.colorBody}); 
      
      rArm.material.setValues({color: control.colorRightArm}); 
      lArm.material.setValues({color: control.colorLeftArm}); 
      
      rLeg.material.setValues({color: control.colorRightLeg}); 
      lLeg.material.setValues({color: control.colorLeftLeg}); 
    //head.material.setValues({color: parameters.colorA.replace("#","0x")});
   // console.log("updating cubes" + parameters.colorA);
    
}

function onResize(): void {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function addControl(controlObject: Control): void {
       // gui.add(controlObject, 'puta', 0, 0.5);
        var rotationFolder = gui.addFolder('Rotation Control');
       // tempFolder.add(controlObject, 'rotationSpeed', 0, 0.5)
        rotationFolder.add(controlObject, 'x_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'y_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'z_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'resetPosition').name('Reset ');
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
        
     //   ui.addColor( control, 'colorA').name('Head Color:');
    	//gui.add(controlObject,'rotationSpeed', 0, 0.5);
        //gui.add(controlObject, 'hola');
        //gui.add(controlObject, 'rotationSpeedY', 0, 0.5);
        //gui.add(controlObject, 'rotationSpeedZ', 0, 0.5);
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
function gameLoop(): void {
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
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
   // camera.lookAt(new Vector3(5, 0, 0));
   camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}

