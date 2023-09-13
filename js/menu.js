// Default in HTML
const carouselInner = document.querySelector(".carousel-menu");
const rightMenuImage = document.querySelector(".right-img-menu");
carouselInner.innerHTML = carouselMenuImage("cup_coffee.jpg", "coffe -freshtree.avif", "process.jpg");
rightMenuImage.innerHTML = rightImage("garden.jpg");

// More Menu (Coffee)
const coffee = document.querySelector(".coffee");
coffee.addEventListener("click", (e) => {
  imgCoffee(e);
  textCoffee();
  animateOnClick();
});
// More Menu (Desserts)
const desserts = document.querySelector(".desserts");
desserts.addEventListener("click", (e) => {
  imgDesserts(e);
  textDesserts();
  animateOnClick();
});
// More Menu (Breakfast)
const breakfast = document.querySelector(".breakfast");
breakfast.addEventListener("click", (e) => {
  imgBreakfast(e);
  textBreakfast();
  animateOnClick();
});

function carouselMenuImage(img1, img2, img3) {
  return `<div class="carousel-item border-menu-image active">
            <img src="imgg/${img1}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="imgg/${img2}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="imgg/${img3}" alt="" class="img-fluid menu-image"/>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>`;
}

function rightImage(image) {
  return `<img src="imgg/${image}" alt="" class="img-fluid right-menu-image" />`;
}

function animateOnClick() {
  const menuList = document.querySelector(".menu-list");
  const menuText = document.querySelector(".menu-text-header");

  carouselInner.classList.add("fade");
  rightMenuImage.classList.add("fade");
  menuList.classList.add("slideIn");
  menuText.classList.add("fade");
  setTimeout(() => {
    carouselInner.classList.remove("fade");
    rightMenuImage.classList.remove("fade");
    menuList.classList.remove("slideIn");
    menuText.classList.remove("fade");
  }, 600);
}

function imgCoffee(e) {//raw coffee
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("coffe -freshtree.avif", "coffee-grains.jpg", "green-grains.jpg");
  rightMenuImage.innerHTML = rightImage("garden.jpg");
}
function imgDesserts(e) {//roasted coffee
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("coffe -freshtree.avif", "garden.jpg", "garden.jpg");
  rightMenuImage.innerHTML = rightImage("garden.jpg");
}
function imgBreakfast(e) {//processed
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("process.jpg", "industry.jpg", "coffe -freshtree.avif");
  rightMenuImage.innerHTML = rightImage("garden.jpg");
}

const menuText1 = document.querySelector(".menu-text h5");
const menuText2 = document.querySelector(".menu-text h3:nth-child(2)");
const menuText3 = document.querySelector(".menu-text h3:nth-child(3)");
const menuText4 = document.querySelector(".menu-text p");
const menuList1 = document.querySelector(".menu-list p:nth-child(1)");
const menuList2 = document.querySelector(".menu-list p:nth-child(3)");
const menuList3 = document.querySelector(".menu-list p:nth-child(5)");

function textCoffee() {
  menuText1.textContent = "Our Raw Standard Coffee";
  menuText2.textContent = "Choose Your";
  menuText3.textContent = "Favorite Coffee";
  menuText4.textContent = "Craft Your Unique Coffee Experience with Our Raw Coffee Bean";
  menuList1.textContent = "Fresh Raw Beans";
  menuList2.textContent = "sized";
  // menuList3.textContent = "Arabica";
}
function textDesserts() {
  menuText1.textContent = "Our Roasted coffee";
  menuText2.textContent = "Choose Your";
  menuText3.textContent = "Favorite Roasted Coffee From Our Roastery to Your Cup";
  menuText4.textContent = "Your Perfect Brew Starts with Our Carefully Roasted Beans";
  menuList1.textContent = "Roasted beans";
  // menuList2.textContent = "Arabica Roasted beans";
  // menuList3.textContent = "Brownies";
}
function textBreakfast() {
  menuText1.textContent = "Our Processed coffee";
  menuText2.textContent = "Start your day";
  menuText3.textContent = "A World of Flavor at Your Fingertips";
  menuText4.textContent = "Indulge in the Rich Aromas and Flavors of Our Specialty Roasts";
  // menuList1.textContent = "Robusta Roasted beans";
  // menuList2.textContent = "Arabica Roasted beans";
  // menuList3.textContent = "Cereal";
}
