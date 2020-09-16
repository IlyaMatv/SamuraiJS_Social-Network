import React from 'react'
import loader from '../../../assets/images/loader.svg'

const Preloader = (props) => {

    return (
        <div style={{ position: "absolute" }}>
            <img src={loader} />
        </div>
    )
}

export default Preloader