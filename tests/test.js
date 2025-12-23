const Browser = require('../src/browser')
const { expect } = require('../src/assertions')

const browser = new Browser()

try {
  browser.launch()

  browser.go('https://example.com')
  console.log('Loaded example.com')

  browser.screenshot('homepage')

  const link = browser.find('a')
  console.log('Found link:', link.text())

  expect(link.text()).contains('Learn more')

  link.click()
  console.log('Clicked link')

  browser.screenshot('after-click')

} catch (error) {
  console.error('Test failed:', error.message)
} finally {
  browser.quit()
}
