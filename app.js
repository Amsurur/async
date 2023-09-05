// let box = document.querySelector(".box");
// let api = "https://jsonplaceholder.typicode.com/todos";
// let inp1 = document.querySelector(".inp1");
// let btnAdd = document.querySelector(".btnAdd");

// // function get() {
// //   let d = new Date();
// //   let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
// //   let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
// //   let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
// //   let milsec =
// //     d.getMilliseconds() < 10 ? "0" + d.getMilliseconds() : d.getMilliseconds();
// //   h1.innerHTML = ${hours} : ${minute} : ${sec} : ${milsec};
// //   box.appendChild(h1);
// // }

// // setInterval(get, 0);

// async function getData() {
//   try {
//     const response = await fetch(api);
//     const data = await response.json();
//     // console.log(data);
//     get(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getData();

// async function postData(user) {
//   try {
//     const response = await fetch(api, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     getData();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function get(data) {
//   box.innerHTML = "";
//   data.forEach((el) => {
//     let div = document.createElement("div");
//     let h1 = document.createElement("h1");
//     h1.innerHTML = el.title;
//     div.append(h1);
//     box.appendChild(div);
//   });
// }

// btnAdd.onclick = () => {
//   let obj = {
//     userId: 1,
//     id: Date().now,
//     title: inp1.value,
//     completed: false,
//   };
//   postData(obj);
// };

let api = "https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department";
async function get() {
  try {
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(404);
  }
}
get();
