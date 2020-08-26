module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ['path', 'fs'],
            nodeIntegration: true,
            nodeModulesPath: ['./node_modules']
        }
    }
}