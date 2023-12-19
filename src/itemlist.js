import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3000/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleAddItem = () => {
   
    const newItem = { name: 'New Item', description: 'Description' };
    axios.post('http://localhost:3000/api/items', newItem)
      .then(response => {
        console.log(response.data);
        
      })
      .catch(error => {
        console.error('Error creating item:', error);
      });
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.description}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ItemList;
