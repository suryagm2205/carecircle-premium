import { defineConfig } from 'vite';
import JavaScriptObfuscator from 'javascript-obfuscator';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'esbuild', // use esbuild to minify first
    sourcemap: false,  // do not generate sourcemaps (sourcemaps expose source code!)
    assetsDir: 'assets',
    rollupOptions: {
      plugins: [
        {
          name: 'vite-plugin-obfuscator',
          renderChunk(code, chunk) {
            // Only obfuscate JS files in production build
            if (chunk.fileName.endsWith('.js')) {
              const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.75,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.4,
                debugProtection: false,
                disableConsoleOutput: false,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: true,
                renameGlobals: false,
                selfDefending: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 5,
                stringArray: true,
                stringArrayCallsTransform: true,
                stringArrayEncoding: ['rc4'],
                stringArrayThreshold: 0.75,
                transformObjectKeys: true,
                unicodeEscapeSequence: false
              });
              return {
                code: obfuscationResult.getObfuscatedCode(),
                map: null
              };
            }
            return null;
          }
        }
      ]
    }
  }
});
