import React from 'react';
import TitleForm from './TitleForm';


const Title = ({ 
  item, 
  edit, 
  editTitle, 
  submitEdit 
}) => (
  <li className="title">
    <TitleForm 
      item={item} 
      editTitle={editTitle} 
      edit={edit} 
      submitEdit={submitEdit}
    />
    <img className="box-art" src={item.img} alt={`${item.title} box art`} />
  </li>
);

export default Title;
