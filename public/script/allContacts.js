
const exportBtn = document.getElementById("export-btn");

// Exporting .json
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


// Deleting contact
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
const deleteToastBtn = document.getElementById('deleteToastBtn');

deleteToastBtn.addEventListener("click", () => {
    const deleteToast = document.getElementById('deleteToast');
    bootstrap.Toast.getOrCreateInstance(deleteToast).show();
});