
const exportBtn = document.getElementById("export-btn");

exportBtn.addEventListener("click", async () => {

    try {

        const response = await fetch("http://localhost:5000/contacts/export");

        if (response.ok) {

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");

            a.href = url;
            a.download = "download.json";

            document.body.appendChild(a);

            a.click();
            a.remove();

            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            }, 100);

        } else {

            let data = await response.json();
            console.warn(data.message);

        }

    } catch (err) {

        console.log("ERROR: ");
        console.log(err);

    }

});

const ImportBtn = document.getElementById("import-btn");
const fileInput = document.getElementById("file-input");

ImportBtn.addEventListener("click", async () => {

    const file = fileInput.files[0];

    if (!file) {
        console.log("No file selected");
        return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

        const response = await fetch(
            "http://localhost:5000/contacts/import",
            {
                method: "POST",
                body: formData,
            }
        );

        if (response.ok) {

            const data = await response.json();

            toastTrigger.click();

            // window.location.href = data.redirectTo;

        } else {

            const data = await response.json();
            console.log("Error: ");
            console.log(data);

        }

    } catch (err) {

        console.log("Error occured:");
        console.log(err);

    }

});


document.querySelectorAll(".deleteBtn01").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
        e.preventDefault();

        const id = e.target.getAttribute("data-id");

        const confirmDelete = confirm("Are you sure you want to delete this contact?");

        if (!confirmDelete) return;

        try {
            const response = await fetch(`/contacts/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (response.ok) {
                alert("Contact deleted successfully");

                // remove card from UI without refresh
                btn.closest(".col").remove();
            } else {
                alert(data.message || "Delete failed");
            }

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    });
});


// Bootstrap toast trigger
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    });
}
