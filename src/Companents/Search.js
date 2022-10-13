import React from "react";

export default class Search extends React.Component {
  state = {
    search: 'madagascar',
    value: 'all'
  }

  inputKey = (e) => {
    if (e.key === 'Enter') {
    console.log(this.state.value);
      this.props.moviesSearchName(this.state.search, this.state.value);
    }
  }

  submiHandlar = () => {
    console.log(this.state.value);
    this.props.moviesSearchName(this.state.search, this.state.value)
  }

  hendelOption = (e) => {
    this.setState(() => ({value: e.target.value}))
  }

  render() {
    return (
      <div className="container d-flex w-75 mt-3">
        <div>
          <select 
          className="form-select w-100" 
          aria-label="Default select example" 
          value={this.state.value} 
          onChange={this.hendelOption}>
            <option selected hidden>Movies Type</option>
            <option  value="all">All</option>
            <option  value="movies">Movies only</option>
            <option  value="series">Series only</option>
          </select>
        </div>

        <input
          type="text"
          value={this.state.search}
          onChange={(e) => (this.setState({ search: e.target.value }))}
          id="inputPassword5"
          class="form-control w-50 ms-5"
          onKeyDown={this.inputKey}
          aria-describedby="passwordHelpBlock" />
        <button
          className="btn btn-secondary"
          onClick={this.submiHandlar}>
          Submit
        </button>
      </div>
    )
  }
}