import React,{useState, useContext} from 'react'
import { UserContext } from '../Api/context/AppContext'
const Categories = () => {
    // const { cardItem, setCardItem, product, setProduct } = useContext(UserContext)

    return (

        <div className='container  '>
            <div className='d-flex '>
                <div className='' style={{ width: "300px", heigth: "300px", border: "2px solid red" }}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem error odio pariatur et esse quae laudantium,
                        ipsum iure non sequi, eaque labore? Ad molestiae vel
                        nostrum non suscipit quaerat eveniet!</p>
                </div>
                <div className='' style={{ width: "300px", heigth: "300px", border: "2px solid red" }}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem error odio pariatur et esse quae laudantium,
                        ipsum iure non sequi, eaque labore? Ad molestiae vel
                        nostrum non suscipit quaerat eveniet!</p>
                </div>
                <div className='' style={{ width: "300px", heigth: "300px", border: "2px solid red" }}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem error odio pariatur et esse quae laudantium,
                        ipsum iure non sequi, eaque labore? Ad molestiae vel
                        nostrum non suscipit quaerat eveniet!</p>
                </div>
            </div>
        </div>

    )
}

export default Categories