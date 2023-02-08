import React from 'react'
import { Link } from 'react-router-dom';
import "./CollectionCard.scss";

function CollectionCard(props) {
    console.log(props.item);
  
  return (
    <div className="collection-card">
      <span className="collection-card-data">
        <p>{props.item}</p>
        <Link to={`/collection/${props.item}`}>View</Link>
      </span>
      {/* <Link to={`/collection/${category}`}>View</Link> */}
    </div>
  );
}

export default CollectionCard