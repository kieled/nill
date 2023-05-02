function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function fromString(colors) {
  return {
    r: colors[0].replace(/\D/g, ''),
    g: colors[1].replace(/\D/g, ''),
    b: colors[2].replace(/\D/g, '')
  }
}

function generateTailwindColors(hex) {
  let color
  if (hex.split(' ').length === 3) {
    color = fromString(hex.split(' '))
  } else if (hex.indexOf('#') !== -1) {
    color = hexToRgb(hex)
  } else {
    color = fromString(hex.split(','))
  }
  const result = {}
  for (let i = 0; i <= 100; i += 10)
    result[i] = `rgba(${color.r}, ${color.g}, ${color.b}, ${i / 100})`
  return result
}

export default generateTailwindColors
