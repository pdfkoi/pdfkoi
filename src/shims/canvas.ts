// Turbopack shim for optional Node-only `canvas` dependency used by pdfjs-dist-legacy.
// In browser/SSR bundle paths for this app, PDF.js should not actually call NodeCanvasFactory.

export function createCanvas() {
  throw new Error('`canvas` is a Node-only dependency and is not available in this environment.');
}

const Canvas = { createCanvas };
export default Canvas;
