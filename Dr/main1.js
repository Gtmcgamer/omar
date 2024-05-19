const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const element = document.querySelector(href);
    const position = element.offsetTop;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});

// Function to generate days in a month
function generateCalendar() {
  const calendar = document.getElementById("calendar");

  // Get current month and year
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  // Get number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate calendar cells
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;
    dayCell.addEventListener("click", () => {
      const appointment = prompt(
        `Add appointment for ${month + 1}/${day}/${year}:`
      );
      if (appointment) {
        dayCell.textContent += `\n${appointment}`;
      }
    });
    calendar.appendChild(dayCell);
  }
}

// Initialize calendar on page load
window.onload = generateCalendar;
