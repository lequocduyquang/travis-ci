import { buildTriangle } from './index';
import { Side } from './types';
import { Triangle } from './triangle';

describe('Verify type of triangle and calc perimeter', () => {
    test('Test tam giac deu', () => {
        const a: Side = {
            length: 10,
        }
        const b: Side = {
            length: 10,
        }
        const c: Side = {
            length: 10,
        }
        const instance: Triangle = buildTriangle(a, b, c);
        expect(instance.printType().type).toEqual(3);
        expect(instance.calcPerimeter()).toEqual(30);
    });
    test('Test tam giac can', () => {
        const a: Side = {
            length: 10,
        }
        const b: Side = {
            length: 10,
        }
        const c: Side = {
            length: 20,
        }
        const instance: Triangle = buildTriangle(a, b, c);
        expect(instance.printType().type).toEqual(2);
        expect(instance.calcPerimeter()).toEqual(40);
    });
    test('Test tam giac vuong', () => {
        const a: Side = {
            length: 30,
        }
        const b: Side = {
            length: 40,
        }
        const c: Side = {
            length: 50,
        }
        const instance: Triangle = buildTriangle(a, b, c);
        expect(instance.printType().type).toEqual(4);
        expect(instance.calcPerimeter()).toEqual(120);
    });
    test('Test tam giac thuong', () => {
        const a: Side = {
            length: 30,
        }
        const b: Side = {
            length: 40,
        }
        const c: Side = {
            length: 60,
        }
        const instance: Triangle = buildTriangle(a, b, c);
        expect(instance.printType().type).toEqual(1);
        expect(instance.calcPerimeter()).toEqual(130);
    });
    test('Test tong 2 canh be hon canh con lai', () => {
        const a: Side = {
            length: 30,
        }
        const b: Side = {
            length: 40,
        }
        const c: Side = {
            length: 100,
        }
        const instance: Triangle = buildTriangle(a, b, c);
        expect(instance.printType().type).toEqual(1);
        expect(instance.calcPerimeter()).toEqual(130);
    });
    test('Test so do 1 canh la so am', () => {
        const a: Side = {
            length: -30,
        }
        const b: Side = {
            length: 40,
        }
        const c: Side = {
            length: 100,
        }
        const instance: Triangle = buildTriangle(a, b, c);
        expect(instance.printType().type).toEqual(1);
        expect(instance.calcPerimeter()).toEqual(130);
    });
});