const pickColor = document.getElementById("pick-color");
const error = document.getElementById("error");
const fileInput = document.getElementById("file");
const image = document.getElementById("image");
const hexValRef = document.getElementById("hex-val-ref");
const rgbValRef = document.getElementById("rgb-val-ref");
const customAlert = document.getElementById("custom-alert");
const pickedColorRef = document.getElementById("picked-color-ref");
const result = document.getElementById("result");

let eyeDropper;

const setupColorPicker = () => {
  if ("EyeDropper" in window) {
    pickColor.classList.remove("hide");
    eyeDropper = new EyeDropper();
  } else {
    error.classList.remove("hide");
    error.innerText = "Your browser doesn't support Colour Picker";
    pickColor.classList.add("hide");
    return false;
  }
};

const getColorFromEyedropper = async () => {
  try {
    const colorValue = await eyeDropper.open();
    error.classList.add("hide");
    const hexValue = colorValue.sRGBHex;
    const rgbArr = [];
    for (let i = 1; i < hexValue.length; i += 2) {
      rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
    }
    const rgbValue = `rgb(${rgbArr.join(", ")})`;
    result.style.display = "grid";
    hexValRef.value = hexValue;
    rgbValRef.value = rgbValue;
    pickedColorRef.style.backgroundColor = hexValue;
  } catch (err) {
    error.classList.remove("hide");
    if (err.toString().includes("AbortError")) {
      error.innerText = "";
    } else {
      error.innerText = err;
    }
  }
};

const handleFileInputChange = () => {
  result.style.display = "none";
  const reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};

const copyColorCode = (textId) => {
  document.getElementById(textId).select();
  document.execCommand("copy");
  customAlert.style.transform = "scale(1)";
  setTimeout(() => {
    customAlert.style.transform = "scale(0)";
  }, 2000);
};

pickColor.addEventListener("click", getColorFromEyedropper);
fileInput.addEventListener("change", handleFileInputChange);

window.addEventListener("load", setupColorPicker);

function fetchColor(){
 var color= document.getElementById("colour").value;
 document.getElementById("txtC").value=color;
}
