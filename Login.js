const { link } = require('fs');
const { resolve } = require('path');
const puppeteer = require('puppeteer');


(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const closeOldPages = async() => {
        await page.close()
    }

    page.setViewport({ width: 1280, height: 720 });

    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle2' });

    // Sai định dạng email
    await page.type('#email', 'phuong123');
    await page.type('#password', '111');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);

    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")

    // Email bỏ trống
    await page.type('#email', '');
    await page.type('#password', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);

    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")

    // Password bỏ trống
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);

    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")


    // Email không hợp lệ
    await page.type('#email', 'phuong1234567@gmail.com');
    await page.type('#password', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);

    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")


    // Password không hợp lệ
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '1211112223');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);

    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")


    // Email và mật khẩu hợp lệ
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);




})();