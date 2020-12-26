import { Side } from './types';
import { 
    Triangle,
    OrdinaryTriange,
    IsoscelesTriangle,
    EquilateralTriangle,
    RightTriangle,
    IsoscelesRightTriangle,
} from './triangle';

const a: Side = {
    length: -10
}

const b: Side = {
    length: 10
}

const c: Side = {
    length: 10
}

function checkIsosceles(a: Side, b: Side, c: Side) {
    return (a.length === b.length) || (b.length === c.length) || (c.length === a.length);
}

function checkEquilateral(a: Side, b: Side, c: Side) {
    return a.length === b.length && b.length === c.length;
}

function checkRight(a: Side, b: Side, c: Side) {
    return (Math.pow(a.length, 2) + Math.pow(b.length, 2) === Math.pow(c.length, 2)) ||
    (Math.pow(a.length, 2) + Math.pow(c.length, 2) === Math.pow(b.length, 2)) ||
    (Math.pow(b.length, 2) + Math.pow(c.length, 2) === Math.pow(a.length, 2))
}

function buildTriangle(a: Side, b: Side, c: Side): Triangle {
    if (checkEquilateral(a, b, c)) {
        return new EquilateralTriangle(a, b, c);
    }
    if (checkIsosceles(a, b, c) && checkRight(a, b, c)) {
        return new IsoscelesRightTriangle(a, b, c);
    }
    if (checkIsosceles(a, b, c)) {
        return new IsoscelesTriangle(a, b, c);
    }
    if (checkRight(a, b, c)) {
        return new RightTriangle(a, b, c);
    } else {
        return new OrdinaryTriange(a, b, c);
    }
}

const instance: Triangle = buildTriangle(a, b, c);
console.log('Type: ', instance.printType());
console.log('Perimeter: ', instance.calcPerimeter());
