const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch("https://your-worker.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      status.innerText = "Отправлено!";
      form.reset();
    } else {
      status.innerText = "Ошибка отправки";
    }

  } catch {
    status.innerText = "Ошибка сети";
  }
});