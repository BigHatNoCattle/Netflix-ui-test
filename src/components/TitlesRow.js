import React from 'react';
import Title from './Title';


const TitlesRow = ({ 
  categoryName, 
  titlesList, 
  edit, 
  editTitle, 
  submitEdit,
  users
}) => {

  const loggedInUser = users.map((list, i) => list.filter(user => user.isLoggedIn))[0][0];
  const { name } = loggedInUser;
  
  const prettifyCategory = (string) => {
    let newString = string.replace(/\b(\S)/g, (char) => (
      char === 'f' && string.match(/f(?=or)/)
      ?
      char
      :
      char.toUpperCase()
    ))

    if (string.toLowerCase().includes('continue watching')) {
      newString += ` ${name}`;
    }
    return newString;
  };

  console.log(loggedInUser);

  return (
    <li className="titles-row">
      <h1>
        {prettifyCategory(categoryName)}
      </h1>
      <ul className="titles-container">
        {
          titlesList.map(item => (
            <Title
              key={item.id}
              item={item}
              edit={edit}
              editTitle={editTitle}
              submitEdit={submitEdit}
            />
          ))
        }
      </ul>
    </li>
  )
};

export default TitlesRow;
