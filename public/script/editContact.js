
// trim() form values - act as middleware
const form = document.getElementById('editContactForm');
const saveBtn = document.getElementById('saveBtn');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    form.classList.add('was-validated');

    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        return console.warn("form validation failed, submit aborted!");
    }

    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {

        for (let i = 0; i < form[key].length; i++) {
            form[key][i].value = value.trim();
        }

        form[key].value = value.trim();
    }

    const id = saveBtn.getAttribute("data-id");
    let data = Object.fromEntries(formData);

    try {
        const response = await fetch(`/contacts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        data = await response.json();

        if (response.ok) {
            console.log("Edited successfully");

            setTimeout(() => {
                window.location.href = data.redirectTo;
            }, 3000);

        } else {
            console.log(data || "unexpected response");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong");
    }

});
