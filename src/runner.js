const fs = require('fs')
const path = require('path')

const testsDir = path.join(__dirname, '../tests')

console.log('Running Vibium Tests...\n')

fs.readdirSync(testsDir).forEach(file => {
  if (file.includes('test.js')) {
    console.log(`${file}`)
    require(path.join(testsDir, file))
  }
})

console.log('All tests completed')
