// ================= NAVIGATION =================
function goTo(page) {
  window.location.href = page;
}

// ================= SIGNUP =================

// SIGNUP
function signup() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = { mobile, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && mobile === savedUser.mobile && password === savedUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "../index.html";
  } else {
    alert("Invalid details!");
  }
}
// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "pages/login.html";
}

// ================= SIDEBAR TOGGLE =================
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector(".main");

  // Desktop collapse
  sidebar.classList.toggle("collapsed");
  main.classList.toggle("collapsed");

  // Mobile slide
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("active");
  }
}

// ================= LOAD DATA =================
window.onload = function () {
  // Points show
  const points = localStorage.getItem("points") || 0;
  const pointEl = document.getElementById("points");
  if (pointEl) {
    pointEl.innerText = points;
  }
};

// ================= SAVE WASTE =================
function saveWaste() {
  const wasteType = document.querySelector("input[placeholder='Waste Type']").value;
  const quantity = document.querySelector("input[placeholder='Quantity']").value;

  const data = { wasteType, quantity };
  localStorage.setItem("wasteData", JSON.stringify(data));

  // Points add
  let points = localStorage.getItem("points") || 0;
  points = parseInt(points) + 10;
  localStorage.setItem("points", points);

  alert("Waste Saved! +10 Points 🎉");
}

// ================= AI ANALYSIS =================
function analyzeWaste() {
  const result = document.getElementById("result");

  if (result) {
    result.innerHTML = `
      ⚠️ Danger Level: High <br>
      💰 Estimated Price: ₹20/kg
    `;
  }
}