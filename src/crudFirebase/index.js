import React from 'react'
import { StartFirebase } from '../firebase'
import { ref, set, get, update, remove, child } from "firebase/database";


export class Crud extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            db:'',
            username: '',
            fullname: '',
        }
        this.interface = this.interface.bind(this)
    }

    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        return(
            <>
                <label>Ingresa el usuario</label>
                <input type='text' id='userbox' value={this.state.username} onChange={e => {this.setState({username: e.target.value})}}/>
                <label>Ingresa el nombre</label>
                <input type='text' id='userbox' value={this.state.fullname} onChange={e => {this.setState({fullname: e.target.value})}}/>
                <br/>

                <button id='addBtn' onClick={this.interface}>Add data</button>
                <button id='updateBtn' onClick={this.interface}>Update data</button>
                <button id='deleteBtn' onClick={this.interface}>Delete data</button>
                <button id='selectData' onClick={this.interface}>Get data</button>          
            </>
        )
    }

    interface(event){
        const id= event.target.id;

        if(id == 'addBtn'){
            this.insertData();
        }

        else if(id == 'updateBtn'){
            this.updateData();
        }

        else if(id == 'deleteBtn'){
            this.deleteBtn();
        }

        else if(id == 'selectData'){
            this.selectData();
        }
        
    }

    getAllInputs(){
        return {
            username: this.state.username,
            fullname: this.state.fullname,
        }
    }

    insertData(){

        const db= this.state.db;
        const data= this.getAllInputs();
        set(ref(db, 'Customer/mago/'+data.username),
        {
        Fullname: data.fullname
        })
        .then(() => {alert('Agregado correctamente')})
        .catch((error)=> {alert('A ocurrido el error: '+error)})
    }

    updateData(){

        const db= this.state.db;
        const data= this.getAllInputs();
        set(ref(db, 'Customer/mago/'+data.username),
        {
        Fullname: data.fullname
        })
        .then(() => {alert('Agregado correctamente')})
        .catch((error)=> {alert('A ocurrido el error: '+error)})
    }
}