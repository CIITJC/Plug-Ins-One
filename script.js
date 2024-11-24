const products =
     [
            { id: 0, img: "Images/Mouse-1.jfif", name: "Razer DeathAdder Essential Gaming Mouse Black", price: 980.00, description: "Ergonomic design with a high-precision optical sensor, ideal for gamers.", link: "product-details.html" },
            { id: 1, img: "Images/Keyboard-1.png", name: "Royal Kludge RKH81 Tri-mode Mechanical Keyboard", price: 2730.00, description: "Tri-mode connectivity (Bluetooth, 2.4GHz, Wired) with hot-swappable keys for a custom typing experience.", link: "product-details.html" },
            { id: 2, img: "Images/Headset-1.jpg", name: "Red Dragon H360 EPIUS 7.1 Gaming Headset", price: 1535.00, description: "Surround sound for an immersive gaming experience, with comfortable padded ear cups.", link: "product-details.html" },
            { id: 3, img: "Images/Mouse3.webp", name: "Fantech X5S Zeus V2 RGB Gaming Mouse", price: 550.00, description: "RGB lighting and precise DPI settings, designed for gaming and long hours of use.", link: "product-details.html" },
            { id: 4, img: "Images/Mouse-2.jfif", name: "Redragon M719 Invader RGB Gaming Mouse", price: 690.00, description: "A versatile mouse with customizable RGB lighting and ergonomic design.", link: "product-details.html" },
            { id: 5, img: "Images/Keyboard2.webp", name: "Onikuma G52 SPACE Black 82 Keys Mechanical Keyboard", price: 920.00, description: "Compact mechanical keyboard with space-saving layout and responsive keys.", link: "product-details.html" },
            { id: 6, img: "Images/Keyboard3.webp", name: "Redragon K502 KARURA 2 RGB Gaming Keyboard", price: 950.00, description: "A budget-friendly mechanical keyboard with RGB backlighting and anti-ghosting features.", link: "product-details.html" },
            { id: 7, img: "Images/Webcam1.png", name: "Cliptec I-SeeU RZW388 FHD Wide Angle Webcam Black", price: 810.00, description: "Full HD webcam with wide-angle view for clear video calls and streaming.", link: "product-details.html" },
            { id: 8, img: "Images/Webcam2.jfif", name: "Logitech HD Laptop Webcam C615 with Fold-and-Go Design, 360-Degree Swivel, 1080p Camera", price: 2300.00, description: "Portable webcam with HD quality and a foldable design, perfect for on-the-go video conferencing.", link: "product-details.html" },
            { id: 9, img: "Images/Webcam3.jfif", name: "A4Tech PK-910H Full-HD Webcam", price: 980.00, description: "Full HD webcam with clear video quality and built-in microphone for easy setup.", link: "product-details.html" },
            { id: 10, img: "Images/Printer1.webp", name: "Epson L3210 Multi Functional Integrated Ink Tank Printer", price: 9300.00, description: "All-in-one printer offering printing, scanning, and copying with high page yield and low cost per print.", link: "product-details.html" },
            { id: 11, img: "Images/Printer2.webp", name: "Brother DCP-T520W Multi-Function High-volume Printing 3-in-1 Wireless Printer", price: 10540.00, description: "High-volume ink tank printer with wireless connectivity, perfect for home and office use.", link: "product-details.html" },
            { id: 12, img: "Images/Printer3.webp", name: "Epson L5290 Wi-Fi Multi-Functional Integrated Ink Tank Printer", price: 14000.00, description: "Advanced printer with wireless functionality and high-quality printing capabilities for business and personal use.", link: "product-details.html" },
            { id: 13, img: "Images/Monitor1.webp", name: "SpecterPro G24SL 24 IPS 75Hz Freesync Gaming Monitor V-Stand", price: 6995.00, description: "24-inch IPS gaming monitor with 75Hz refresh rate and FreeSync technology for smooth gameplay.", link: "product-details.html" },
            { id: 14, img: "Images/Monitor2.webp", name: "Gamdias Atlas HD27G 27 180HZ FHD Curved Gaming Monitor", price: 8010.00, description: "27-inch curved gaming monitor with ultra-fast 180Hz refresh rate for a fluid gaming experience.", link: "product-details.html" },
            { id: 15, img: "Images/Monitor3.jpg", name: "Nvision N200V8 20 LED Monitor", price: 1810.00, description: "Compact LED monitor with clear display and energy-saving features, perfect for casual use.", link: "product-details.html" },
            { id: 16, img: "Images/Headset 3.jpg", name: "Redragon H260 HYLAS RGB Black, White and Pink Wired Gaming Headset", price: 739.00, description: "Stylish RGB wired gaming headset with clear audio and built-in microphone for communication during gaming.", link: "product-details.html" },
            { id: 17, img: "Images/Headset-1.jpg", name: "Fantech HG19 IRIS RGB Stereo Gaming Headset. Model O", price: 630.00, description: "Comfortable wired stereo headset with adjustable RGB lighting and superior sound quality.", link: "product-details.html" },
            { id: 18, img: "Images/Speaker 1.jpg", name: "Fantech GS202 Sonar Black and Sakura RGB Hi-res audio Gaming Bluetooth Speaker", price: 450.00, description: "Portable Bluetooth gaming speaker with RGB lighting and high-resolution sound quality.", link: "product-details.html" },
            { id: 19, img: "Images/Speaker 2.jpg", name: "Creative Pebble USB Powered Speakers White", price: 1320.00, description: "Compact USB-powered desktop speakers delivering clear, balanced sound for everyday use.", link: "product-details.html" },
            { id: 20, img: "Images/controller 1.webp", name: "Redragon GM100 Portable, Rotatable, Foldable Tripod Stand Gaming Stream Microphone", price: 1022.00, description: "Portable gaming microphone with adjustable tripod stand for streamers and content creators.", link: "product-details.html" },
            { id: 21, img: "Images/steam 1.jpg", name: "Elgato Stream Deck Mini Live Content Creation Controller", price: 5055.00, description: "Compact content creation controller with customizable keys for managing live streams and media.", link: "product-details.html" },
            { id: 22, img: "Images/steam 2.webp", name: "Razer Stream Controller X All-in-One Keypad for Streaming, RZ20-04790100-R3M1", price: 11823.00, description: "All-in-one keypad designed for professional streamers with programmable keys for quick commands.", link: "product-details.html" },
            { id: 23, img: "Images/controller 1.webp", name: "Fantech WGP15 EOS PRO Wireless Gaming Controller Rainbow", price: 1730.00, description: "Wireless gaming controller with ergonomic design and responsive buttons for an optimal gaming experience.", link: "product-details.html" },
            { id: 24, img: "Images/Tablet1.jpg", name: "Star G430S Game Play", price: 1299.00, description: "Tablet with responsive touchscreen for casual gaming and entertainment on the go.", link: "product-details.html" },
            { id: 25, img: "Images/Tablet2.jpg", name: "Parblo Intangbo S/M 7x4 Inches Digital Graphic Tablet for Drawing OSU Game with Battery-Freestyle ND", price: 7101.00, description: "Digital drawing tablet designed for artists and gamers, with precise stylus input and customizable features.", link: "product-details.html" },
            { id: 26, img: "Images/Plug1.jpg", name: "20A Tuya WiFi socket Smart socket US Plug switch Outlet support Smart Life APP", price: 235.00, description: "Smart plug compatible with Tuya Smart Life App for controlling devices remotely.", link: "product-details.html" },
            { id: 27, img: "Images/Plug2.png", name: "Tp-Link Tapo P105 Mini Smart Wi-Fi Plug for Home Automation", price: 349.00, description: "Mini Wi-Fi plug for home automation, control devices from anywhere using the Tapo app.", link: "product-details.html" },
            { id: 28, img: "Images/Camera2.webp", name: "Supremo Ace 4K Dual Display Waterproof Action Camera", price: 2849.00, description: "4K action camera with dual display and waterproof design, perfect for outdoor adventures.", link: "product-details.html" },
            { id: 29, img: "Images/Camera1.jpg", name: "Autom Hero 4K Action Camera", price: 1499.00, description: "4K resolution action camera, built for durability and capturing high-quality videos in extreme conditions.", link: "product-details.html" },
            { id: 30, img: "Images/Holder1.png", name: "Redragon IVY GCP500 Laptop Cooler [Black]", price: 1495.00, description: "Laptop cooling pad with multiple fan speeds to keep your laptop cool during long gaming sessions.", link: "product-details.html" },
            { id: 31, img: "Images/Holder2.jpg", name: "OATSBASF Laptop Cooler Stand Portable Foldable Cooling Fan Heat Dissipation Tablet Cooler Holder Notebook Mount", price: 1763.00, description: "Portable and foldable laptop cooler stand with heat dissipation for better airflow and cooling.", link: "product-details.html" }
     ];
            
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach((product, index) => {
        const productHTML = `
            <div class="columnFour">
                <a href="product-details.html?id=${index}">
                    <img src="${product.img}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>${product.price}</p>
                </a>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
}
renderProducts();

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
