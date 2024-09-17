import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const {title, handleDelete, handleEdit}=this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
//list-group-item: Bootstrap'teki liste grubu stilini uygular.
//text-capitalize: Yazının her kelimesinin ilk harfini büyük yapar.
//d-flex: Flexbox düzeni kullanır, bu sayede içerikler yatay olarak hizalanır.
//justify-content-between: Flexbox'ta içeriğin iki uca yayılmasını sağlar (başlık sola, ikonlar sağa).
//my-2: Yukarıdan ve aşağıdan marjin (boşluk) ekler.
//todo-icon: Bir div oluşturur ve içerisine düzenleme ve silme ikonlarını yerleştirir. 
// fas fa-pen: Font Awesome kütüphanesinden bir kalem (pen) ikonu ekler.
// fas fa-trash: Font Awesome kütüphanesinden bir çöp kutusu (trash) ikonu ekler.