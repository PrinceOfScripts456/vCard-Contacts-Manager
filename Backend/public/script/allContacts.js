
const exportBtn = document.getElementById("export-btn");

exportBtn.addEventListener("click", async () => {

    try {

        const response = await fetch("http://localhost:5000/contacts/export");

        if (response.ok) {

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");

            a.href = url;
            a.download = "data.json";

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


// Bootstrap toast trigger
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  });
}
