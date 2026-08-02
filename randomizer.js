window.onload = function() {
    const tips = [
        "Tips: Just nu har vi korta väntetider på iPhone-reparationer!",
        "Tips: Behöver din Samsung ett nytt batteri? Vi fixar det på under en timme!",
        "Tips: Vi reparerar även OnePlus med originaldelar!",
        "Tips: Glöm inte att skydda din Huawei med vårt skärmskydd!"
    ];

    let randomNum = Math.random() * tips.length;

    let finalIndex = Math.floor(randomNum);

    const container = document.getElementById("random-promo");
    if (container) {
        container.innerText = tips[finalIndex];
    }
};