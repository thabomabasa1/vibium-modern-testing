function expect(actual) {
  return {
    match(expected) {
      if (actual !== expected) {
        throw new Error(`Expected "${expected}" but got "${actual}"`)
      }
    },
    contains(text) {
      if (!actual.includes(text)) {
        throw new Error(`Expected "${actual}" to contain "${text}"`)
      }
    }
  }
}

module.exports = { expect }
