/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        /* constructor(mesh: Object3D) {
             this.points = new Array<objects.Point>();
             this.mesh = mesh;
         }*/
        function Control(x_rotationSpeed, y_rotationSpeed, z_rotationSpeed, colorHead, colorBody, colorRightArm, colorLeftArm, colorRightLeg, colorLeftLeg) {
            this.x_rotationSpeed = x_rotationSpeed;
            this.y_rotationSpeed = y_rotationSpeed;
            this.z_rotationSpeed = z_rotationSpeed;
            this.colorHead = colorHead;
            this.colorBody = colorBody;
            this.colorRightArm = colorRightArm;
            this.colorLeftArm = colorLeftArm;
            this.colorRightLeg = colorRightLeg;
            this.colorLeftLeg = colorLeftLeg;
            // this.label = label;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.randomColors = function () {
            //head.material.setValues({color: 0xcc9900}); 
            // head.material.setValues({color: '#'+Math.floor(Math.random()*16777215).toString(16)});
            this.colorHead = '#' + Math.random().toString(16).substring(2, 8);
            this.colorBody = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightArm = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftArm = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightLeg = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftLeg = '#' + Math.random().toString(16).substring(2, 8);
            /*
            this. colorBody = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.colorRightArm = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.colorLeftArm = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.colorRightLeg = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.colorLeftLeg = '#'+Math.floor(Math.random()*16777215).toString(16);
             */
            console.log(this.colorHead);
            console.log(this.colorBody);
            console.log(this.colorRightArm);
            console.log(this.colorRightLeg);
            console.log(this.colorLeftLeg);
            console.log(this.colorLeftArm);
            //body.material.setValues({color: 0x004d00}); 
            //larm.material.setValues({color: 0xcc9900}); 
            //rarm.material.setValues({color: 0xcc9900}); 
            //lleg.material.setValues({color: 0x000099}); 
            //rleg.material.setValues({color: 0x000099}); 
        };
        Control.prototype.resetColours = function () {
            this.colorHead = "#37bae1";
            this.colorBody = "#cc9ad4";
            this.colorRightArm = '#e13ddb';
            this.colorLeftArm = '#e13ddb';
            this.colorRightLeg = '#2f74d4';
            this.colorLeftLeg = '#2f74d4';
            updateCubes();
            // head.material.setValues({color: 0x37bae1}); 
            //body.material.setValues({color: 0xcc9ad4}); 
            //lArm.material.setValues({color: 0xe13ddb}); 
            //rArm.material.setValues({color: 0xe13ddb}); 
            //lLeg.material.setValues({color: 0x2f74d4}); 
            //rLeg.material.setValues({color: 0x2f74d4}); 
            //#37bae1", "#cc9ad4", "#e13ddb", "#810d7d", "#2f74d4", "#0E4188
        };
        Control.prototype.resetPosition = function () {
            this.x_rotationSpeed = 0;
            this.y_rotationSpeed = 0;
            this.z_rotationSpeed = 0;
            //gui.__controllers[1].setValue(0);
            // gui.__controllers[1].updateDisplay();
            //gui.__controllers
        };
        Control.prototype.clone = function () {
            var materials = [
                new THREE.MeshLambertMaterial({ opacity: 0.6, color: 0xff44ff, transparent: true }),
                new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
            ];
            var mesh2 = THREE.SceneUtils.createMultiMaterialObject(customGeometry, materials);
            mesh2.children.forEach(function (child) {
                child.castShadow = true;
            });
            mesh2.translateX(5);
            mesh2.translateZ(5);
            mesh2.name = "clone";
            scene.remove(scene.getObjectByName("clone"));
            scene.add(mesh2);
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map