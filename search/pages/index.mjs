import { data } from './data.mjs';
import form from './components/Form.mjs'

let search = form()
document.body.appendChild(search);

const queryString = window.location.search;

if (queryString !== "") {
    const params = new URLSearchParams(queryString);
    const name = params.get("name");
    
    if (name) {
        console.log(name);
        let p = document.createElement("p");
        p.textContent = name;
        document.body.appendChild(p);

    } else {
        console.log("Parameter 'name' tidak ditemukan.");
    }
} else {
    console.log("Query string kosong, tidak ada eksekusi.");
}