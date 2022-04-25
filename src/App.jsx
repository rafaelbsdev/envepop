import { useState } from 'react';
import './App.css';

const App = () => {

  const [state, setState] = useState({
    inputs: {
      svg: '',
      color: '',
      previousColor: 'fill="#0052BC"'
    },
    controls: {
      showInputColor: false
    }
  })

  const handleLoadSvg = (e) => {
    e.preventDefault();
    const svgText = document.querySelector('#svgText');
    setState({ ...state, inputs: { ...state.inputs, svg: svgText.value }, controls: { ...state.controls, showInputColor: true } })
  }

  const setColor = () => {
    const { inputs } = state
    const { svg } = inputs
    const newSvg = svg.replace(state.inputs.previousColor, `fill="${state.inputs.color}"`)
    setState({ ...state, inputs: { ...state.inputs, svg: newSvg, previousColor: `fill="${state.inputs.color}"` } })
  }

  return (
    <div className="container-fluid py-5">
      <form onSubmit={handleLoadSvg}>
        <div className="row justify-content-center">
          <div className="col-6">
            Cole aqui seu SVG
            <textarea className='w-100' id="svgText"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-3">
            <button className='btn btn-secondary'>Carregar</button>
          </div>
        </div>
      </form>

      {state.controls && state.controls.showInputColor && (
        <div className="row mt-5 text-center">
          <div dangerouslySetInnerHTML={{ __html: state.inputs.svg }} />
          <div className="col text-center">
            Informe a cor <br />
            <input className='mt-2' type="text" onChange={(e) => setState({ ...state, inputs: { ...state.inputs, color: e.target.value } })} /> <br />
            <button className='btn btn-secondary mt-4' onClick={setColor}>Trocar cor</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App