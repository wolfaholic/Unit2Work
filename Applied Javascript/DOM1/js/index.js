const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Task 2 MVP - Create Selectors to point your data to elements
//update the HTML with JSON Data

// Site Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Navigation
let Navi = document.querySelectorAll('a');
Navi[0].textContent = siteContent["nav"]['nav-item-1'];
Navi[1].textContent = siteContent["nav"]['nav-item-2'];
Navi[2].textContent = siteContent["nav"]['nav-item-3'];
Navi[3].textContent = siteContent["nav"]['nav-item-4'];
Navi[4].textContent = siteContent["nav"]['nav-item-5'];
Navi[5].textContent = siteContent["nav"]['nav-item-6'];

//Call to Action
let ctaHead = document.querySelector('.cta-text h1');
ctaHead.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

//Main Content
let topHead = document.querySelectorAll('.top-content .text-content h4');
topHead[0].textContent = siteContent['main-content']['features-h4'];
topHead[1].textContent = siteContent['main-content']['about-h4'];

let topPara = document.querySelectorAll('.top-content .text-content p');
topPara[0].textContent = siteContent['main-content']['features-content']
topPara[1].textContent = siteContent['main-content']['about-content']

let bottomHead = document.querySelectorAll('.bottom-content .text-content h4');
bottomHead[0].textContent = siteContent['main-content']['services-h4'];
bottomHead[1].textContent = siteContent['main-content']['product-h4'];
bottomHead[2].textContent = siteContent['main-content']['vision-h4'];

let bottomPara = document.querySelectorAll('.bottom-content .text-content p');
bottomPara[0].textContent = siteContent['main-content']['services-content'];
bottomPara[1].textContent = siteContent['main-content']['product-content'];
bottomPara[2].textContent = siteContent['main-content']['vision-content'];

//Contact
let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];


//Footer
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

// Add new content
let parentNav = document.querySelector("nav");
let newLink = document.createElement("a");
newLink.textContent = "Home";

let secondLink = document.createElement("a");
secondLink.textContent = "Store";

parentNav.appendChild(secondLink);
parentNav.prepend(newLink);

//Change Color
const navColor = document.querySelectorAll("a");
navColor.forEach(element => {
    element.style.color = "green";
});