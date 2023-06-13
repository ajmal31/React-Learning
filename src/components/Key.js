import React, { useState } from 'react';

const Key = () => {
  const data = [
    { id: 1, name: 'laptop', brand: 'Dell', qty: 1 },
    { id: 2, name: 'laptop', brand: 'msi', qty: 2 },
    { id: 3, name: 'laptop', brand: 'mac', qty: 3 },
  ];
  const [items, setItem] = useState(data);

//   const changeQty = (id) => {
//     const newItem = items.map((item) =>
//       item.id === id ? { ...item, qty: item.qty + 1 } : item
//     );
//     setItem(newItem);
//   };

const changeQty=(id)=>{

    const newItem=items.map((index)=>{

       if(index.id===id){
          return {...index,qty:index.qty+1}

       }else{
        return index
       }
    
    })
     setItem(newItem)
}


  return (
    <div>
      {items.map((item) => 
        <div className="bg-success text-white m-3" key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.brand}</h1>
          <h1>{item.qty}</h1>
          <button onClick={() => changeQty(item.id)} type="button">
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Key;
