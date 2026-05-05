const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');
const pkg = require('../package.json');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(projectRoot);

config.projectRoot = projectRoot;
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.join(workspaceRoot, 'node_modules'),
  path.join(projectRoot, 'node_modules'),
];
config.resolver.extraNodeModules = {
  [pkg.name]: workspaceRoot,
};

module.exports = config;
