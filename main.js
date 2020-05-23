let layer = [1]

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    appendLayerToDocument(layer)
    layer = computeNextLayer(layer)
  }, i * 100)
}

function appendLayerToDocument(layer) {
  const layerElement = document.createElement('p')
  layerElement.innerHTML = layer
  document.querySelector('body').appendChild(layerElement)
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
 * @param {number} currentLayer - The current layer computed, stored in memory
 */
function computeNextLayer(currentLayer) {
  const nextLayer = [1]

  for (let i = 1; i < currentLayer.length; i++) {
    nextLayer.push(currentLayer[i] + currentLayer[i - 1])
  }

  nextLayer.push(1)

  return nextLayer
}
