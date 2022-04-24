import React from 'react';
import './Card.css';
const PricelistCard = () => {
    return (
        <div className='pricelist__card'>
            <ol className='order__list'>
                <li> Shampoo With Any Hair Cut- 50-100</li>
                <li> Banks----------------------- 100</li>
                <li> Front Layer------------------ 250</li>
                <li> Hair trims (Only Stroal) ------- 200</li>
                <li> Rahul Cut-------------------- 300</li>
                <li> U Cut----------------------- 450</li>
                <li> V Cut------------------------ 350</li>
                <li> Deep U Cut------------------ 350</li>
                <li> DainaCut-------------------- 400</li>
                <li> Thai Cut-------------------- 500</li>
                <li> Boy cut---------------------- 400</li>
                <li> Blunt cut-------------------- 600 </li>
            </ol>
        </div>
    );
};

export default PricelistCard;