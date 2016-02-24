import React, { PropTypes } from 'react'

const LayerStack = ({ layers }) => (
  <div className='mdl-card'>
    {layers.map(layer =>
      <Layer
        {...layer}
      />
    )}
  </div>
)

LayerStack.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default LayerStack
