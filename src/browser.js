const fs = require('fs')
const { browserSync } = require('vibium')

class Browser {
  constructor() {
    this.vibe = null
  }

  launch() {
    this.vibe = browserSync.launch()
  }

  go(url) {
    this.vibe.go(url)
  }

  find(selector) {
    return this.vibe.find(selector)
  }

  screenshot(name) {
    const png = this.vibe.screenshot()
    fs.writeFileSync(`resources/screenshots/${name}.png`, png)
  }

  quit() {
    this.vibe.quit()
  }
}

module.exports = Browser
