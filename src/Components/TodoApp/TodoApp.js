import React, { Component } from 'react'
import Action from '../Action/Action';
import Header from '../Header/Header'
import List from '../List/List';

export default class TodoApp extends Component {
    constructor(props){
        super(props);

        this.clearAll = this.clearAll.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.errMsg = this.errMsg.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items:[],
            error: ''
        }
    }

    componentDidMount(){
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        if(items){
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.items.length !== this.state.items.length){
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items',json);
        }
    }

    errMsg(item){

        if(!item){
            return 'Add new item!'
        }else if(this.state.items.indexOf(item) > -1){
            return 'You entered this item before!'
        }

        this.setState((prevState)=>{
            return{
                items: prevState.items.concat(item)
            }
        })
    }

    onSubmitForm(e){
        e.preventDefault();

        const item = e.target.txtItem.value.trim();
        const err = this.errMsg(item)

        this.setState({
            error: err
        })
        
        e.target.txtItem.value='';
    }

    deleteItem(item){
        this.setState((prevState)=>{
            const arr = prevState.items.filter((i)=>{
                return item !== i;
            })

            return{
                items: arr
            }
        })
    }

    clearAll(){
        this.setState({
            items: []
        })
    }
  render() {
      const app = {
          title: 'Todo Application',
          desc: 'Create new list.'
      }
    return (
      <>
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <Header title={app.title} desc={app.desc}/>
                </div>
                <div className="card-body">
                    <List items={this.state.items} deleteItem={this.deleteItem}/>
                    {this.state.items.length > 0 
                    ?
                    ''
                    :
                    <div className='alert alert-warning'>Add item to start</div>
                    }
                    <div className='list-group-item mt-2'>Item length: {this.state.items.length}</div>
                </div>
                <div className="card-footer">
                    {this.state.error && <p className='text-danger'>{this.state.error}</p>}
                    <Action items={this.state.items} clearAll={this.clearAll} onSubmitForm={this.onSubmitForm}/>
                </div>
            </div>
        </div>
      </>
    )
  }
}