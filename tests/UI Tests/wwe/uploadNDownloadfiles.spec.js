const { browser, test, expect } = require('@playwright/test');
const fs = require('fs')
const path = require('path');
test.describe('Automation - Working With Elements', () => {

    test('Playwright Test Case - upload file', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/upload')

        await page.locator('#file-upload').setInputFiles('./testData/files/Gemini_Generated_Image.png')

        await page.locator('#file-submit').click()

        await page.waitForTimeout(5000)

        //Import 


    })


    test('Playwright Test Case - upload file example 2 ', async ({ page }) => {

        await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')

        await page.locator('//input[@name="upfile"]').setInputFiles('./testData/files/B26 Automation - Playwright.txt')

        await page.locator('//input[@type="submit"]').click()
        await expect(page.getByText("The file's contents are:")).toBeVisible()

        await page.waitForTimeout(5000)

    })

    test('Upload Multiple files and assert', async ({ page }) => {

        await page.goto('http://blueimp.github.io/jQuery-File-Upload/')

        // await page.setInputFiles('input[type="file"]', [
        //     './testData/files/21. Test Design techniques.png',
        //     './testData/files/24. Example Defect.png'
        // ])

        await page.locator('input[type="file"]').setInputFiles(['./testData/files/Gemini_Generated_Image.png', './testData/files/filetwo.png'])

        await expect(page.locator('p.name').nth(0)).toHaveText('Gemini_Generated_Image.png')
        await expect(page.locator('p.name').nth(1)).toHaveText('filetwo.png')

        await page.waitForTimeout(5000)

    })

    test('Download a Single file and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('a[href="download/learn.jpg"]').click()
        ]);

        const suggestedFileName = download.suggestedFilename()
        const filePath = 'downloads/' + suggestedFileName
        await download.saveAs(filePath)
        expect(fs.existsSync(filePath)).toBeTruthy() // whether file is downloaded or not 

        //export files 
    })

    test('Download Multiple files and assert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download')

        const fileNames = ["LambdaTest.txt", "luminoslogo.png"]


        for (const fileName of fileNames) {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator(`text=${fileName}`).click()
            ]);
            const suggestedFileName = download.suggestedFilename()
            const filePath = 'downloads/' + suggestedFileName
            await download.saveAs(filePath)
            expect(fs.existsSync(filePath)).toBeTruthy()
        }
    })

    test('Direct Download and assert', async ({ page }) => {

        // Define the image URL
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbTezYange_PJP3KLcuf3kr6q_5uQtRt-IgMo9p8pvmC1gWMGF9-YcaAEGk4m7l95hzZkHfCcJQ5hMQrBU43CHg';

        // Fetch the image using Playwright's request API
        const response = await page.request.get(imageUrl);

        // Ensure the response is OK
        if (response.ok()) {
            // Get the image buffer
            const buffer = await response.body();

            // Define the 'downloads' folder path inside your project folder
            const downloadsFolder = path.join(__dirname + "/../..", 'downloads');
            // Check if 'downloads' folder exists, if not, create it
            if (!fs.existsSync(downloadsFolder)) {
                fs.mkdirSync(downloadsFolder, { recursive: true });
            }

            // Define the file name and path to save the image inside the 'downloads' folder
            const savePath = path.join(downloadsFolder, 'virat.jpg');

            // Write the buffer to a file
            fs.writeFileSync(savePath, buffer);
            console.log(`Image downloaded successfully and saved to ${savePath}`);
        } else {
            console.log(`Failed to download the image. Status code: ${response.status()}`);
        }
    })

    test('Direct Download and assert example 2', async ({ page }) => {

        // Define the image URL
        const imageUrl = 'https://m.media-amazon.com/images/I/71GXqew8QuL._SX522_.jpg';

        // Fetch the image using Playwright's request API
        const response = await page.request.get(imageUrl);

        // Ensure the response is OK
        if (response.ok()) {
            // Get the image buffer
            const buffer = await response.body();

            // Define the 'downloads' folder path inside your project folder
            const downloadsFolder = path.join(__dirname + "/../..", 'downloads');
            // Check if 'downloads' folder exists, if not, create it
            if (!fs.existsSync(downloadsFolder)) {
                fs.mkdirSync(downloadsFolder, { recursive: true });
            }

            // Define the file name and path to save the image inside the 'downloads' folder
            const savePath = path.join(downloadsFolder, 'raju_parrot.jpg');

            // Write the buffer to a file
            fs.writeFileSync(savePath, buffer);
            console.log(`Image downloaded successfully and saved to ${savePath}`);
        } else {
            console.log(`Failed to download the image. Status code: ${response.status()}`);
        }
    })



     test("Verify scrooling ", async ({page}) =>{

        await page.goto("https://www.flipkart.com/")

        await page.locator("//span[text()='Help Center']").click()
     })
    

})