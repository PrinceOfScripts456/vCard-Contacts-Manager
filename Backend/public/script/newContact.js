
// Submit Form
// const form = document.getElementById('newContactForm');
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     form.classList.add('was-validated');

//     if (!form.checkValidity()) {
//         return console.warn("form validation failed, submit aborted!");
//     }

//     const formData = new FormData(form);

//     let data = {};

//     for (const [key, value] of formData.entries()) {
//         if (data[key]) {
//             // if already exists → convert to array
//             data[key] = Array.isArray(data[key])
//                 ? [...data[key], value.trim()]
//                 : [data[key], value.trim()];
//         } else {
//             data[key] = value.trim();
//         }
//     }

//     if (Object.keys(data).length === 0) {
//         return console.warn("no data in send buffer - submit failed");
//     }

//     const res = await fetch('http://localhost:5000/contacts/new', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//     });

//     const result = await res;
//     console.log(result);
// });


// handle select-add-delete options
// document.addEventListener("click", (event) => {

//     // select option
//     const selectedOption = event.target.closest('.option-choose');
//     if (selectedOption) {

//         const dropdown = event.target.closest(".options");
//         const inputGroup = dropdown.closest('.input-group');
//         const display = inputGroup.querySelector(".option-value");

//         CustomBox = display;
//         CustomBox.type = "text";
//         CustomBox.placeholder = " . . . ";
//         CustomBox.classList = "btn btn-outline-secondary option-value form-control custom-box";
//         CustomBox.readOnly = true;
//         CustomBox.value = selectedOption.innerText;
//     }

//     // new telephone
//     let newTelephone = event.target.closest(".option-new-telephone");
//     if (newTelephone) {

//         const dropdown = event.target.closest(".options");
//         const inputGroup = dropdown.closest('.input-group');

//         newTelephone = document.createElement("div");
//         newTelephone.classList = "input-group mb-3";
//         newTelephone.innerHTML = `<input type="tel" class="form-control w-50" name="telephone" placeholder="Phone number">

//                         <input type="button" name="telFor" value="For?" class="btn btn-outline-secondary option-value">
//                         <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
//                             data-bs-toggle="dropdown" aria-expanded="false">
//                             <span class="visually-hidden">Toggle Dropdown</span>
//                         </button>
//                         <ul class="dropdown-menu dropdown-menu-end  options">
//                             <li><a class="dropdown-item  option-choose">Home</a></li>
//                             <li><a class="dropdown-item  option-choose">Work</a></li>
//                             <li><a class="dropdown-item  option-choose-x">Custom</a></li>
//                             <li>
//                                 <hr class="dropdown-divider">
//                             </li>
//                             <li><a class="dropdown-item  option-new-telephone">Add new number</a></li>
//                         </ul>`;

//         inputGroup.parentElement.appendChild(newTelephone);
//     }

//     // new email
//     let newEmail = event.target.closest(".option-new-email");
//     if (newEmail) {

//         const dropdown = event.target.closest(".options");
//         const inputGroup = dropdown.closest('.input-group');

//         newEmail = document.createElement("div");
//         newEmail.classList = "input-group mb-3";
//         newEmail.innerHTML = `<input type="email" class="form-control w-50" name="email" placeholder="Email" autocomplete="on">

//                         <input type="button" name="emailFor" value="For?" class="btn btn-outline-secondary option-value">
//                         <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
//                             data-bs-toggle="dropdown" aria-expanded="false">
//                             <span class="visually-hidden">Toggle Dropdown</span>
//                         </button>
//                         <ul class="dropdown-menu dropdown-menu-end  options">
//                             <li><a class="dropdown-item  option-choose">Action</a></li>
//                             <li><a class="dropdown-item  option-choose">Another action</a></li>
//                             <li><a class="dropdown-item  option-choose-x">Custom</a></li>
//                             <li>
//                                 <hr class="dropdown-divider">
//                             </li>
//                             <li><a class="dropdown-item  option-new-email">Add new email</a></li>
//                         </ul>`;

//         inputGroup.parentElement.appendChild(newEmail);
//     }

//     // new Date
//     let newDate = event.target.closest(".option-new-date");
//     if (newDate) {

//         const dropdown = event.target.closest(".options");
//         const inputGroup = dropdown.closest('.input-group');

//         newDate = document.createElement("div");
//         newDate.classList = "input-group mb-4";
//         newDate.innerHTML = `<input type="date" class="form-control w-50" name="date">

//                         <input type="button" name="dateFor" value="For?" class="btn btn-outline-secondary option-value">
//                         <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
//                             data-bs-toggle="dropdown" aria-expanded="false">
//                             <span class="visually-hidden">Toggle Dropdown</span>
//                         </button>
//                         <ul class="dropdown-menu dropdown-menu-end  options">
//                             <li><a class="dropdown-item  option-choose">Birthday</a></li>
//                             <li><a class="dropdown-item  option-choose">Anniversary</a></li>
//                             <li><a class="dropdown-item  option-choose-x">Custom</a></li>
//                             <li>
//                                 <hr class="dropdown-divider">
//                             </li>
//                             <li><a class="dropdown-item  option-new-date">Add new Date</a></li>
//                         </ul>`;

//         inputGroup.parentElement.appendChild(newDate);
//     }

//     // select option-x
//     const selectedOptionX = event.target.closest('.option-choose-x');
//     if (selectedOptionX) {

//         const dropdown = event.target.closest(".options");
//         const inputGroup = dropdown.closest('.input-group');
//         const display = inputGroup.querySelector(".option-value");

//         CustomBox = display;
//         CustomBox.type = "text";
//         CustomBox.placeholder = " . . . ";
//         CustomBox.classList = "form-control custom-box option-value";
//         CustomBox.readOnly = false;
//         CustomBox.value = "";

//         console.log(CustomBox);

//     }

// });

// Bootstrap
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//         form.addEventListener('submit', event => {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })
// })()