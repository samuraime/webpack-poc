class BeforeRunPlugin {
  apply(compiler) {
    compiler.hooks.beforeRun.tap('BeforeRunPlugin', (compilation) => {
      console.log('BeforeRunPlugin');
    });
  }
}

module.exports = BeforeRunPlugin;
