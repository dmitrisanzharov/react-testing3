import {multiply, makeLowerCase} from './helperFun';


test('test to see if the imported function is successful', () => {
    expect(multiply(2,2)).toBeDefined();
    expect(makeLowerCase('STRING')).toBeDefined();

    expect(multiply(2,2)).toBe(4);
    expect(makeLowerCase('STRING')).toBe('string');
});

