import { compass } from './compass';

export class Rover {
    direction = "N";
    x:number = 0;
    y:number = 0;

    constructor(startingPoint:string) {
       const [x,y,direction] = startingPoint.split(' ');
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.direction = direction;
        
    }

    instructions(instructions:string):void {
        instructions.toLocaleUpperCase().split('').map((instruction:string) => {
            switch(instruction) {
                case "M":
                console.log(compass[this.direction].movement.x, compass[this.direction].movement.y);
                this.x = this.x + compass[this.direction].movement.x;
                this.y = this.y + compass[this.direction].movement.y; 
                break;
                case "L":
                let newL = compass[this.direction].val - 1;
                newL = newL >= 0 ? newL : 3;
                console.log(newL);

                this.direction = Object.values(compass).find((direction)=> {
                    return direction.val === newL;
                }).name;  
                break;
                case "R":
                let newR = compass[this.direction].val + 1;
                newR = newR <= 3 ? newR : 0;
                console.log(newR);
                this.direction = Object.values(compass).find((direction)=> {
                    return direction.val === newR;
                }).name;
                break;
            }    
            });
    }
}