import { connect } from 'react-redux'
import Layer from '../components/Layer'

const visualize = (stream) => {
  WIDTH = canvas.width;
  HEIGHT = canvas.height;

  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount; // half the FFT value
  var dataArray = new Uint8Array(bufferLength); // create an array to store the data

  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

  function draw() {

    drawVisual = requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray); // get waveform data and put it into the array created above

    canvasCtx.fillStyle = 'rgb(200, 200, 200)'; // draw wave with canvas
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();

    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;

    for(var i = 0; i < bufferLength; i++) {

      var v = dataArray[i] / 128.0;
      var y = v * HEIGHT/2;

      if(i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();
  };

  draw();
}

const mapStateToProps = (state) => {
  return {
    source: state.audioSource.source
  }
}

const VisualLayer = connect(
  mapStateToProps,
  {}
)(Layer)

export default VisualLayer
