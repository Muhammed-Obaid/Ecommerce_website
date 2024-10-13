import { useEffect, useState } from 'react'
import Product from '../products/Product'
import EComNav from './EComNav'
import EComFooter from './EComFooter'
import { useCart } from '../CartProvider'
import Footer from './Footer'
import Banner from './Banner'
import NewArrival from './NewArrival'
import img from '../images/newt.jpg'
import discount from '../images/discount.png'
import banner from '../images/banner3.avif'
import phoneData from '../mobiles'
import MobileNav from './MobileNav'


const Ecommerce = () => {
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('mobile')
  const [items, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  const { setCartItem, } = useCart()
  let getData = async () => {
    try {
      let url = 'https://fakestoreapi.com/products'
      let res = await fetch(url)
      let data = await res.json()
      setItem([...data, ...phoneData])
      setLoading(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItem(savedCart);
  }, [])

  const addToCart = (selectedItem, id) => {
    const item = items.find((element) => element.id === id)
    if (!item) return
    setCartItem((prev) => {
      const filtered = prev?.some(element => element.id === item.id)
      if (filtered) return prev
      // else return [...prev, { ...item, quantity: 1 }]
      const updatedCart = [...prev, { ...item, quantity: 1 }];

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;
    })
  }

  const handleCategory = (category, itemType) => {
    setBrand(category)
    setType(itemType)
  }

  return (
    <>
      <EComNav />
      <Banner banner={banner} />
      <NewArrival img={img} title={'New Arrivals'} />
      {loading ? <div className='text-3xl font-bold ml-4'>loading....</div> :
        <div className='containerr'>
          {items.map((item, index) => {
            if (item.category === "men's clothing" || item.category === "jewelery") {
              return <Product item={item} id={item.id} addToCart={addToCart} key={index} />
            }
          })}
        </div>
      }
      <NewArrival img={discount} title={'Big Discount'} />
      <div className='containerr'>
        {items.map((item, index) => {
          if (item.category === "electronics" || item.category === "women's clothing") {
            return <Product item={item} id={item.id} addToCart={addToCart} key={index} />
          }
        })}
      </div>
      <h2 className='text-3xl font-bold mt-2'>Mobile Phones</h2>
      <div className='mobiles '>
        <MobileNav handleCategory={handleCategory} />
        <div className='mob-cont '>
          {items.map((item, index) => {
            return (item.type === type || item.category === brand) && <Product item={item} id={item.id} addToCart={addToCart} key={index} />
          })}
        </div>
      </div>
      <footer>
        <EComFooter />
        <Footer />
      </footer>
    </>
  )
}

export default Ecommerce
