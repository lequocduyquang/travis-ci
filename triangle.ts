import { Side, Response } from './types';

abstract class Triangle  {
    side1: Side;
    side2: Side;
    side3: Side;
    constructor(side1: Side, side2: Side, side3: Side ) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        if (this.side1.length <= 0 || this.side2.length <= 0 || this.side3.length <= 0) {
            throw new Error("So do 3 canh tam giac phai la so duong");
        }
        if (
            (this.side1.length + this.side2.length < this.side3.length) ||
            (this.side2.length + this.side3.length < this.side1.length) || 
            (this.side3.length + this.side1.length < this.side2.length)
        ) {
            throw new Error("Day khong phai la tam giac");
        }
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
    public abstract printType(): Response;
} 

class OrdinaryTriange extends Triangle {
    printType() {
        const result: Response = {
            type: 1,
            message: 'Day la tam giac thuong'
        } 
        return result
    }
}

class IsoscelesTriangle extends Triangle {
    printType() {
        const result: Response = {
            type: 2,
            message: 'Day la tam giac can'
        } 
        return result
    }
}

class EquilateralTriangle extends Triangle {
    printType() {
        const result: Response = {
            type: 3,
            message: 'Day la tam giac deu'
        } 
        return result
    }
}

class RightTriangle extends Triangle {
    printType() {
        const result: Response = {
            type: 4,
            message: 'Day la tam giac vuong'
        } 
        return result
    }
}

class IsoscelesRightTriangle extends Triangle {
    printType() {
        const result: Response = {
            type: 5,
            message: 'Day la tam giac vuong can'
        } 
        return result
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