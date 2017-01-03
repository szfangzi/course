var Util = (function () {
  var startTime = 0;
  var endTime = 0;

  return {
    calStartTime: function () {
      startTime = new Date().getTime();
    },
    logCalTime: function () {
      endTime = new Date().getTime();
      console.log(endTime - startTime);
    }
  }
}());
