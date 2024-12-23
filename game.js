document.addEventListener("DOMContentLoaded", () => {
    const priceButton = document.getElementById("price-button");
    const priceResponse = document.getElementById("price-response");

    priceButton.addEventListener("click", () => {
        priceResponse.textContent = "فريدة لا تُقدّر بثمن";
        priceResponse.style.color = "#d10000";
        priceResponse.style.fontSize = "1.8rem";
        priceButton.disabled = true;
    });
});
