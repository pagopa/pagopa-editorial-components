import { isJSX } from '../utils';

const JSX = <div>test</div>;
const NotJSX = {
  string: 'test',
  emptyString: '',
  array: [],
  emptyArray: [],
  object: { property: 'value' },
  emptyObject: {},
  numbers: 1,
  zero: 0,
};

describe('isJSX function utlity working properly', () => {
  test('is JSX', () => {
    expect(isJSX(JSX)).toBeTruthy();
  });

  test('is not JSX', () => {
    expect(isJSX(NotJSX.string)).toBeFalsy();
    expect(isJSX(NotJSX.emptyString)).toBeFalsy();
    expect(isJSX(NotJSX.array)).toBeFalsy();
    expect(isJSX(NotJSX.emptyArray)).toBeFalsy();
    expect(isJSX(NotJSX.object)).toBeFalsy();
    expect(isJSX(NotJSX.emptyObject)).toBeFalsy();
    expect(isJSX(NotJSX.numbers)).toBeFalsy();
    expect(isJSX(NotJSX.zero)).toBeFalsy();
  });
});
