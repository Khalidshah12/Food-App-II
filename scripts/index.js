// import data from navbar.js for appeding navbar on index.html page
import navbar from "../components/navbar.js"
const nav = document.querySelector('#navbar');
nav.innerHTML = navbar()

// import fetch from fetchData.js for fetching the data
import { getData, display } from '../components/fetchData.js';

//  adding Event listener "input" to input
const inputAddevent = document.querySelector('#search');
inputAddevent.addEventListener("input", searchData)

let id;
async function searchData() {
    if (id) {
        clearTimeout(id)
    }
    // added debouncing of 1s
    id = setTimeout(async function () {
        const search = document.querySelector('#search').value;
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        let data = await getData(url)
        const food = document.querySelector('#food');
        display(data, food)
        console.log(search)
    }, 1000)
}
