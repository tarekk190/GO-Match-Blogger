self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});

self.addEventListener("fetch", (e) => {
  // الحدث ده مطلوب وأساسي عشان المتصفح يظهر نافذة التثبيت
});
