import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class FileUploaderComponent extends React.Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      selectedFile: null
    }
  }

  onChangeHandler=event=>
  {
    console.log(event.target.files);
    this.setState({selectedFile: event.target.files[0]});
  }

  onClickHandler=()=>
  {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    console.log(data.getAll());
    console.log(this.state.selectedFile);
  }



  render()
  {
    return(<div class="container">
	<div class="row">
	  <div class="col-md-6">
	      <form method="post" action="#" id="#">




              <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file" name="file" onChange={this.onChangeHandler} class="form-control" multiple=""/>
              </div>
               <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </form>
	  </div>
	</div>
</div>)
  }
}

export default FileUploaderComponent;
