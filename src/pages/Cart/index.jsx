import React from 'react'
import Subtitle from '../../components/SubTitle'
import Footer from '../../components/Footer'
import ChargerHeader from '../../components/Header'
import './cart.css'

const Cart = () => {
    return (
        <>
            <ChargerHeader />
            <div className='Cart'>
                <div className='cart_content'>
                    <div className='cart_main_content'>
                        <div className='cart_title'>
                            <Subtitle value='CART' className='cart_subvalue' />
                        </div>
                        <div className='cart_detail'>
                            <p className='detail_value'>YOUR CART IS EMPTY.</p>
                            <div className='cart_button'>
                                <button className='continue_shoppping'>CONTINUE SHOPPING</button>
                                <button className='sign_in'>SIGN IN</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default Cart