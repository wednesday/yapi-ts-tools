import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import commonjs from 'rollup-plugin-commonjs'
export default {
    input: "./tools/tampermonkey.ts",
    output: [
        {
            format: "cjs",
            file: "dist/bundle.cjs.js",
            sourcemap: true
        },
        {
            format: "es",
            file: "dist/bundle.esm.js"
        }
    ],
    plugins: [
        commonjs({
            include: /node_modules/
        }),
        typescript(),
        sourceMaps()
    ],
};
