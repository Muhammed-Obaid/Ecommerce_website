import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useCart } from '../CartProvider';

const EComNav = () => {
    const { cartItem } = useCart()
    return (

        <header className=' border-slate-200'>
            <div className='nav fixed bg-slate-400 z-10 top-0'>
                <h1 className='font-bold text-xl'>ShopPo</h1>
                <div className='search bg-white shadow-sm rounded-md'>
                    <input type="text" placeholder='search...' />
                    <SearchIcon sx={{ color: 'blue', }} />
                </div>
                <div className='icons'>
                    <Link> <Button>
                        <PersonIcon sx={{ color: 'blue' }} />
                    </Button></Link>
                    <Link to='/cart' className='relative'>
                        <Button >
                            <ShoppingCartCheckoutIcon sx={{ color: 'blue' }} />
                            {cartItem?.length
                                ?
                                <p className='absolute'>{cartItem.length}</p>
                                : ''
                            }
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default EComNav
