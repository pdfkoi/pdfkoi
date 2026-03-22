// Shim for optional Node-only `canvas` dependency used by pdfjs-dist-legacy.
// Prevents bundler resolution errors in browser-focused builds.

module.exports = {
  createCanvas() {
    throw new Error('canvas is not available in this runtime.');
  },
};
