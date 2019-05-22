const lightenColor = hexColor => {
  // return hexColor + "88"

  const r = parseInt(hexColor.substring(1, 3), 16)
  const g = parseInt(hexColor.substring(3, 5), 16)
  const b = parseInt(hexColor.substring(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, .3)`
}

export { lightenColor }
