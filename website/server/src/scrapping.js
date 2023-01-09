const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath } = require('puppeteer');
const { Browser } = require("puppeteer");
const fs = require("fs");

puppeteer.use(StealthPlugin());

/**
 * A function to scrape products from the reebok store.
 * We are using puppeteer-extra-plugin-stealth to scrape without being detected as a bot.
 * @param {String} shoesUrl the url of the reebok page
 */
const scrapeShoes = async (shoesUrl) => {
    const browser = await puppeteer.launch({
        executablePath: executablePath(),
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(shoesUrl);
    const cookiesButton = await page.waitForSelector('#glass-gdpr-default-consent-accept-button');
    await cookiesButton.click()

    const shoesData = await page.evaluate(() => {
        const getLinks = document.querySelectorAll('.glass-product-card__assets .glass-product-card__assets-link')
        const links = []
        for (let i = 0; i < getLinks.length; i++) {
            links.push(getLinks[i].href)
        }
        const getTitles = document.querySelectorAll('.glass-product-card__title')
        const titles = []
        for (let i = 0; i < getTitles.length; i++) {
            titles.push(getTitles[i].innerText)
        }
        const getColors = document.querySelectorAll('.dark-grey___6ysQv')
        const colors = []
        for (let i = 0; i < getColors.length; i++) {
            colors.push(getColors[i].innerText)
        }
        const getImgs = document.querySelectorAll('.glass-product-card__assets-link img')
        const imgs = []
        for (let i = 0; i < getImgs.length; i++) {
            imgs.push(getImgs[i].src)
        }

        const data = titles.map((title, index) => ({
            title: title,
            link: links[index],
            img: imgs[index],
            color: colors[index],
            price: ''
        }))
        return data;
    },)

    const prices = []
    for (let i = 0; i < shoesData.length - 1; i++) {
        await page.goto(shoesData[i].link)

        const price = await page.evaluate(() => {
            const convertPrice = (price) => {
                return parseFloat(price.replace('€', ''));
            }
            const data = convertPrice(document.querySelector('.gl-price-item').innerText)
            return data
        })
        prices.push(price)
    }

    prices.map((price, index) => {
        shoesData[index].price = price
    })

    await browser.close();

    fs.writeFile('shoesData.json', JSON.stringify(shoesData), (err) => {
        if (err) throw err;
        console.log('The file was saved!');
    });
}

module.exports = {
    scrapeShoes
}