const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./spec/index.spec.js'],
    bundle: true,
    outfile: 'dist/bundle.spec.js',
  })
  .catch(() => process.exit(1));
