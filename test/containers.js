import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ConnectedMicrophoneContainer, { MicrophoneContainer } from '../src/containers/MicrophoneContainer'
import Microphone from '../src/components/Microphone'

function setup() {
  let props = {
    connectMicrophone: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<MicrophoneContainer {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('containers', () => {
  describe('MicrophoneContainer', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe(Microphone)
    })

    it('should pass on connectMicrophone', () => {
      const { output, props } = setup()
      expect(output.props.onConnectMicrophoneClicked).toBe(() => props.connectMicrophone)
    })
  })
})
