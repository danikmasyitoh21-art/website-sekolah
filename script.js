// Ambil tombol
const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Toggle Dark Mode';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '60px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.padding = '10px 15px';
  toggleBtn.style.zIndex = '1000';
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
// Fitur: Tombol kembali ke atas
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Fitur: Pencarian di halaman
document.getElementById("searchBtn").addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const contentSections = document.querySelectorAll(".content, .hero");

  if (!input) return;

  // Hapus highlight sebelumnya
  contentSections.forEach(section => {
    section.innerHTML = section.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");
  });

  let found = false;

  contentSections.forEach(section => {
    const regex = new RegExp(`(${input})`, "gi");

    if (regex.test(section.textContent)) {
      section.innerHTML = section.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
      found = true;
    }
  });

  if (!found) {
    alert("Kata tidak ditemukan di halaman.");
  }
});
