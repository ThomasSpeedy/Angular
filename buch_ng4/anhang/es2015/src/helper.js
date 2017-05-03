
const originalConsole = console;
const console = {};
console.log = function (...args){
    let text = '';
    for (let arg of args) {
        if (typeof arg === 'object') {
            arg = JSON.stringify(arg);
        }

        text += `${arg} `;
    }
    document.querySelector('#content').appendChild(document.createElement('p')).textContent = text;
    originalConsole.log(...args);
};
