function A() {
  this.foo = 'hello';
};

if (!window._foo) {
  window._foo = new A();
};

module.exports = window._foo;
