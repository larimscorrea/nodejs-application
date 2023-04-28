// No client-side.
window.today = new Date();
alert(window.today);

// No server-side ou qualquer lugar.
globalThis.today = new Date();
console.log(global.today);