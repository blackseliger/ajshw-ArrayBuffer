/* eslint-disable no-underscore-dangle */

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = '';
  }

  load(buffer) {
    const buffer16BitView = new Int16Array(buffer);
    for (let i = 0; i < buffer16BitView.length; i += 1) {
      this.buffer += String.fromCharCode(buffer16BitView[i]);
    }
    return this.buffer;
  }
}

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

const converter = new ArrayBufferConverter();
converter.load(getBuffer());

console.log(converter.buffer);

export { getBuffer };
