function generateTailwindColors(r, g, b) {
  const result = {}
  for (let i = 0; i <= 100; i += 10)
    result[i] = `rgba(${r}, ${g}, ${b}, ${i / 100})`

  return result
}

module.exports = generateTailwindColors
