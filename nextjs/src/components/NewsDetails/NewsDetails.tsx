import React from 'react';

interface ImageValue {
  src: string;
  alt: string;
}

interface FieldValue {
  value: string | ImageValue;
}

interface Fields {
  BlogTitle: FieldValue;
  Description: FieldValue;
  Image: FieldValue;
}

interface NewsDetailsProps {
  fields: Fields;
}

const NewsDetails = (props: NewsDetailsProps) => {
  console.log('BlogDetails props:', props);
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <div className="row align-items-center p-2">
        <div className="col-md-6 text-center">
          <h1 className="display-5">{props.fields.BlogTitle.value.toString()}</h1>
          <p className="lead">{props.fields.Description.value.toString()}</p>
        </div>
        <div className="col-md-6 ">
          <img
            src={(props.fields.Image.value as ImageValue).src}
            alt={(props.fields.Image.value as ImageValue).alt}
            className="img-fluid rounded-start-circle"
            style={{ width: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};
export default NewsDetails;
