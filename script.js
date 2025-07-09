// ✅ Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

// ✅ Basic Arithmetic
function calculateBasic() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  let result;

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
      break;
    default:
      result = "Invalid";
  }

  document.getElementById("basic-result").innerText = "Result: " + result;
}

// ✅ Circle Area
function calcCircleArea() {
  const r = parseFloat(document.getElementById("circle-radius").value);
  const area = Math.PI * r * r;
  document.getElementById("circle-result").innerText = "Area: " + area.toFixed(2);
}

// ✅ Rectangle Area
function calcRectangleArea() {
  const l = parseFloat(document.getElementById("rect-length").value);
  const w = parseFloat(document.getElementById("rect-width").value);
  const area = l * w;
  document.getElementById("rect-result").innerText = "Area: " + area.toFixed(2);
}

// ✅ Cube Volume
function calcCubeVolume() {
  const s = parseFloat(document.getElementById("cube-side").value);
  const volume = s ** 3;
  document.getElementById("cube-result").innerText = "Volume: " + volume.toFixed(2);
}

// ✅ Sphere Volume
function calcSphereVolume() {
  const r = parseFloat(document.getElementById("sphere-radius").value);
  const volume = (4 / 3) * Math.PI * r ** 3;
  document.getElementById("sphere-result").innerText = "Volume: " + volume.toFixed(2);
}
