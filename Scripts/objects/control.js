1; //Source File: Control.ts 
2; //Author: Johanna Ponce
3; //Last Modified Date: Feb, 05, 2016 
4; //Last Modified by: Johanna Ponce
5; //GUI Controller for the humanoid Character
7; //Revision History:
/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
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
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        //Defines the action for the random color control.
        Control.prototype.randomColors = function () {
            this.colorHead = '#' + Math.random().toString(16).substring(2, 8);
            this.colorBody = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightArm = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftArm = '#' + Math.random().toString(16).substring(2, 8);
            this.colorRightLeg = '#' + Math.random().toString(16).substring(2, 8);
            this.colorLeftLeg = '#' + Math.random().toString(16).substring(2, 8);
            console.log(this.colorHead);
            console.log(this.colorBody);
            console.log(this.colorRightArm);
            console.log(this.colorRightLeg);
            console.log(this.colorLeftLeg);
            console.log(this.colorLeftArm);
        };
        //Defines the action for the reset colors control. Resets the color to the initial values  
        Control.prototype.resetColours = function () {
            this.colorHead = "#37bae1";
            this.colorBody = "#cc9ad4";
            this.colorRightArm = '#e13ddb';
            this.colorLeftArm = '#e13ddb';
            this.colorRightLeg = '#2f74d4';
            this.colorLeftLeg = '#2f74d4';
            updateCubes();
        };
        //Defines the action for the reset rotation control.
        Control.prototype.resetRotation = function () {
            this.x_rotationSpeed = 0;
            this.y_rotationSpeed = 0;
            this.z_rotationSpeed = 0;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map