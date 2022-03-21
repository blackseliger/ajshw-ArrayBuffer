import ArrayBufferConverter, { getBuffer } from '../js/app';

/* eslint-disable no-new */

test('should setted this.name', () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.buffer).toEqual(expected);
});
