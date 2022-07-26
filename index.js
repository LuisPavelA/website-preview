import puppeteer from "puppeteer"
import { Command } from "commander"

// Commander Setup
const program = new Command()

program
    .name("website-preview-tool")
    .description("Preview a website")
    .version("1.0.0")

program.command('preview')
    .description('Preview a website')
    .argument('<string>', 'website to preview')
    .option('-o, --output <string>', 'the output file', 'website_preview.png')
    .option('-h, --height <number>', 'the height of the page', "1080")
    .option('-w, --width <number>', 'the width of the page', "1920")
    .action(async (str, options) => {
        const browser = await puppeteer.launch({
            defaultViewport: {
                width: parseInt(options.width, 10),
                height: parseInt(options.height, 10)
            }
        })
        const page = await browser.newPage()
        await page.goto(str)

        await page.screenshot({path: options.output})

        await browser.close()
    })

program.parse()