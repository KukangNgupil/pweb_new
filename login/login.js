document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-group li");
  const tabContents = document.querySelectorAll(".tab-content > div");
  const inputs = document.querySelectorAll("input, textarea");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      tabContents.forEach((content) => content.classList.remove("active"));
      tabContents[index].classList.add("active");

      // Panggil fungsi untuk mengatur label saat pergantian tab
      updateLabels();
    });
  });

  // Tambahkan event listener untuk setiap input
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      // Tambahkan class active pada label saat input mendapatkan fokus
      input.previousElementSibling.classList.add("active");
    });

    input.addEventListener("blur", function () {
      // Hapus class active dari label saat input kehilangan fokus, jika tidak ada nilai di dalam input
      if (input.value === "") {
        input.previousElementSibling.classList.remove("active");
      }
    });
  });

  // Fungsi untuk mengatur label saat halaman dimuat
  function updateLabels() {
    inputs.forEach((input) => {
      if (input.value !== "") {
        input.previousElementSibling.classList.add("active");
      }
    });
  }

  // Panggil fungsi untuk mengatur label saat halaman dimuat
  updateLabels();
});
