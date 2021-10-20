const resolve = require("resolve");

/**
 * @param {string} request
 * @param {ResolverOptions} options
 */
module.exports = (request, options) => {
  try {
    return resolve.sync(request, {
      basedir: options.basedir,
      extensions: options.extensions,
      preserveSymlinks: true,
    });
  } catch (e) {
    if (e.code === "MODULE_NOT_FOUND") {
      return options.defaultResolver(request, options);
    }
    throw e;
  }
};
