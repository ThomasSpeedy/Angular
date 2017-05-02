import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  entry: 'dist-aot/main-aot.js',
  dest: 'build/bundle-de.js',
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({ include: 'node_modules/rxjs/**' }),
    uglify()
  ]
}