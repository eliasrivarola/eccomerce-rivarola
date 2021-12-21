import React from 'react'

function ItemListConteiner(props) {
    console.log(props)
    return (
        <div>
            {props.greeting}
        </div>
    )
}

export default ItemListConteiner
