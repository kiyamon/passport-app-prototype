// ... previous JS code ...

// Animate the profile picture
anime({
    targets: '#profileImage',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutExpo',
});

// Animate the features list
anime({
    targets: '#featureList li',
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {from: 'first'}),
    easing: 'easeOutExpo',
});

// Animate the whole container's fade-in
anime({
    targets: '.animate-fade-in',
    opacity: [0, 1],
    duration: 500,
    easing: 'linear',
});
