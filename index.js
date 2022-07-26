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
    .action(async (str, options) => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(str)
        await page.screenshot({path: options.output})

        await browser.close()
    })

program.parse()