import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as esbuild from "esbuild";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// const resolveFixup = {
//   name: "resolve-fixup",
//   setup(build) {
//     build.onResolve({ filter: /react-virtualized/ }, async (args) => {
//       return {
//         path: path.resolve(
//           "./node_modules/react-virtualized/dist/umd/react-virtualized.js"
//         ),
//       };
//     });
//   },
// };

// esbuild.build({
//   plugins: [
//     resolveFixup,
//     // your plugins
//   ],
// });

// export default defineConfig({
//   optimizeDeps: {
//     esbuildOptions: {
//       plugins: [resolveFixup],
//     },
//   },
// });