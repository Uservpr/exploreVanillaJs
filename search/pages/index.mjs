import { data } from './data.mjs';
let container = document.getElementById("container")

//form
import form from './components/Form.mjs'
let search = form()
container.appendChild(search);

//table list
import table from './components/List.mjs'
let list = table()
document.body.appendChild(list)