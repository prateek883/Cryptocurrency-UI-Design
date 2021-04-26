import React from 'react'

/**
* @author
* @function TableRow
**/


// LTP = Last Trade Price
// BSP = Buy/Sell Price
const TableRow = (props) => {
    return (
        <>
            <tr>
                <td><h4 className="table-content">{props.sNo}</h4></td>
                <td><a href={props.link}><h4 className="table-content"><img src={props.imgSrc} alt={props.name}/> <span>{props.name} </span> </h4></a></td>
                <td><h4 className="table-content">₹ {props.LTP} </h4></td>
                <td><h4 className="table-content">{props.BSP} </h4></td>
                <td><h4 className={`table-content ${props.fontColor}`}>{props.difference} %</h4></td>
                <td><h4 className={`table-content ${props.fontColor}`}>{props.savings}</h4></td>
            </tr>
        </>
    )
}


export default TableRow