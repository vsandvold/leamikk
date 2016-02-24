import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Microphone from '../src/components/Microphone'

function setup() {
  let props = {
    onConnectMicrophoneClicked: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Microphone {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('Microphone', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('button')
      expect(output.props.className).toBe('mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent')
    })

    it('should call onConnectMicrophoneClicked when clicked', () => {
      const { output, props } = setup()
      expect(props.onConnectMicrophoneClicked.calls.length).toBe(0)
      output.props.onClick()
      expect(props.onConnectMicrophoneClicked.calls.length).toBe(1)
    })
  })
})
