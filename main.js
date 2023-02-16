const myImage = document.querySelector("img");

let pictureName = document.querySelector("picture");
document.getElementById("pictureName")

let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Inaway Galleries, ${storedName}`;
}

function previousPicture() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/pictures/jesus101.jpg") {
        myImage.setAttribute("src", "assets/pictures/redpainting.jpg");
        pictureName.setAttribute("picName", "Red Painting")

    } else if (mySrc === "assets/pictures/bonkbonk.jpg") {
        myImage.setAttribute("src", "assets/pictures/jesus101.jpg")
        pictureName.setAttribute("picName", "Black Jesus")

    } else if (mySrc === "assets/pictures/redpainting.jpg") {
        myImage.setAttribute("src", "assets/pictures/bonkbonk.jpg");
        pictureName.setAttribute("pictureName", "BonkBonk")
    }
}

function nextPicture() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/pictures/jesus101.jpg") {
        myImage.setAttribute("src", "assets/pictures/bonkbonk.jpg");
        pictureName.setAttribute("picName", "BonkBonk")
    } else if (mySrc === "assets/pictures/bonkbonk.jpg") {
        myImage.setAttribute("src", "assets/pictures/redpainting.jpg")
        pictureName.setAttribute("picName", "Red Painting")
    } else if (mySrc === "assets/pictures/redpainting.jpg") {
        myImage.setAttribute("src", "assets/pictures/jesus101.jpg");
        pictureName.setAttribute("picName", "Black Jesus")
    }
}

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to Inaway Galleries, ${myName}`;
    }
}