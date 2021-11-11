const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const IsOutput = document.getElementById("IsOutput");

btnInsert.onclick = function () {
  const key = inpKey.value;
  
  const value = inpValue.value;
  
  
  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
  
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  
  IsOutput.innerHTML += `${key}: ${value}<br />`;
}

document.querySelector("myFileInput").addEventListener("change", function () {
  const reader = new FileReader();
  
  reader.addEventListener("load", () => {
    
    localStorage.setItem("recent-image", reader.result);
  });
  
  reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl = localStorage.getItem("recent-image");
  
  if (recentImageDataUrl) {
    document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
  }
});
