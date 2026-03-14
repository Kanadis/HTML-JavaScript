function inputOk(event) {
  const step1 = document.getElementById("step1");
  const name = document.getElementById("Name");
  const inputJml = document.getElementById("jmlPilihan");
  if (name.value.trim() === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }
  if (isNaN(inputJml.value) || inputJml.value <= 0) {
    alert("Jumlah pilihan harus lebih dari 0!");
    return;
  }
  createInput();
}
function createInput() {
  const step2 = document.getElementById("step2");
  const inputJml = document.getElementById("jmlPilihan");
  for (let i = 0; i < inputJml.value; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "pilihan${i}";
    input.placeholder = "Masukkan Pilihan ${i + 1}";

    step2.appendChild(input);
    step2.appendChild(document.createElement("br"));
  }
}
