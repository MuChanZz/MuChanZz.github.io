let colonVisible = true; // コロンの表示状態を管理

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 各要素を更新
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // コロンの点滅（0.5秒ごとにON/OFF）
    if (colonVisible) {
        document.getElementById('colon1').style.opacity = "1";
        document.getElementById('colon2').style.opacity = "1";
    } else {
        document.getElementById('colon1').style.opacity = "0";
        document.getElementById('colon2').style.opacity = "0";
    }
}

// 1秒ごとに時計を更新
updateClock();
setInterval(updateClock, 10);

// 0.5秒ごとにコロンの表示/非表示を切り替える
setInterval(() => {
    colonVisible = !colonVisible;
}, 500);

