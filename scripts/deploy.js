const {exec} = require('child_process')
const copy = (src, dest) => exec(`mkdir -p ${dest} && cp -a ${src} ${dest}`)
const log = (err, res) => err ? console.error(err) : console.log(res);

exec('npx next build src/app', log)
copy('src/public/.', 'dist/public')
copy('package*', 'dist/functions')
exec('mkdir -p src/functions && npx babel src/functions --out-dir dist/functions', log)