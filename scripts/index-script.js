const fetchTotalAPI = fetch("https://covid-19.mathdro.id/api", {
  method: "get",
});

async function displayTotalData() {
  const res = await (await fetchTotalAPI).json();

  const total = document.getElementById("total-pill");
  const jumlah = res.confirmed.value + res.recovered.value + res.deaths.value;
  total.innerHTML = jumlah;

  const positive = document.getElementById("positive-pill");
  positive.innerHTML = res.confirmed.value;

  const recovered = document.getElementById("recovered-pill");
  recovered.innerHTML = res.recovered.value;

  const death = document.getElementById("death-pill");
  death.innerHTML = res.deaths.value;
}

displayTotalData();
