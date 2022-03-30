import React from 'react';
import './Recipe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpLong} from '@fortawesome/free-solid-svg-icons'

function Recipe() {
  return (
    <footer>
        <section className='recipe__top'>
            
        <div className='arrow'><FontAwesomeIcon icon={faArrowUpLong} /></div>
        <p className='username'>by User123</p>
        </section>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, minus officia? Necessitatibus exercitationem esse ea, sapiente et nostrum vel velit fugiat non, praesentium, aperiam consequuntur voluptates sunt aspernatur at! Excepturi deleniti ea sed quaerat non possimus suscipit tempora, quae, quasi blanditiis quia vel. Quos veniam harum eligendi illo minus necessitatibus laudantium ipsa quod voluptatem? Suscipit voluptates aspernatur culpa, vel minus provident, enim, id harum ipsa facilis alias blanditiis voluptatum praesentium hic. Odit in veniam blanditiis voluptatibus, dignissimos aut nemo! Omnis recusandae corporis ipsum minima ab distinctio aliquid a, numquam inventore. Possimus assumenda modi nemo quidem, dolore temporibus dolor quo sed incidunt id eius, earum voluptate doloribus voluptas corrupti ab impedit. Repudiandae, animi repellat quo exercitationem officiis rem similique rerum provident, molestias facere omnis sunt architecto. Possimus labore voluptatem quisquam mollitia voluptas sint facilis vitae, ut voluptate quo eos adipisci soluta omnis atque sunt! Maiores saepe, eligendi voluptates vero minus optio cupiditate ad aut rem repellat dolorem corrupti velit a quos pariatur distinctio nam. Numquam laudantium nobis fugit dignissimos id, asperiores hic sequi est minus porro consequuntur, minima doloremque similique esse earum eum necessitatibus natus cumque. Possimus, animi? Reiciendis distinctio ducimus vel sequi in ipsum blanditiis autem fugit eveniet, modi nulla?</p>
    </footer>
  )
}

export default Recipe;