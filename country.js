const ota2 = document.getElementById("ota2");

const saqlangan = JSON.parse(localStorage.getItem("davlat"));
console.log(saqlangan);

ota2.innerHTML = `
 <img src="${saqlangan.flags.png}" alt="">
                <div class="text">
                    <h1>${saqlangan.name.common}</h1>
                    <h4>Poytaxti: ${saqlangan.capital}</h4>
                    <h4>Aholisi: ${saqlangan.population}</h4>
                    <h4>Maydoni: ${saqlangan.area}</h4>
                    <h4>Chegaradosh davlatlari: ${
                      saqlangan?.borders || "Chegardoshi yo'q"
                    }</h4>
                </div>
`;
