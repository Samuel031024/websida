window.onload = function() {
    // Array med 4 olika rekommendationstexter
    const tips = [
        "Tips: Just nu har vi extra korta väntetider på iPhone-reparationer!",
        "Tips: Behöver din Samsung ett nytt batteri? Vi fixar det på under timmen.",
        "Tips: Vi reparerar även OnePlus med originaldelar!",
        "Tips: Glöm inte att skydda din Huawei med vårt skärmskydd!"
    ];

    // 1 & 2. Generera ett tal mellan 0 och 1, multiplicera med antal objekt (4)
    let randomNum = Math.random() * tips.length;

    // 3. Ta bort decimaler för att få ett heltal (0, 1, 2 eller 3)
    let finalIndex = Math.floor(randomNum);

    // 4. Hitta containern i HTML och ändra dess text
    const container = document.getElementById("random-promo");
    if (container) {
        container.innerText = tips[finalIndex];
    }
};