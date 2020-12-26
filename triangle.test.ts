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
        instance.printType();
        // expect(instance.calcPerimeter()).toEqual(30);
    })
});