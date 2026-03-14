let pilihan = [];
let step = 1;
function inputOk(event) {
  event.preventDefault();
  const name = document.getElementById("Name");
  const inputJml = document.getElementById("jmlPilihan");

  if (step === 1) {
    //validasi input step 1 jika tidak mengisi nama atau jumlah pilihan
    if (name.value.trim() === "") {
      alert("Nama tidak boleh kosong!");
      return;
    }

    if (isNaN(inputJml.value) || inputJml.value <= 0) {
      alert(
        "Jumlah pilihan tidak boleh kosong dan harus berupa angka positif!",
      );
      return;
    }

    name.disabled = true;
    inputJml.disabled = true;
    createInput();
    step = 2;
  } else if (step === 2) {
    //validasi input step 2 jika tidak mengisi pilihan
    const inputJml = document.getElementById("jmlPilihan");
    for (let i = 0; i < inputJml.value; i++) {
      if (!pilihan[i] || pilihan[i].trim() === "") {
        alert("Semua pilihan tidak boleh kosong!");
        return;
      }
    }
    checkList();
    step = 3;
  } else if (step === 3) {
    //validasi input step 3 jika tidak memilih salah satu pilihan
    const selected = document.querySelector('input[name="pilihan"]:checked');
    if (!selected) {
      alert("Pilih salah satu pilihan!");
      return;
    }
    emailInput();
    step = 4;
  } else if (step === 4) {
    const email = document.getElementById("email");
    if (!email.value.trim() || !email.value.includes("@")) {
      alert("Email tidak boleh kosong dan harus mengandung @!");
      return;
    }
    showResult();
    step = 5;
  }
}
function createInput() {
  const step2 = document.getElementById("step2");
  const inputJml = document.getElementById("jmlPilihan");

  step2.innerHTML = "";
  pilihan = [];

  for (let i = 0; i < inputJml.value; i++) {
    const input = document.createElement("input");

    input.type = "text";
    input.id = "pilihan" + i;
    input.placeholder = "Masukkan Pilihan " + (i + 1);

    input.addEventListener("change", function () {
      pilihan[i] = this.value;
    });

    step2.appendChild(input);
    step2.appendChild(document.createElement("br"));
  }
}

function checkList() {
  const step3 = document.getElementById("step3");
  step3.innerHTML = "";

  for (let i = 0; i < pilihan.length; i++) {
    const radio = document.createElement("input");
    const label = document.createElement("label");
    const wrapper = document.createElement("div");

    radio.type = "radio";
    radio.name = "pilihan";
    radio.value = pilihan[i];
    radio.id = "radio" + i;

    label.htmlFor = "radio" + i;
    label.textContent = pilihan[i];

    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "8px";

    wrapper.appendChild(radio);
    wrapper.appendChild(label);
    step3.appendChild(wrapper);
  }
}

function emailInput() {
  const step4 = document.getElementById("step4");
  step4.innerhtml = "";

  const label = document.createElement("label");
  const input = document.createElement("input");

  label.htmlFor = "email";
  label.textContent = "Email : ";

  input.type = "email";
  input.id = "email";
  input.placeholder = "Masukkan Email Anda";

  step4.appendChild(label);
  step4.appendChild(input);
}

function showResult() {
  const name = document.getElementById("Name").value;
  const inputJml = document.getElementById("jmlPilihan").value;
  const email = document.getElementById("email").value;
  const selected = document.querySelector(
    'input[name="pilihan"]:checked',
  ).value;

  const step5 = document.getElementById("step5");
  step5.innerHTML = "";

  const semuaPilihan = pilihan.join(", ");

  const hasil = document.createElement("p");
  hasil.textContent = `Halo, nama saya ${name},  Email saya ${email}. saya mempunyai sejumlah ${inputJml} Pilihan, yaitu ${semuaPilihan} dan saya memilih ${selected}`;

  step5.appendChild(hasil);
}
