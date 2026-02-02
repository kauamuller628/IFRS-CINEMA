const session = JSON.parse(sessionStorage.getItem("selectedSession")) || {
  title: "Filme",
  time: "20:00",
  genre: "Ação",
  dur: "2h",
};
let cart = [];

function init() {
  // Carregar dados do filme
  document.getElementById("summaryTitle").textContent = session.title;
  document.getElementById("summaryTime").textContent = session.time;
  document.getElementById(
    "summaryBadges"
  ).innerHTML = `<span class="tag-y">${session.genre}</span><span class="tag-y">${session.dur}</span>`;
  document.getElementById(
    "moviePoster"
  ).style.backgroundImage = `url('https://picsum.photos/id/20/400/600')`;

  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById("seatsGrid");
  const rows = ["A", "B", "C", "D", "E", "F"];
  const occKey = `occ_${session.title}_${session.time}`;
  const occupied = JSON.parse(localStorage.getItem(occKey)) || [];

  let html = "";
  rows.forEach((row) => {
    html += `<div class="row-id">${row}</div>`;
    for (let i = 1; i <= 10; i++) {
      const id = `${row}${i}`;
      const isOcc = occupied.includes(id) ? "occ" : "";
      html += `<div class="seat-item ${isOcc}" id="s-${id}" onclick="handleSeat('${id}')">${id}</div>`;
    }
  });
  grid.innerHTML = html;
}

window.handleSeat = (id) => {
  const el = document.getElementById(`s-${id}`);
  if (el.classList.contains("occ")) return;

  const price = parseFloat(
    document.querySelector(".radio-btn.active").dataset.price
  );
  const type = document.querySelector('input[name="tkType"]:checked').value;

  const idx = cart.findIndex((s) => s.id === id);
  if (idx > -1) {
    cart.splice(idx, 1);
    el.classList.remove("sel");
  } else {
    cart.push({ id, price, type });
    el.classList.add("sel");
  }
  renderCheckout();
};

function renderCheckout() {
  const list = document.getElementById("orderList");
  const total = document.getElementById("totalDisplay");
  const btn = document.getElementById("btnFinish");

  if (cart.length === 0) {
    list.innerHTML =
      '<div class="empty-state">Selecione seus assentos...</div>';
    total.textContent = "R$ 0,00";
    btn.disabled = true;
    return;
  }

  let sum = 0;
  list.innerHTML = cart
    .map((s) => {
      sum += s.price;
      return `<div class="order-row"><span>Assento ${s.id} (${
        s.type
      })</span> <span>R$ ${s.price.toFixed(2)}</span></div>`;
    })
    .join("");

  total.textContent = `R$ ${sum.toFixed(2)}`;
  btn.disabled = false;
}

// Lógica dos botões de rádio customizados
document.querySelectorAll(".radio-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".radio-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    this.querySelector("input").checked = true;
  });
});

document.getElementById("btnFinish").onclick = () => {
  const occKey = `occ_${session.title}_${session.time}`;
  const occupied = JSON.parse(localStorage.getItem(occKey)) || [];
  const newSeats = cart.map((s) => s.id);

  localStorage.setItem(occKey, JSON.stringify([...occupied, ...newSeats]));
  alert("🎉 Compra realizada com sucesso! Aproveite sua pipoca.");
  window.location.reload();
};

init();
