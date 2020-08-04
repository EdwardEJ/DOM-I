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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

/*************** NAV BAR  *****************/
let navBar = document.querySelectorAll('nav a');


const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';

const homePage = document.createElement('a');
homePage.textContent = 'Home';
homePage.href = '#';


const nav = document.querySelector('nav');

nav.appendChild(blogLink);
nav.prepend(homePage);

console.log(navBar);

const firstNavLink = navBar[0];
const secondNavLink = navBar[1];
const thirdNavLink = navBar[2];
const fourthNavLink = navBar[3];
const fifthNavLink = navBar[4];
const sixthNavLink = navBar[5];

navBar = document.querySelectorAll('nav a');
console.log(navBar);


firstNavLink.textContent = siteContent['nav']['nav-item-1'];
secondNavLink.textContent = siteContent['nav']['nav-item-2'];
thirdNavLink.textContent = siteContent['nav']['nav-item-3'];
fourthNavLink.textContent = siteContent['nav']['nav-item-4'];
fifthNavLink.textContent = siteContent['nav']['nav-item-5'];
sixthNavLink.textContent = siteContent['nav']['nav-item-6'];



Array.from(navBar).forEach(item => {
  item.style.color = 'green';
});


/*************** CTA SECTION  *****************/

const firstSection = document.querySelector('.cta');

const firstSectText = firstSection.querySelector('.cta-text h1');
const firstSectionImg = firstSection.querySelector('#cta-img');
const firstSectBtn = firstSection.querySelector('button');

firstSectText.textContent = siteContent['cta']['h1'];
firstSectBtn.textContent = siteContent['cta']['button'];
firstSectionImg.setAttribute('src', siteContent['cta']['img-src']);

// const combineH1 = document.querySelector('h1').innerHTML.split(' ').join(' <br> ');
// firstSectText.textContent = combineH1;

/************* MAIN CONTENT ********************/

const firsth4 = document.querySelector('.text-content:nth-of-type(1) h4');
const secondh4 = document.querySelector('.text-content:nth-of-type(2) h4');
const firstP = document.querySelector('.text-content:nth-of-type(1) p');
const secondP = document.querySelector('.text-content:nth-of-type(2) p');
const middleImg = document.querySelector('#middle-img');

firsth4.textContent = siteContent['main-content']['features-h4'];
firstP.textContent = siteContent['main-content']['features-content'];

secondh4.textContent = siteContent['main-content']['about-h4'];
secondP.textContent = siteContent['main-content']['about-content'];
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

/************ BOTTOM CONTENT ********************/

const firstBottomH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const secondBottomH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const thirdBottomH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');

const firstBottomP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const secondBottomP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const thirdBottomP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

firstBottomH4.textContent = siteContent['main-content']['services-h4'];
secondBottomH4.textContent = siteContent['main-content']['product-h4'];
thirdBottomH4.textContent = siteContent['main-content']['vision-h4'];

firstBottomP.textContent = siteContent['main-content']['services-content'];
secondBottomP.textContent = siteContent['main-content']['services-content'];
thirdBottomP.textContent = siteContent['main-content']['services-content'];

/************ CONTACT CONTENT  ********************/

const contactH4 = document.querySelector('.contact h4');
const contactFirstP = document.querySelector('.contact p:nth-of-type(1)');
const contactSecondP = document.querySelector('.contact p:nth-of-type(2)');
const contactThirdP = document.querySelector('.contact p:nth-of-type(3)');

contactH4.textContent = siteContent['contact']['contact-h4'];
contactFirstP.textContent = siteContent['contact']['address'];
contactSecondP.textContent = siteContent['contact']['phone'];
contactThirdP.textContent = siteContent['contact']['email'];

/************* FOOTER *****************************/

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];