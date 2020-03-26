class AsyncPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('AsyncPlugin', (compilation, callback) => {
      console.log('AsyncPlugin');
      setTimeout(() => {
        console.log('AsyncPlugin done');
        callback();
      }, 1000);
    });
  }
}

module.exports = AsyncPlugin;
