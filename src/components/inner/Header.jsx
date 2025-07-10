import React from 'react'

const Header = () => {
    return (
        <div class="row my-3 mx-2 rounded bg-primary" id='header'>
            <div class="col-7 d-flex flex-column justify-content-center px-sm-5 px-2">
                <div class="display-1 fw-bolder text-light">MEN'S</div>
                <div class="display-1 fw-bolder text-dark">Shoe Collections</div>
            </div>
            <div class="col-5">
                <img class="img-fluid py-5" src="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/shoe1.png" alt="Shoe"></img>
            </div>
        </div>
    )
}

export default Header