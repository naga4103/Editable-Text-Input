import {Component} from 'react'

import './index.css'

class EditText extends Component {
  state = {text: '', isClicked: false}

  submitForm = event => {
    event.preventDefault()
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onClickEdit = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderParaEdit = () => {
    const {text} = this.state
    return (
      <div className="para-edit-container">
        <p className="para">{text}</p>
        <button
          type="button"
          className="save-button"
          onClick={this.onClickEdit}
        >
          Edit
        </button>
      </div>
    )
  }

  renderInputSave = () => {
    const {text} = this.state

    return (
      <div>
        <input
          type="text"
          placeholder="Enter Text"
          className="input-text"
          onChange={this.onChangeInput}
          value={text}
        />
        <button
          type="button"
          className="save-button"
          onClick={this.onClickSave}
        >
          Save
        </button>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-button-container">
            <form className="form-container" onSubmit={this.submitForm}>
              {isClicked ? this.renderParaEdit() : this.renderInputSave()}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditText
