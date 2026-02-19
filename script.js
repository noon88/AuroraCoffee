function switchTab(button, id) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach(c => c.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }

  button.classList.add("active");
}

function scrollToSection() {
  const tabsSection = document.querySelector(".tabs");
  if (tabsSection) {
    tabsSection.scrollIntoView({ behavior: "smooth" });
  }
}