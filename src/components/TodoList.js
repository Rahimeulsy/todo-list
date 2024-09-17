import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => { //her öğe için bir işlem gerçekleştirir ve bir liste oluşturur.
          return (<TodoItem 
          key={item.id} //her bir öğeyi benzersiz bir şekilde tanımlamak için key özelliği kullanılır.
          title={item.title}
          handleDelete={()=> handleDelete(item.id)} //öğeyi silme işlemini gerçekleştirmek için bir fonksiyon (prop) olarak gönderilir.
          handleEdit={()=> handleEdit(item.id)}//belirli bir öğeyi düzenler.
          />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
          >
          clear list
        </button>
      </ul>
    );
  }
}
