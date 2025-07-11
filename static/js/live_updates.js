setInterval(() => {
  fetch('/api/emails/')
    .then(res => res.json())
    .then(data => {
      console.log("Update emails:", data);
      // update DOM dynamically
    });
}, 5000);