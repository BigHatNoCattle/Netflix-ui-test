import React, { useState } from 'react'
import TitlesRow from './TitlesRow';


const TitlesGrid = ({ categories, users }) => {
  const [ rows, setRows ] = useState(categories);
  const [ edit, setEdit ] = useState({
    id: null,
    title: '',
  });

  const editTitle = (value) => {
    if (!value) {
      return;
    }
    const updatedTitles = rows.map(([ name, contentList ]) => {
      const newContentList = contentList.map(item => {
        const { id, img } = item;
        if (id === value.id) {
          return {
            title: value.title,
            id,
            img,
          }
        }
        return item; 
      });

      return [ name, newContentList ];
    });

    setRows(updatedTitles);
  }

  const submitEdit = (value) => {
    editTitle(value);
    
    setEdit({ 
      id: null,
      title: ''
    });
  };

  return (
    <ul className='titles-grid'>
      {
        rows.map(([ categoryName, titlesList ]) => (
          <TitlesRow
            key={categoryName} 
            categoryName={categoryName}
            titlesList={titlesList}
            editTitle={editTitle}
            submitEdit={submitEdit}
            edit={edit}
            users={users}
          />
        ))
      }
    </ul>
  )
}

export default TitlesGrid;
