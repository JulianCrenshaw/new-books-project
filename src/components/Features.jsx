import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Book from './ui/Book'
import { books } from '../data'

const Features = () => {
  console.log( books )
  return (
<section id="features">
  <div className="container">
    <div className="row">
      <h2 className="section__title">
        Features <span className="blue">Books</span>
      </h2>
      <div className="books">
       <Book />
       <Book />
       <Book />
       <Book />
      </div>
    </div>
  </div>
</section>
  )
}

export default Features
