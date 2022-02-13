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

    await page.goto('http://localhost:3000/signup', { waitUntil: 'networkidle2' });

    //Không nhập bất kì thông tin
    await page.type('#hoten', '');
    await page.type('#email', '');
    await page.type('#password', '');
    await page.type('#repassword', '');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")

    //Họ Tên bỏ trống
    await page.type('#hoten', '');
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '111111');
    await page.type('#repassword', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")

    // Email bỏ trống
    await page.type('#hoten', 'phuong');
    await page.type('#email', '');
    await page.type('#password', '111111');
    await page.type('#repassword', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")

    // Mật khẩu bỏ trống
    await page.type('#hoten', 'phuong');
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '');
    await page.type('#repassword', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")

    // Xác nhận mật khẩu bỏ trống
    await page.type('#hoten', 'phuong');
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '111111');
    await page.type('#repassword', '');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")


    // Mật khẩu và xác nhận mật khẩu không trùng khớp
    await page.type('#hoten', 'phuong');
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '111111');
    await page.type('#repassword', '111222');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")

    // Mật khẩu nhỏ hơn 6 kí tự
    await page.type('#hoten', 'phuong');
    await page.type('#email', 'phuong123@gmail.com');
    await page.type('#password', '111');
    await page.type('#repassword', '111');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.evaluate(() => document.getElementById("hoten").value = "")
    await page.evaluate(() => document.getElementById("email").value = "")
    await page.evaluate(() => document.getElementById("password").value = "")
    await page.evaluate(() => document.getElementById("repassword").value = "")

    // Email bị trùng

    await page.type('#hoten', 'Huỳnh Long');
    await page.type('#email', 'long2000@gmail.com');
    await page.type('#password', '111111');
    await page.type('#repassword', '111111');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.goto('http://localhost:3000/signup', { waitUntil: 'networkidle2' });

    await page.type('#hoten', 'Bùi Trúc Phương');
    await page.type('#email', 'phuong9xpro12345@gmail.com');
    await page.type('#password', '012345324');
    await page.type('#repassword', '012345324');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.goto('http://localhost:3000/signup', { waitUntil: 'networkidle2' });

    await page.type('#hoten', 'Vũ Quang Phi Long');
    await page.type('#email', 'vuquangphilong4561343@gmail.com');
    await page.type('#password', '3242457773443678888882');
    await page.type('#repassword', '3242457773443678888882');
    await page.keyboard.press('Enter');
    await page.waitFor(5000);
    await page.goto('http://localhost:3000/signup', { waitUntil: 'networkidle2' });


})();