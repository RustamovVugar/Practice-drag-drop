"use strict";

// let form = document.querySelector("form");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log(document.getElementById("exampleInputEmail1").value)
// })

// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.querySelector(".drop-elem");

// dragElem.ondrag = () =>{
//     console.log("drag-continue")
// }

// dragElem.ondragend = () =>{
//     console.log("drag-end")
// }

// for (const elem of dragElems) {
//     elem.ondragstart = (e) => {
//         e.dataTransfer.setData("id", e.target.getAttribute("id"));
//     }
// }

// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id");

//     let elem = document.getElementById(id);

//     dropElem.append(elem);
// }

let input = document.querySelector("input");

let icon = document.querySelector("i");

let tableBody = document.querySelector("table tbody");

function inputTrigger(e) {
    e.target.nextElementSibling.click();
}

icon.addEventListener("click", inputTrigger)

input.addEventListener("change", function (e) {
    for (const file of e.target.files) {

        let reader = new FileReader();

        reader.onloadend = (event) => {

            let base64 = event.currentTarget.result;
           
            tableBody.innerHTML += `<tr>
            <td><img src="${base64}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size/1024} kb</td>
            <td> X </td>
          </tr>`
        }
        reader.readAsDataURL(file);
    }
})

                 