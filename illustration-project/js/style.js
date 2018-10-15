window.onload = function() {
    var pre = document.getElementById('pre');
    var next = document.getElementById('next');
    var zhuang = document.getElementById('zhuang');
    var lis = zhuang.getElementsByTagName('li');
    var lock = false;
    var classes = ['left2', 'left1', 'king', 'right1', 'right2', 'bench-warmer', 'bench-warmer', 'bench-warmer', 'bench-warmer'];
    pre.onclick = function() {
        // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
        // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
        if (lock == true) {
            return;
        }
        // 锁定
        lock = true;

        setTimeout(function() {
            lock = false;
        }, 2000)
        // 将classes的第一个取出来， 放在最后一个位置
        //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
        var firstclass = classes.shift();
        classes.push(firstclass);
        console.log(classes);
        // 然后将classes给相应的class
        for (var i = 0; i < classes.length; i++) {
            lis[i].className = classes[i];
        }
    }
    next.onclick = function() {
        // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
        // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
        if (lock == true) {
            return;
        }
        // 锁定
        lock = true;

        setTimeout(function() {
            lock = false;
        }, 2000)
        // var lastclass = classes.pop();
        classes.unshift(classes.pop());
        console.log(classes);
        for (var i = 0; i < classes.length; i++) {
            lis[i].className = classes[i];
        }
    }
}
