var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current == "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          progress++;
        }
        // 不再使用闪烁下划线，直接输出当前内容
        $ele.html(str.substring(0, progress));

        // 如果内部有 .scrollable-text，则自动滚动到底部，避免文本一直停留在顶部
        var inner = $ele.find(".scrollable-text");
        if (inner.length) {
          inner.scrollTop(inner[0].scrollHeight);
        } else {
          $ele.scrollTop($ele[0].scrollHeight);
        }

        if (progress >= str.length) {
          clearInterval(timer);
          // 最终再确保滚到底部
          if (inner.length) inner.scrollTop(inner[0].scrollHeight);
        }
      }, 10);
    });
    return this;
  };
})(jQuery);

function timeElapse(date) {
  var current = Date();
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  var hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = "0" + hours;
  }
  seconds = seconds % 3600;
  var minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  seconds = seconds % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var result =
    '第 <span class="digit">' +
    days +
    '</span> 天 <span class="digit">' +
    hours +
    '</span> 小时 <span class="digit">' +
    minutes +
    '</span> 分钟 <span class="digit">' +
    seconds +
    "</span> 秒";
  $("#clock").html(result);
}
