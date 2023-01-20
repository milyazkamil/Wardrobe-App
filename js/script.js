const wardrobe = document.querySelector(".wardrobe");
const frame = document.querySelector(".frame");
const frame2 = document.querySelector(".frame2");
const frame3 = document.querySelector(".frame3");

const man = document.querySelector(".man");
const woman = document.querySelector(".woman")

const jacketButton = document.querySelector(".jacket-button");
const sneakersButton = document.querySelector(".sneakers-button");
const shortButton = document.querySelector(".short-button");
const jeansButton = document.querySelector(".jeans-button");
const capButton = document.querySelector(".cap-button");

const mainPhoto = document.querySelector(".main-photo");

mainPhoto.classList.add("jacketMan");

const mainPhotoDiv = document.querySelector(".main-photo-div");
const marka = document.querySelector(".marka");

const clothesName = document.querySelector(".clothes-name");
const clothesDescription = document.querySelector(".clothes-description");

const icons = document.querySelector(".icons");

man.addEventListener("click", () => {
    jacketButton.src = "./images/jacket-logo.png";
    sneakersButton.src = "./images/sneakers-logo.png";
    shortButton.src = "./images/shorts-logo.png";
    jeansButton.src = "./images/jeans-logo.png";
    capButton.src = "./images/cap-logo.png";

    jacketButton.classList.remove("mystyle");
    sneakersButton.classList.remove("mystyle");
    shortButton.classList.remove("mystyle");
    jeansButton.classList.remove("mystyle");
    capButton.classList.remove("mystyle");

    if (mainPhoto.className.includes("jacketWoman")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jacket.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Nike Sportswear Windrunner";
            clothesDescription.innerText = "Men's Hooded Jacket - NIKE";           
        }, 500);
        mainPhoto.classList.remove("jacketWoman");
        mainPhoto.classList.add("jacketMan");
        marka.src = "./images/nike2.png";
    } else if (mainPhoto.className.includes("sneakersWoman")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/sneakers.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Downtown Leather High-Top Sneakers";
            clothesDescription.innerText = "Men's Sneakers - PRADA";            
        }, 500);
        mainPhoto.classList.remove("sneakersWoman");
        mainPhoto.classList.add("sneakersMan");
        marka.src = "./images/prada2.png";
    } else if (mainPhoto.className.includes("shortWoman")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/shorts.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Abstract Print Swimming Shorts";
            clothesDescription.innerText = "Men's Shorts - Zara";           
        }, 500);
        mainPhoto.classList.remove("shortWoman");
        mainPhoto.classList.add("shortMan");
        marka.src = "./images/zara2.png";
    } else if (mainPhoto.className.includes("jeansWoman")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jeans.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Louis Vuitton Slim Jeans";
            clothesDescription.innerText = "Men's Jeans - Louis Vuitton";            
        }, 500);
        mainPhoto.classList.remove("jeansWoman");
        mainPhoto.classList.add("jeansMan");
        marka.src = "./images/louis2.png";
    } else if (mainPhoto.className.includes("capWoman")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/cap.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Gucci New-York Cap";
            clothesDescription.innerText = "Men's Cap - Gucci";            
        }, 500);
        mainPhoto.classList.remove("capWoman");
        mainPhoto.classList.add("capMan");
        marka.src = "./images/gucci2.png";
    }
    marka.style.backgroundColor = "black";
});

woman.addEventListener("click", () => {
    jacketButton.src = "./images/jacket2-logo.png";
    sneakersButton.src = "./images/sneakers2-logo.png";
    shortButton.src = "./images/shorts2-logo.png";
    jeansButton.src = "./images/jeans2-logo.png";
    capButton.src = "./images/cap2-logo.png";

    jacketButton.classList.add("mystyle");
    sneakersButton.classList.add("mystyle");
    shortButton.classList.add("mystyle");
    jeansButton.classList.add("mystyle");
    capButton.classList.add("mystyle");

    if (mainPhoto.className.includes("jacketMan")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jacket2.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Nike Dri-FITT Bliss Luxe";
            clothesDescription.innerText = "Women's Anorak Jacket - NIKE";          
        }, 500);
        mainPhoto.classList.remove("jacketMan");
        mainPhoto.classList.add("jacketWoman");
        marka.src = "./images/nike.png";
    } else if (mainPhoto.className.includes("sneakersMan")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/sneakers2.png";
            mainPhoto.style.opacity = "1";           
            clothesName.innerText = "Re-Nylon Gabardine Sneakers";
            clothesDescription.innerText = "Women's Sneakers - PRADA";
        }, 500);
        mainPhoto.classList.remove("sneakersMan");
        mainPhoto.classList.add("sneakersWoman");
        marka.src = "./images/prada.png";
    } else if (mainPhoto.className.includes("shortMan")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/shorts2.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Frayed Denim Shorts";
            clothesDescription.innerText = "Women's Shorts - Zara";            
        }, 500);
        mainPhoto.classList.remove("shortMan");
        mainPhoto.classList.add("shortWoman");
        marka.src = "./images/zara.png";
    } else if (mainPhoto.className.includes("jeansMan")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jeans2.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Frayed Hem Monogram Patch Jeans";
            clothesDescription.innerText = "Women's Jeans - Louis Vuitton";            
        }, 500);
        mainPhoto.classList.remove("jeansMan");
        mainPhoto.classList.add("jeansWoman");
        marka.src = "./images/louis.png";
    } else if (mainPhoto.className.includes("capMan")) {
        mainPhoto.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/cap2.png";
            mainPhoto.style.opacity = "1";
            clothesName.innerText = "Check Tweed Wide-Brimmed Hat";
            clothesDescription.innerText = "Women's Hat - Gucci";            
        }, 500);
        mainPhoto.classList.remove("capMan");
        mainPhoto.classList.add("capWoman");
        marka.src = "./images/gucci.png";
    }
    marka.style.backgroundColor = "white";
});

jacketButton.addEventListener("click", () => {
    if (jacketButton.className.includes("mystyle")) {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jacket2.png";
            marka.src = "./images/nike.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";
            marka.style.backgroundColor = "white";
            clothesName.innerText = "Nike Dri-FITT Bliss Luxe";
            clothesDescription.innerText = "Women's Anorak Jacket - NIKE";
        }, 500);
        mainPhoto.classList.add("jacketWoman");
        mainPhoto.classList.remove("sneakersWoman");
        mainPhoto.classList.remove("shortWoman");
        mainPhoto.classList.remove("jeansWoman");
        mainPhoto.classList.remove("capWoman");
    } else {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jacket.png";
            marka.src = "./images/nike2.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";
            clothesName.innerText = "Nike Sportswear Windrunner";
            clothesDescription.innerText = "Men's Hooded Jacket - NIKE";     
        }, 500);
        mainPhoto.classList.add("jacketMan");
        mainPhoto.classList.remove("sneakersMan");
        mainPhoto.classList.remove("shortMan");
        mainPhoto.classList.remove("jeansMan");
        mainPhoto.classList.remove("capMan");
    }
});

sneakersButton.addEventListener("click", () => {
    if (sneakersButton.className.includes("mystyle")) {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/sneakers2.png";
            marka.src = "./images/prada.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";
            marka.style.backgroundColor = "white";
            clothesName.innerText = "Re-Nylon Gabardine Sneakers";
            clothesDescription.innerText = "Women's Sneakers - PRADA";
        }, 500);
        mainPhoto.classList.add("sneakersWoman");
        mainPhoto.classList.remove("jacketWoman");
        mainPhoto.classList.remove("shortWoman");
        mainPhoto.classList.remove("jeansWoman");
        mainPhoto.classList.remove("capWoman");
    } else {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/sneakers.png";
            marka.src = "./images/prada2.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";    
            clothesName.innerText = "Downtown Leather High-Top Sneakers";
            clothesDescription.innerText = "Men's Sneakers - PRADA";         
        }, 500);
        mainPhoto.classList.add("sneakersMan");
        mainPhoto.classList.remove("jacketMan");
        mainPhoto.classList.remove("shortMan");
        mainPhoto.classList.remove("jeansMan");
        mainPhoto.classList.remove("capMan");
    }
});

shortButton.addEventListener("click", () => {
    if (shortButton.className.includes("mystyle")) {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/shorts2.png";
            marka.src = "./images/zara.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";            
            marka.style.backgroundColor = "white";
            clothesName.innerText = "Frayed Denim Shorts";
            clothesDescription.innerText = "Women's Shorts - Zara";
        }, 500);
        mainPhoto.classList.add("shortWoman");
        mainPhoto.classList.remove("jacketWoman");
        mainPhoto.classList.remove("sneakersWoman");
        mainPhoto.classList.remove("jeansWoman");
        mainPhoto.classList.remove("capWoman");
    } else {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/shorts.png";
            marka.src = "./images/zara2.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";
            clothesName.innerText = "Abstract Print Swimming Shorts";
            clothesDescription.innerText = "Men's Shorts - Zara";           
        }, 500);
        mainPhoto.classList.add("shortMan");
        mainPhoto.classList.remove("jacketMan");
        mainPhoto.classList.remove("sneakersMan");
        mainPhoto.classList.remove("jeansMan");
        mainPhoto.classList.remove("capMan");
    }
});

jeansButton.addEventListener("click", () => {
    if (jeansButton.className.includes("mystyle")) {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jeans2.png";
            marka.src = "./images/louis.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";            
            marka.style.backgroundColor = "white";
            clothesName.innerText = "Frayed Hem Monogram Patch Jeans";
            clothesDescription.innerText = "Women's Jeans - Louis Vuitton";
        }, 500);
        mainPhoto.classList.add("jeansWoman");
        mainPhoto.classList.remove("jacketWoman");
        mainPhoto.classList.remove("sneakersWoman");
        mainPhoto.classList.remove("shortWoman");
        mainPhoto.classList.remove("capWoman");
    } else {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/jeans.png";
            marka.src = "./images/louis2.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";
            clothesName.innerText = "Louis Vuitton Slim Jeans";
            clothesDescription.innerText = "Men's Jeans - Louis Vuitton"; 
        }, 500);
        mainPhoto.classList.add("jeansMan");
        mainPhoto.classList.remove("jacketMan");
        mainPhoto.classList.remove("sneakersMan");
        mainPhoto.classList.remove("shortMan");
        mainPhoto.classList.remove("capMan");
    }
});

capButton.addEventListener("click", () => {
    if (capButton.className.includes("mystyle")) {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/cap2.png";
            marka.src = "./images/gucci.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";            
            marka.style.backgroundColor = "white";
            clothesName.innerText = "Check Tweed Wide-Brimmed Hat";
            clothesDescription.innerText = "Women's Hat - Gucci"; 
        }, 500);
        mainPhoto.classList.add("capWoman");
        mainPhoto.classList.remove("jacketWoman");
        mainPhoto.classList.remove("sneakersWoman");
        mainPhoto.classList.remove("shortWoman");
        mainPhoto.classList.remove("jeansWoman");
    } else {
        mainPhoto.style.opacity = "0";
        marka.style.opacity = "0";
        setTimeout(() => {
            mainPhoto.src = "./images/cap.png";
            marka.src = "./images/gucci2.png";
            mainPhoto.style.opacity = "1";            
            marka.style.opacity = "1";
            clothesName.innerText = "Gucci New-York Cap";
            clothesDescription.innerText = "Men's Cap - Gucci";         
        }, 500);
        mainPhoto.classList.add("capMan");
        mainPhoto.classList.remove("jacketMan");
        mainPhoto.classList.remove("sneakersMan");
        mainPhoto.classList.remove("shortMan");
        mainPhoto.classList.remove("jeansMan");
    }
});
let a = true;
wardrobe.addEventListener("click", () => {
    if (true) {
        frame.classList.toggle("frame-display");
        frame2.classList.toggle("frame-display");
        frame3.classList.toggle("frame-display3");
        mainPhotoDiv.classList.toggle("main-photo-div-after");

        if (a == true) {
            icons.style.right = "20%";
            a = false;
        } else {
            icons.style.right = "-35%";
            a = true;
        }
    }
});
