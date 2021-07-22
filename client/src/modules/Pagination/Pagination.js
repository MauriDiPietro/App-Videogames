import React from 'react';
import './Pagination.css'

function Pagination ({gamesPerPage, totalGames, paginate}) {
const pageNumbers= [];

for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
}



    return (
        <nav className='paginacion'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={()=> paginate(number) }  href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;