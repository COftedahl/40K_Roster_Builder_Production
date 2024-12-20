if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service_worker.js").then(registration => {
    console.log("Service Worker Registered");
  }).catch(error => {
    console.log("Service Worker Registration Failed");
  });
}
else {
  console.log("Service Worker Not Supported");
}