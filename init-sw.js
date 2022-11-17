if( typeof window !== "undefined" ) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
    // the sw.js will be created by workbox
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service worker registration succeeded:', registration);
      }, /*catch*/ (error) => {
        console.error(`Service worker registration failed: ${error}`);
      });
    });
  }
}