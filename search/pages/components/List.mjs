import { data } from '../data.mjs'

export default function table() {
  let container = document.createElement("div");
  container.innerHTML = `
    <table style="text-align: center; border-color: black" class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col">Kelas</th>
          <th scope="col">Sekolah</th>
          <th scope="col">Cita-cita</th>
        </tr>
      </thead>
      <tbody id="table-body">
      </tbody>
    </table>
  `;

  let tbody = container.querySelector("#table-body");

  // Ambil query string
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const nameQuery = params.get("name");

  // Jika ada query & valid, filter data
  const filteredData = nameQuery
    ? data.filter((item) => item.nama.toLowerCase().includes(nameQuery.toLowerCase()))
    : data;

  // Looping data yang sesuai
  filteredData.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${item.id}</th>
      <td>${item.nama}</td>
      <td>${item.kelas}</td>
      <td>${item.asalSekolah}</td>
      <td>${item.citaCita}</td>
    `;
    tbody.appendChild(row);
  });

  // Tampilkan query di halaman jika ada
  if (nameQuery) {
    let p = document.createElement("p");
    p.textContent = `Pencarian: ${nameQuery}`;
    document.body.appendChild(p);
  }

  return container;
}