import React from 'react';
import Link from 'next/link'; 

interface Field {
  Image: { value: { src: string; alt: string; width: string; height: string } };
  Description: { value: string };
  Category: { value: string };
  BlogTitle: { value: string };
}

interface Item {
  displayName: string;
  fields: Field;
  id: string;
  name: string;
  url: string;
}

interface NewsProps {
  fields: { items: Item[] };
}

const News: React.FC<NewsProps> = ({ fields }) => {
    console.log(fields)
  return (
    <div>
      <p className="text-center h1">{fields.items[0]?.fields.Category.value}</p>
      <div className="row d-flex align-items-center justify-content-center">
        {fields?.items?.map((item) => (
          <div key={item.id} className="card" style={{ width: '25rem', margin: '1rem' }}>
            <img
              src={item.fields.Image.value.src}
              alt={item.fields.Image.value.alt || 'Hello'}
              className="card-img-top mt-2"
              width={'100'}
            />
            <div className="card-body">
              <h5 className="card-title">{item.fields.BlogTitle.value}</h5>
              <p className="card-text">{item.fields.Description.value}</p>
              <Link href={item.url} className="btn btn-outline-success align-self-center">
                Go to blog
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
