if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    console.log('Instalasi service worker sukses:', registration)
  }, function (error) {
    console.log('Instalasi service worker gagal:', error)
  })
} else {
  console.log('Service worker tidak didukung.')
}