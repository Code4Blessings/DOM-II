// Your code goes here

//Selectors
const navigation = document.querySelectorAll('.nav-link');
const image = document.querySelectorAll('img');
const body = document.querySelector('body');
const button = document.querySelectorAll('.btn');

//Load Listener
window.addEventListener("load", () => {
    TweenMax.to(".intro img", 6, {x:573, rotation:360, scale:0.5});
});

//Scroll Bar
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY;

    if (scrolled === scrollable) {
        alert("Time to signup!!! Now highlight the name of the vacation that most interests you and click on the Sign Me Up button")
    }
});

//Resize
window.addEventListener('resize', () => {
    body.style.backgroundColor = "#F7B84A";
});


//Navigation Mouse Enter Effects
for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = '#17A2B8';
        event.target.style.color = '#fff';
        event.target.style.height = '25px';
        event.target.style.width = '70px';
    });
}

//Navigation Mouse Leave Effects
for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = '#fff';
        event.target.style.color = '#000';
    });
}


//Double Click to zoom Images
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('dblclick', (event) => {
        event.target.style.transform = 'scale(2)';
    });
}

//Click Signup
for(let i=0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        alert("Thank you for choosing this vacation spot. Someone will be contacting you shortly");
    })
}

//Select Listener









