class POCPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('POCPlugin', (compilation) => {
      console.log('POCPlugin');
    });
  }
}

module.exports = POCPlugin;
