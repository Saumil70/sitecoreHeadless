import React from 'react'

// Define the type for the fields within each item
interface Field {
  Name: {
    value: string;
  };
}

// Define the type for each item
interface Item {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: Field;
}

// Define the type for the fields containing the items array
interface Fields {
  items: Item[];
}

// Define the type for the props
interface ProductsProps {
  fields: Fields;
}

function Products(props: ProductsProps) {
  console.log(props);
  const { fields } = props;
  const { items } = fields;
  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {items.map((field: any, index: number) => (
          <li key={index}>
            <h3>{field.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products
