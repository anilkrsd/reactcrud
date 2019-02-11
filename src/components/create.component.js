import React, {Component} from 'react';
import axios from 'axios';

class Create extends Component {
    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBussinessName = this.onChangeBussinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            personName : '',
            bussinessName : '',
            gstNumber:''
        }
    }

    onChangePersonName(e) {
        this.setState({
            personName : e.target.value
        });
    }
    onChangeGstNumber(e) {
        this.setState({
            gstNumber : e.target.value
        });
    }

    onChangeBussinessName(e) {
        this.setState({
            bussinessName : e.target.value
        }); 
    }
    
    onSubmit(e) {
        e.preventDefault();
        const {
            personName,
            bussinessName,
            gstNumber
        } = this.state;

        let dataObject = {
            personName,
            bussinessName,
            gstNumber
        }
   
        axios.post("http://localhost:4000/business/add", dataObject).
        then((res) => {
            console.log(res);
        });

        this.setState({
            personName : '',
            bussinessName : '',
            gstNumber : ''
        });
    }

    render() {

        const {
            personName,
            bussinessName,
            gstNumber
        } = this.state;

        return(
            <div style={{marginTop:10}}>
            <h3>Add New Bussiness</h3>
               <form>
                    <div className="form-group">
                        <label>Add Person Name: </label>
                        <input type="text" value={personName} onChange={this.onChangePersonName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Bussiness Name:</label>
                        <input type="text" value={bussinessName} onChange={this.onChangeBussinessName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Gst Number:</label>
                        <input type="text" value={gstNumber} onChange={this.onChangeGstNumber} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" onClick={this.onSubmit} className="btn btn-primary" />
                    </div>
                </form> 
            </div>
        )
    }
}
export default Create;