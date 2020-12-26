import { Side } from './types';

abstract class Triangle  {
    side1: Side;
    side2: Side;
    side3: Side;
    constructor(side1: Side, side2: Side, side3: Side ) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    public calcPerimeter(): number {
        return this.side1.length + this.side2.length + this.side3.length;
    };
    public calcArea(): number {
        const perimeter = this.calcPerimeter();
        const semiPerimeter = perimeter / 2;
        return Math.sqrt(semiPerimeter 
            * (semiPerimeter - this.side1.length) 
            * (semiPerimeter - this.side2.length) 
            * (semiPerimeter - this.side3.length));

    };
    public abstract printType(): object;
} 

class OrdinaryTriange extends Triangle {
    printType() {
        return {
            type: '1',
            message: 'Day la tam giac thuong'
        }
    }
}

class IsoscelesTriangle extends Triangle {
    printType() {
        return {
            type: '2',
            message: 'Day la tam giac can'
        }
    }
}

class EquilateralTriangle extends Triangle {
    printType() {
        return {
            type: '3',
            message: 'Day la tam giac deu'
        }
    }
}

class RightTriangle extends Triangle {
    printType() {
        return {
            type: '4',
            message: 'Day la tam giac vuong'
        }
    }
}

class IsoscelesRightTriangle extends Triangle {
    printType() {
        return {
            type: '5',
            message: 'Day la tam giac vuong can'
        }
    }
}

export {
    Triangle,
    OrdinaryTriange,
    IsoscelesTriangle,
    EquilateralTriangle,
    RightTriangle,
    IsoscelesRightTriangle,
}