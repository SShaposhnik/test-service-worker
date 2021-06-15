const { injectManifest } = require('workbox-build');

// NOTE: This should be run *AFTER* all your assets are built

const buildSW = () => {
  return injectManifest({
    swSrc: 'src/service-worker.js', // this is your sw template file
    swDest: 'public/sw.js', // this will be created in the build step
    globDirectory: '.',
    globPatterns: [
      '**/*.{js,css,html,png}',
    ]
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn)
    console.log(`${count} files will be precached, totaling ${size} bytes.`)
  }).catch((error) => {
    console.log(error);
  })
}

buildSW();
