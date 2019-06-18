const apiKey = 'abc123';

export default apiKey; // Default export. Can import it with any name. e.g import key from './config'. Does not have to be apiKey

export const sid = 'Sid'; // Named export. Can only be imported as sid. e.g. import {sid} from './config'. 

export function sayHi(name) {
    return `Hey ${name}`;
} // Will be exported as a named export

const age = 25;
const dog = 'Dog';

export { age, dog as dogs };

export const url = 'http://sidv.dev';