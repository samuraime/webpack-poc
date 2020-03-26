function parse(source) {
  const [header, ...body] = source
    .split('\n')
    .filter(Boolean)
    .map((row) => row.split(','));

  return body.map((row) => {
    const entries = row.map((col, i) => [header[i], col]);
    return Object.fromEntries(entries);
  });
}

function CSVLoader(source) {
  console.log('csv-loader');

  const parsed = parse(source);

  return `export default ${JSON.stringify(parsed)}`;
}

module.exports = CSVLoader;
