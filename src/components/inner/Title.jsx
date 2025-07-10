import React from 'react'

const Title = (props) => {
    return (
        <div className='container-fluid p-3'>
            <div className='row text-center'>
                <h1 className='fs-2 fw-bolder'>{props.heading}</h1>
                <p>{props.subheading}</p>
            </div>
        </div>
    )
}

export default Title