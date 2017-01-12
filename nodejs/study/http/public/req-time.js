module.exports = function (opts) {
  var time = opts.time || 100;
  return function (req, res, next) {
    var timer = setTimeout(function () {
      //超时警告
      console.log('too long! ',req.method, req.url);
    }, time);
    var end = res.end;
    res.end = function (chunk) {
      res.end = end;
      res.end(chunk);
      clearTimeout(timer);
    };
    next();
  }
};
