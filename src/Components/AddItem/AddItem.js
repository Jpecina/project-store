import React , {Component} from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';

class AddItem extends Component{
    constructor(){
        super();
        this.state = {
            itemName :'',
            itemType:'',
            itemPrice:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleType = this.handleType.bind(this);
    }
    handleName(e){
        this.setState({itemName:e.target.value})
    }
    handlePrice(e){
        this.setState({itemPrice:e.target.value})
    }
    handleType(e){
        this.setState({itemType:e.target.value})
    }
    handleSubmit(){
        axios.post('/api/products/add',{
            itemName:this.state.itemName,
            itemType:this.state.itemType,
            itemPrice:this.state.itemPrice,
        }).then( response => console.log(response) )
    }


    render(){
        const mainPaperStyle = {
            height:'80vh',
            width: '60vw',
            backgroundColor: '#686358'
        }
        return(
            <Paper style = {mainPaperStyle} zDepth={4}>
                <div className="add-item-form">
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleName} />
                    </label>
                    <label>
                        Type:
                        <input type="text" name="type" onChange={this.handleType}/>
                    </label>
                    <label>
                        Price:
                        <input type="text" name ="price" onChange={this.handlePrice}/>
                    </label>
                    <button className = "Add-item-button" onClick={this.handleSubmit}>Add Item</button>
                </div>
            </Paper>
        )
    }
}

export default AddItem;