window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // 定义虚线的起始点、终点和虚线模式（长度和间隔）
        var startX = 50;
        var startY = 100;
        var endX = 350;
        var endY = 100;
        var dashLength = 10; // 虚线部分的长度
        var gapLength = 5; // 虚线之间的间隔长度

        // 设置线条样式为虚线模式
        ctx.setLineDash([dashLength, gapLength]);

        // 绘制虚线
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    } else {
        console.log('您的浏览器不支持Canvas。');
    }
};