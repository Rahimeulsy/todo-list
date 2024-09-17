import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';//Bootstrap'in stil dosyasını import eder, böylece uygulama Bootstrap'in stillerini kullanır.

import { v4 as uuidv4 } from "uuid"; //uuid benzersiz ID'ler oluşturmak için kullanılır.

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false
  };
  handleChange = (e) => { //Kullanıcının giriş alanına yazdığı değeri item durumuna günceller. 
    this.setState({
      item: e.target.value, //yazılan değeri alır.
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); //form gönderildiğinde sayfanın yeniden yüklenmesini engeller.

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    this.setState({ //bileşenin durumunu (state) günceller.
      items: updatedItems,//items durumunu updatedItems dizisiyle günceller. Bu, yeni to-do öğesini mevcut listeye ekler.
      item: "",
      id: uuidv4(),
      editItem: false //Bu, düzenleme modundan çıkıldığını belirtir, yani yeni öğe eklenirken düzenleme modunu devre dışı bırakır.
    });
  };

  clearList = () => { //items dizisini temizler ve durumu günceller.
    this.setState({
      items: [],
    });
  };
  handleDelete = id => { //Belirli bir ID'ye sahip öğeyi siler. items dizisinde bu ID'yi içermeyen öğeleri filtreler ve durumu günceller.
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter((item) => item.id !== id); //dizideki tüm öğeleri dolaşır ve her bir öğenin id'sini kontrol eder.
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);

    this.setState({
      items:filteredItems,
      item: selectedItem.title,
      editItem: true,
      id:id

    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items} //gerekli propslar
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
