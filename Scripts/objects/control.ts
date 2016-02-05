1 //Source File: Control.ts 
2 //Author: Johanna Ponce
3 //Last Modified Date: Feb, 05, 2016 
4 //Last Modified by: Johanna Ponce
5 //GUI Controller for the humanoid Character

/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        //public mesh: Object3D;
        public x_rotationSpeed: number;
        public y_rotationSpeed: number;
        public z_rotationSpeed: number;
        public colorHead:string;
        public colorBody:string;
        public colorLeftArm:string;
        public colorRightArm:string;
        public colorLeftLeg:string;
        public colorRightLeg:string;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        
        constructor(x_rotationSpeed: number, y_rotationSpeed: number, z_rotationSpeed: number, colorHead: string, colorBody: string, colorRightArm: string, colorLeftArm: string, colorRightLeg: string, colorLeftLeg: string) {
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
       public randomColors(): void { 

            this.colorHead = '#'+ Math.random().toString(16).substring(2,8);            
            this. colorBody = '#'+ Math.random().toString(16).substring(2,8);
            this.colorRightArm = '#'+ Math.random().toString(16).substring(2,8);
            this.colorLeftArm = '#'+ Math.random().toString(16).substring(2,8);
            this.colorRightLeg = '#'+ Math.random().toString(16).substring(2,8);
            this.colorLeftLeg = '#'+ Math.random().toString(16).substring(2,8);

             console.log(this.colorHead);
             console.log(this.colorBody);
             console.log(this.colorRightArm);
             console.log(this.colorRightLeg);
             console.log(this.colorLeftLeg);
             console.log(this.colorLeftArm);
             
         } 
         
       //Defines the action for the reset colors control. Resets the color to the initial values  
       public resetColours(): void {
           
            this.colorHead = "#37bae1";
            this. colorBody = "#cc9ad4";
            this.colorRightArm = '#e13ddb';
            this.colorLeftArm = '#e13ddb';
            this.colorRightLeg = '#2f74d4';
            this.colorLeftLeg = '#2f74d4';    
            updateCubes();
            
         } 
         
         //Defines the action for the reset rotation control.
        public resetRotation(): void {     
            this.x_rotationSpeed = 0;
            this.y_rotationSpeed= 0;
            this.z_rotationSpeed = 0;
       
         }  
    }
}
