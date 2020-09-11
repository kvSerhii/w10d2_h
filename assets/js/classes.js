'use strict'

const rootDiv = document.getElementById('root');

// div.className = "divTest2";
// rootDiv.classList.add('divTest');
// rootDiv.classList.add('divTest2');

// on/off class for object (in this case by clicking)
// rootDiv.addEventListener('click', (event) => {
//     rootDiv.classList.toggle("divTest2");
// });

// // checking is the rootDiv contains 'divTest2
// rootDiv.addEventListener('click', (event) => {
//     console.log(rootDiv.classList.contains("divTest2"));
// });

// // replace old class to new one for object
// rootDiv.addEventListener('click', (event) => {
//     rootDiv.classList.replace("divTest", "divTest2")
// });

// // remove from rootDiv object
// rootDiv.addEventListener('click', (event) => {
//     rootDiv.classList.remove("divTest");
// });

// rootDiv.addEventListener('click', (event) => {
//         if (rootDiv.classList.contains("divTest")) {
//             rootDiv.classList.replace('divTest', "divTest2");
//         } else if (rootDiv.classList.contains("divTest2")) {
//             rootDiv.classList.replace('divTest2', "divTest");
//         } else {
//             rootDiv.classList.add("divTest");
//         }
//     })
// console.dir(rootDiv);

// 1.Input, содержимое которго появляется на странице
// const inputElem = document.createElement('input');
// const outputDiv = document.createElement('div');
// outputDiv.classList.add("outputDiv");

// inputElem.setAttribute("size", '50');
// inputElem.classList.add("inputElem");

// rootDiv.append(inputElem);
// rootDiv.append(outputDiv);
// inputElem.addEventListener("input", (event) => {
//     outputDiv.append(inputElem.value);
// })

// 2.При нажатии кнопки "Submit" проверить,что введенное описание
// содержитне менне 3 слов.
// В случае, если условие не выполняется полбзователювыводиться сообщение
// об ошибке(Форма не отправляется на сервер).
// В случае, если условие выполняется, форма логируется в консоль
// (отправляется на сервер)