const puppeteer = require('puppeteer');
 
(async () => {
  // 50 kez tekrarlanacak döngü
  for (let i = 0; i < 50; i++) {
    // Yeni tarayıcı başlatıldı
    const browser = await puppeteer.launch({
      headless: 'new',
      // headless: true (default) enables old Headless;
      // headless: 'new' enables new Headless;
      // headless: false enables “headful” mode.
    });
   
    // Yeni sayfa açıldı
    const page = await browser.newPage();
 
    // Dosya yüklendi
    await page.goto("https://www.wattpad.com/1404950334-alpha-predator-%E9%A1%B6%E7%BA%A7%E6%8E%A0%E9%A3%9F%E8%80%85-bl-%E2%99%A1-1-b%C3%B6l%C3%BCm-%E2%99%A1");
    const süre = await page.evaluate(() => {
      return Math.floor(Math.random() * 10) + 1;
     
    });
    const delayInMilliseconds = süre*500; // 1-10 arası saniye
    await page.evaluate(delay => {
      return new Promise(resolve => {
        setTimeout(resolve, delay);
      });
    }, delayInMilliseconds);
    console.info('Test successful.');
    // Tarayıcıyı kapatıldı
    await browser.close();
  }
})();
