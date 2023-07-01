import React from 'react'
import imagen1 from '../assets/f.png'
import imagen2 from '../assets/i.png'
import imagen3 from '../assets/t.png'
import Card from './Card'
const cards = [
    {
        id:1,
        title: 'Facebook',
        image: imagen1,
        texto: "descripcion",
        url:"https://www.facebook.com/"
    },
    {
        id:2,
        title: 'Instagram',
        image: imagen2,
        texto: "descripcion",
        url:"https://www.instagram.com/"
    },
    {
        id:3,
        title : 'Twitter',
        image: imagen3,
        texto: "descripcion",
        url:"https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des"
    }
 
]
export default function Cards() {
    const divs = cards.map((data, index) =>
    // <div key={index} className={data.class} sample={data.sample}  id={data.id}>
    
    <div key={index} className='card col-3 mx-2'>
        <div>
            <img src={data.image} width='200'  alt={data.title} />
            <h4 className='my-3'>{data.title}</h4>
            <p> { data.texto }</p>

            <button className='mb-3'>
                <a href={data.url} target='_blank' className='p-2'>ABRIR</a>
            </button>
      
        </div>
      
    </div>
  );

  return (
    <div className='container'>
        <div className='d-flex justify-content-around'>
            {divs}
           
        </div>
    </div>
  )
}