const orderButton = document.getElementById('orderButton');
const loadingDiv = document.getElementById('loading');
const orderDisplay = document.getElementById('orderDisplay');
const foodImage = document.getElementById('foodImage');
const orderID = document.getElementById('orderID');
const selectedItemsDiv = document.getElementById('selectedItems');

// Mapping of food items to their image URLs
const foodImages = {
    'Burger': 'https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg',
    'Fries': 'https://www.shutterstock.com/image-photo/potato-fry-on-white-isolated-260nw-449211763.jpg',
    'Soda': 'https://t3.ftcdn.net/jpg/03/69/56/02/360_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg',
};

orderButton.addEventListener('click', () => {
    loadingDiv.style.display = 'block';
    setTimeout(() => {
        loadingDiv.style.display = 'none';
        orderDisplay.style.display = 'block';
        const selectedFoods = document.querySelectorAll('#foodSelection input[type="checkbox"]:checked');
        const foodNames = Array.from(selectedFoods).map(food => food.value);
        const food = foodNames[Math.floor(Math.random() * foodNames.length)];
        const imageURL = getImageURL(food);
        foodImage.src = imageURL;
        orderID.textContent = generateOrderID();
    }, Math.floor(Math.random() * 5000) + 3000); // Random time between 3 to 8 seconds
});

function getImageURL(food) {
    return foodImages[food];
}

function generateOrderID() {
    // Generate a random order ID
    return 'ORDER' + Math.floor(Math.random() * 10000);
}

// Update selected items when checkboxes are clicked
document.querySelectorAll('#foodSelection input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const itemName = event.target.value;
        if (event.target.checked) {
            const image = new Image();
            image.src = getImageURL(itemName);
            image.alt = itemName;
            selectedItemsDiv.appendChild(image);
        } else {
            const images = selectedItemsDiv.querySelectorAll('img');
            images.forEach(img => {
                if (img.alt === itemName) {
                    selectedItemsDiv.removeChild(img);
                }
            });
        }
    });
});
