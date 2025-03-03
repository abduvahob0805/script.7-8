const btn = document.getElementById("btn");
const input = document.getElementById("input");
const ota = document.getElementById("ota");
const select = document.getElementById("select");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

let bayrog = [];

async function getFlags() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  flagChizish(data);
  bayrog = data;
}

getFlags();

function flagChizish(malumot) {
  ota.innerHTML = "";
  malumot.map((flags) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.onclick = function () {
      const tanlangan = bayrog.filter((e) => e.name.common == this.children[1].textContent)[0];
      console.log(tanlangan);
      localStorage.setItem("davlat", JSON.stringify(tanlangan));

      window.location.href="./country.html";
    };
    div.innerHTML = `
                        
                    <img src="${flags.flags.png}" alt="kahbsd">
                              <h3>${flags.name.common}</h3>
                    `;

    ota.appendChild(div);
  });
}

input.addEventListener("input", () => {
  const qidiruv = bayrog.filter((e) =>
    e.name.common.toLowerCase().includes(input.value.toLowerCase())
  );
  flagChizish(qidiruv);
});

select.addEventListener("change", () => {
  if (select.value == "All") {
    flagChizish(bayrog);
  } else {
    const qidiruv = bayrog.filter((e) =>
      e.region.toLowerCase().includes(select.value.toLowerCase())
    );

    flagChizish(qidiruv);
  }
});
