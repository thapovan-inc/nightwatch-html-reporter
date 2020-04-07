module.exports = function(opts) {

  this.errmessages = [];
  this.appFaviconUrl = opts.appFaviconUrl;
  this.appLogoUrl = opts.appLogoUrl;
  this.packages = [];
  this.opts = opts;
  this.isFailure = false;

  this.addPackage = function(pkg) {
    if (pkg.isFailure)
      this.isFailure = true;

    if (!opts.hideSuccess || (opts.hideSuccess && pkg.isFailure))
      this.packages.push(pkg);
  };

};
