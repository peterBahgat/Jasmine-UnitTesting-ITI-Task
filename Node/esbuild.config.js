const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./spec/app.spec.js'],
    bundle: true,
    outfile: 'dist/bundle.spec.js',
    target: 'es6',
    platform: 'browser', // Change this to 'node'
    define: {
      // Define a global variable to indicate a browser environment
      'process.env.NODE_ENV': JSON.stringify('browser'),
    },
  })
  .catch(() => process.exit(1));
