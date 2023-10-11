// Feature list and tooltip display
const features = [
    { name: "Biometric Authentication", stats: "Secure and fast!" },
    { name: "QR Code for Quick Access", stats: "Scanned by 90% travelers!" },
    { name: "Offline Mode", stats: "Accessible anywhere!" },
    { name: "Emergency Contacts", stats: "Safety first!" }
];

const featureList = document.getElementById('featureList');

features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature.name;
    li.addEventListener('click', () => {
        alert(feature.stats); // Displaying stats in a simple alert for now
    });
    featureList.appendChild(li);
});

function setBackground() {
    const hour = new Date().getHours();
    let bgColor;

    if (hour >= 6 && hour < 12) {
        bgColor = '#FFEBB7'; // Morning - Light Yellow
    } else if (hour >= 12 && hour < 18) {
        bgColor = '#87CEFA'; // Afternoon - Sky Blue
    } else {
        bgColor = '#1A237E'; // Evening - Deep Blue
    }

    document.body.style.backgroundColor = bgColor;
}

// Call the function to set the background when the script loads
setBackground();
