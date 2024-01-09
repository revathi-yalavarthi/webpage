function displayCropInfo() {
    var cropSelect = document.getElementById("cropSelect");
    var cropInfo = document.getElementById("cropInfo");
    var cropDescription = document.getElementById("cropDescription");

    // Define crop information
    var cropData = {
        wheat: "Wheat is a cereal grain that is a staple food in many countries.",
        rice: "Rice is the seed of the grass species Oryza sativa. It is a primary food source for more than half of the world's population.",
        corn: "Corn, also known as maize, is a cereal grain first domesticated by indigenous peoples in southern Mexico.",
        soybean: "Soybean is a legume native to East Asia. It is widely grown for its edible bean, which has numerous uses.",
        potato: "Potato is a starchy tuberous crop. It is the world's fourth-largest food crop.",
        tomato: "Tomato is a red, edible berry. It is consumed in diverse ways, raw or cooked, in many dishes.",
        cucumber: "Cucumber is a widely cultivated plant in the gourd family. It is a creeping vine that bears cucumiform fruits.",
        carrot: "Carrot is a root vegetable, typically orange in color, though purple, black, red, white, and yellow varieties also exist."
        
    };

    // Display selected crop information
    var selectedCrop = cropSelect.value;
    cropDescription.textContent = cropData[selectedCrop];

    // Show the crop information div
    cropInfo.style.display = "block";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

