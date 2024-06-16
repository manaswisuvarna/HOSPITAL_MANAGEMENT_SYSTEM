import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis sequi sed quisquam cumque, esse voluptatem eius excepturi illo fuga facilis quas repudiandae ullam magni atque consequatur iure, non, hic porro rerum. Earum at totam porro iste ad nostrum aliquid soluta temporibus deserunt, dolores vel omnis est, culpa consequatur pariatur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloribus delectus iusto, hic cupiditate est nisi, id, voluptatem consequatur saepe recusandae. Laudantium, odio dolorum molestiae commodi sequi earum magni sed, ad minus accusamus, exercitationem animi veritatis ullam fuga maxime? Rerum?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quis tempore dolore.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default Biography
