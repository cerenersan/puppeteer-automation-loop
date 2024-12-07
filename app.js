const puppeteer = require('puppeteer');
 
(async () => {
  // 50 kez tekrarlanacak döngü
  for (let i = 0; i < 100; i++) {
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

    await page.goto("web sitesinin linkini giriniz");
    const süre = await page.evaluate(() => {
      return Math.floor(Math.random() * 10) + 1;
     
    });
    const delayInMilliseconds = süre*50; // 1-10 arası saniye
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
