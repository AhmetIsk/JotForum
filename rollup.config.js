import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import alias from '@rollup/plugin-alias';

import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

export default [{
    input: "src/index.js",
    output: {
        file: outputFile,
        format: "cjs" ,
        exports: 'named'
    },
    plugins: [
      alias({
        entries: [
          { find: 'react', replacement: 'preact/compat' },
          { find: 'react-dom', replacement: 'preact/compat' }
        ]
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      }),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**"
      }),
      resolve({
          include: ['node_modules/**'],
          browser: true
      }),
      commonjs({
        ignoreGlobal: true,
          include: [
              'node_modules/**',
            ],
            exclude: [
              'node_modules/process-es6/**',
            ],
      }),
    ],
},
  {
    input: 'src/index.js',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      alias({
        entries: [
          { find: 'react', replacement: 'preact/compat' },
          { find: 'react-dom', replacement: 'preact/compat' }
        ]
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      }),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**"
      }),
      resolve({
          include: ['node_modules/**'],
          browser: true
      }),
      commonjs({
        ignoreGlobal: true,
          include: [
              'node_modules/**',
            ],
            exclude: [
              'node_modules/process-es6/**',
            ],
      }),
    ],
},
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'JotForum'
    },
    plugins: [
        alias({
          entries: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom', replacement: 'preact/compat' }
          ]
        }),
        replace({
          "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
          runtimeHelpers: true,
          exclude: "node_modules/**"
        }),
        resolve({
            include: ['node_modules/**'],
            browser: true
        }),
        commonjs({
          ignoreGlobal: true,
            include: [
                'node_modules/**',
              ],
              exclude: [
                'node_modules/process-es6/**',
              ],
        }),
      ],
  },
  {
    input: 'src/htmlIndex.js',
    output: {
      file: pkg.htmlFile,
      format: 'umd',
      name: 'JotForum'
    },
    plugins: [
        alias({
          entries: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom', replacement: 'preact/compat' }
          ]
        }),
        replace({
          "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
          runtimeHelpers: true,
          exclude: "node_modules/**"
        }),
        resolve({
            include: ['node_modules/**'],
            browser: true
        }),
        commonjs({
          ignoreGlobal: true,
            include: [
                'node_modules/**',
              ],
              exclude: [
                'node_modules/process-es6/**',
              ],
        }),
      ],
  }

];
