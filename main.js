let layer = [1, 2, 1]
updateLayerDisplay()

/**
 * Handle the click of a sign button, to change the index of the current pascal's triangle layer by one more or one less
 * @param {string} sign - The sign of the button click e.g. + or -
 */
function handleSignClick(sign) {
  if (sign === '+') layer = computeNextLayer(layer)
  else layer = computePreviousLayer(layer)

  updateLayerDisplay()
}

/**
 * Update the display given the global layer information
 */
function updateLayerDisplay() {
  document.getElementById('power').innerHTML = layer.length - 1
  document.getElementById('display').innerHTML = generateRemarkableIdentityFromPascalLayer(layer)
  console.log(generateRemarkableIdentityFromPascalLayer(layer))
}

/**
 * Get the remarkable identity to display given a pascal's triangle layer
 * @param {number[]} layer 
 */
function generateRemarkableIdentityFromPascalLayer(layer) {
  const termsArray = []

  for (let i = 0; i < layer.length; i++) {
    let term = `<div class="coeff">${layer[i].toString().length > 7 ? layer[i].toExponential(5) : layer[i]}</div>`

    term += '<div class="powers">'
    if (i !== 0) term += `<span class="b-power">b${i !== 1 ? `<sup>${i}</sup>` : ''}</span>`
    if (layer.length - i - 1 !== 0) term += `<span class="a-power">a${layer.length - i - 1 !== 1 ? `<sup>${layer.length - i - 1}</sup>` : ''}</span>`
    term += '</div>'

    term = '<div class="term">' + term + '</div>'

    termsArray.push(term)
  }

  return termsArray.join('')
}

/**
 * Compute a given pascal's triangle layer
 * @param {number} layerNumber - The power of the layer we want to work out, a + b ^ 0 i.e. 0 is the first layer
 */
function computeLayer(layerNumber) {
  let currentLayerNumber = 0
  let currentLayer = [1]

  while (currentLayerNumber < layerNumber) {
    currentLayer = computeNextLayer(currentLayer)
    currentLayerNumber++
  }

  return currentLayer
}

/**
 * Compute the next layer of the pascal's triangle given the current layer
 * @param {number[]} currentLayer - The current layer computed, stored in memory
 */
function computeNextLayer(currentLayer) {
  const nextLayer = [1]

  for (let i = 1; i < currentLayer.length; i++) {
    nextLayer.push(currentLayer[i] + currentLayer[i - 1])
  }

  nextLayer.push(1)

  return nextLayer
}

/**
 * Compute the previous layer of the pascal's triangle given the current layer
 * @param {number[]} currentLayer - The current layer computed, stored in memory
 */
function computePreviousLayer(currentLayer) {
  const previousLayer = [1]

  for (let i = 1; i < currentLayer.length - 1; i++) {
    previousLayer.push(currentLayer[i] - previousLayer[i - 1])
  }

  return previousLayer
}
