const API_URL = "http://localhost:5000/api/commute";

async function saveCommute() {
  const username = document.getElementById("username").value;
  const distance = document.getElementById("distance").value;
  const vehicleType = document.getElementById("vehicle").value;

  if (!username || !distance) {
    document.getElementById("result").innerText = "⚠️ Please fill all fields";
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, distance, vehicleType })
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    `✅ Saved! ${username} used ${vehicleType} and emitted ${data.data.savedCO2} g CO₂.`;
}

async function loadCommutes() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const list = document.getElementById("commuteList");
  list.innerHTML = "";
  data.forEach(c => {
    let li = document.createElement("li");
    li.innerText = `${c.username} traveled ${c.distance} km by ${c.vehicleType}, emitted ${c.savedCO2} g CO₂ on ${new Date(c.date).toLocaleDateString()}`;
    list.appendChild(li);
  });
}
