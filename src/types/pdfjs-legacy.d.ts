declare module 'pdfjs-dist-legacy/lib/display/svg.js' {
  export const SVGGraphics: new (commonObjs: unknown, objs: unknown) => {
    embedFonts: boolean;
    getSVG(operatorList: unknown, viewport: unknown): Promise<SVGElement>;
  };
}
