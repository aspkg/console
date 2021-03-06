const fs = require('fs')

const loader = require('@assemblyscript/loader')

const ConsoleImports = require('../imports')

const Console = new ConsoleImports()

let wasmModule

const imports = {
    ...Console.wasmImports
}

wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + '/output/bindings.wasm'), imports)

Console.wasmExports = wasmModule.exports

wasmModule.exports._start()
wasmModule.exports.test()