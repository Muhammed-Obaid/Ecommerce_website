import './MobileNav.css'

const MobileNav = ({ handleCategory }) => {
  return (
    <div className='mobile-nav'>
      <h2 className='text-xl font-bold'>Brands</h2>
      <div className="brand-buttons">
        <button onClick={() => handleCategory('iphone', 'iphone')}>Apple</button>
        <button onClick={() => handleCategory('samsung', 'samsung')}>Samsung</button>
        <button onClick={() => handleCategory('vivo', 'vivo')}>Vivo</button>
        <button onClick={() => handleCategory('oppo', 'oppo')}>Oppo</button>
        <button onClick={() => handleCategory('all', 'mobile')}>All</button>
      </div>
    </div>
  )
}

export default MobileNav
