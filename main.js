const myImage = document.querySelector("img");

let pictureName = document.querySelector("picture");
document.getElementById("pictureName")

let arrayOfImagee = [];
arrayOfImagee.push('src/assets/pictures/abstractredone.jpg');
arrayOfImagee.push('src/assets/pictures/africanwoman.jpg', 'title 2');
arrayOfImagee.push('src/assets/pictures/bloodcircles.jpg', 'title 3');
arrayOfImagee.push('src/assets/pictures/coupleholdinghands.jpg', 'title 4');
arrayOfImagee.push('src/assets/pictures/curvesinsand.jpg', 'title 5');
arrayOfImagee.push('src/assets/pictures/geometry.jpg', 'title 6');
arrayOfImagee.push('src/assets/pictures/infinity.jpg', 'title 7');
arrayOfImagee.push('src/assets/pictures/jesus101.jpg', 'title y');
arrayOfImagee.push('src/assets/pictures/peopledancing.jpg', 'title 8');
arrayOfImagee.push('src/assets/pictures/redpainting.jpg', 'title 9');
arrayOfImagee.push('src/assets/pictures/redaquarefaces.jpg', 'title 10');
arrayOfImagee.push('src/assets/pictures/twofriends.jpg', 'title 11');
arrayOfImagee.push('src/assets/pictures/valdesbillede.jpg', 'title 12');
arrayOfImagee.push('src/assets/pictures/valentine.jpg', 'titel 13');

var arrayOfImages = ["src/assets/pictures/abstractredone.jpg", "src/assets/pictures/africanwoman.jpg", "src/assets/pictures/bloodcircles.jpg", "src/assets/pictures/coupleholdinghands.jpg",
    "src/assets/pictures/curvesinsand.jpg", "src/assets/pictures/geometry.jpg", "src/assets/pictures/infinity.jpg", "src/assets/pictures/peopledancing.jpg",
    "src/assets/pictures/redpainting.jpg", "src/assets/pictures/redsquarefaces.jpg", "src/assets/pictures/twofriends.jpg", "src/assets/pictures/valdesbillede.jpg",
    "src/assets/pictures/valentine.jpg"]
var currentImage = 0;

function pictureChangerNext() {
    currentImage++;
    if (currentImage >= arrayOfImages.length) {
        currentImage = 0;
    }
    myImage.setAttribute("src", arrayOfImages[currentImage])
}

function pictureChangerPrev() {

    if (currentImage === 0) {
        currentImage = arrayOfImages.length - 1;
    }
    myImage.setAttribute("src", arrayOfImages[currentImage])
    currentImage--;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Inaway Galleries, ${storedName}`;
}

function previousPicture() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "src/assets/pictures/jesus101.jpg") {
        myImage.setAttribute("src", "src/assets/pictures/redpainting.jpg");
        pictureName.setAttribute("picName", "Red Painting")

    } else if (mySrc === "src/assets/pictures/bonkbonk.jpg") {
        myImage.setAttribute("src", "src/assets/pictures/jesus101.jpg")
        pictureName.setAttribute("picName", "Black Jesus")

    } else if (mySrc === "src/assets/pictures/redpainting.jpg") {
        myImage.setAttribute("src", "src/assets/pictures/bonkbonk.jpg");
        pictureName.setAttribute("pictureName", "BonkBonk")
    }
}

function nextPicture() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "src/assets/pictures/jesus101.jpg") {
        myImage.setAttribute("src", "src/assets/pictures/bonkbonk.jpg");
        pictureName.setAttribute("picName", "BonkBonk")
    } else if (mySrc === "src/assets/pictures/bonkbonk.jpg") {
        myImage.setAttribute("src", "src/assets/pictures/redpainting.jpg")
        pictureName.setAttribute("picName", "Red Painting")
    } else if (mySrc === "src/assets/pictures/redpainting.jpg") {
        myImage.setAttribute("src", "src/assets/pictures/jesus101.jpg");
        pictureName.setAttribute("picName", "Black Jesus")
    }
}
