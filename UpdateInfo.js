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


    await page.type('#email', 'long@gmail.com');
    await page.type('#password', '111111');
    await page.keyboard.press('Enter');

    await page.waitFor(2000);

    await page.goto('http://localhost:3000/profile', { waitUntil: 'networkidle2' });
    await page.waitFor(2000);

    // Xoá dữ liệu sdt, diachi và namsinh
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra dữ liệu rỗng
    await page.type('#sdt', '');
    await page.click('#nam');
    await page.type('#diachi', '');
    await page.type('#namsinh', '');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra số điện thoại không được bỏ trống
    await page.type('#sdt', '');
    await page.click('#nam');
    await page.type('#diachi', 'KTX Đại học Tôn Đức Thắng');
    await page.type('#namsinh', '10/27/2000');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra địa chỉ không được bỏ trống
    await page.type('#sdt', '0919123456');
    await page.click('#nam');
    await page.type('#diachi', '');
    await page.type('#namsinh', '10/27/2000');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra năm sinh không được bỏ trống
    await page.type('#sdt', '0919123456');
    await page.click('#nam');
    await page.type('#diachi', 'KTX Đại học Tôn Đức Thắng');
    await page.type('#namsinh', '');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '091');
    await page.click('#nam');
    await page.type('#diachi', 'KTX Đại học Tôn Đức Thắng');
    await page.type('#namsinh', '01/01/2000');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin

    await page.type('#sdt', '0204322424');
    await page.click('#nu');
    await page.type('#diachi', '1223, Nguyễn Hữu Cảnh');
    await page.type('#namsinh', '03/09/1999');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '0912342342');
    await page.click('#nam');
    await page.type('#diachi', '12 Cách mạng tháng tám');
    await page.type('#namsinh', '01/01/2010');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '03123577');
    await page.click('#nam');
    await page.type('#diachi', 'KTX Đại học Tôn Đức Thắng');
    await page.type('#namsinh', '12/29/2001');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '09199999932');
    await page.click('#nam');
    await page.type('#diachi', '122 Phạm Hùng');
    await page.type('#namsinh', '10/02/1999');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '0913242423');
    await page.click('#nu');
    await page.type('#diachi', '89 Nguyễn Hữu Thọ');
    await page.type('#namsinh', '01/11/1990');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")


    // Kiểm tra thông tin
    await page.type('#sdt', '099230232');
    await page.click('#nam');
    await page.type('#diachi', '99 Nguyễn Thị Thập');
    await page.type('#namsinh', '11/11/1980');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '084212245');
    await page.click('#nam');
    await page.type('#diachi', '1002 Nguyễn Thị Thập');
    await page.type('#namsinh', '11/19/1999');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '04233566');
    await page.click('#nam');
    await page.type('#diachi', '192/23 Nguyễn Thị Thập');
    await page.type('#namsinh', '10/27/2002');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await page.evaluate(() => document.getElementById("sdt").value = "")
    await page.evaluate(() => document.getElementById("diachi").value = "")
    await page.evaluate(() => document.getElementById("namsinh").value = "")

    // Kiểm tra thông tin
    await page.type('#sdt', '099230232');
    await page.click('#nam');
    await page.type('#diachi', '99 Lê Văn Lương');
    await page.type('#namsinh', '11/11/2000');
    await page.keyboard.press('Enter');
    await page.waitFor(3000);

})();