document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    email: e.target.email.value,
    message: e.target.message.value
  };
  
  fetch("https://script.google.com/macros/s/AKfycbxtR2tc3TLiJgoi2a1sfIoGqtilptzdPehGckFdC09QfLT5a68-0eV9RkVbogZ66mBd/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("response").innerText = "Message sent successfully!";
    e.target.reset();
  })
  .catch(err => {
    document.getElementById("response").innerText = "Error sending message.";
  });
});
