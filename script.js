// getting elements from HTML file
var fileInput = document.getElementById("logoUpload");
var buttonName = document.getElementById("button-name");
var crossIcon = document.getElementById("cross-icon");

// function to change the color of the umbrella
function changeColor(color) {
  const umbrellaImage = document.getElementById("umbrellaImage");
  const container = document.getElementById("container");
  const uploadButton = document.getElementById("uploadButton");
  switch (color) {
    case "pink":
      umbrellaImage.src = "./assets/Pink umbrella.png";
      uploadButton.style.backgroundColor = "#ff69b4";
      break;
    case "blue":
      umbrellaImage.src = "./assets/Blue umbrella.png";
      uploadButton.style.backgroundColor = "#45aad8";
      break;
    case "yellow":
      umbrellaImage.src = "./assets/Yello umbrella.png";
      uploadButton.style.backgroundColor = "#ffd700";
      break;
    default:
      umbrellaImage.src = "./assets/Blue umbrella.png";
      container.style.backgroundColor = "#e6f2f2";
      uploadButton.style.backgroundColor = "#1e90ff";
  }
}

// logic to upload the logo
function uploadLogo() {
  const logoUpload = document.getElementById("logoUpload");
  const file = logoUpload.files[0];
  console.log(file);

  // if the size is more than 5MB then displaying alert message
  if (
    file &&
    (file.type === "image/png" || file.type === "image/jpeg") &&
    file.size <= 5 * 1024 * 1024
  ) {
    const reader = new FileReader();

    // here reading file name to display the name of the logo in button.
    const fileName = file?.name;
    crossIcon.style.opacity = 1;
    buttonName.innerText = fileName;
    reader.onload = function (e) {
      const logoPlaceholder = document.getElementById("logoPlaceholder");
      logoPlaceholder.style.backgroundImage = `url(${e.target.result})`;
      logoPlaceholder.style.backgroundSize = "contain";
      logoPlaceholder.style.backgroundRepeat = "no-repeat";
      logoPlaceholder.style.backgroundPosition = "center";
      logoPlaceholder.style.width = "50px";
      logoPlaceholder.style.height = "50px";
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid PNG or JPG file with a size less than 5MB.");
  }
}
