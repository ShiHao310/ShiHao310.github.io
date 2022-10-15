/*
script file use to register service worker
*/

 // Check if service worker are support by web browser
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW registration failed");
        console.log(error);
    });
}
else {
    console.log("Application not supported");
}