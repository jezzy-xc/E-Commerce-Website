import React, { useState, useEffect, useRef } from 'react';

const BazarKolkata = () => {
  const [products, setProducts] = useState([]);
  const productSectionRef = useRef(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // Smooth Scroll Function
  const scrollToShop = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#00070d] text-white min-h-screen font-sans selection:bg-[#e8c99a] selection:text-black">

      {/* Landing Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/ab/c1/89/abc18959591f814d848c02d7cebcd377.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
        </div>

        {/* Landing Nav */}
        <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-5 z-50">
          <div className="text-2xl font-bold tracking-tighter text-[#e8c99a]">
            BAZAR<span className="text-white">KOLKATA</span>
          </div>
          <ul className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.3em] font-medium">
            {['Collection', 'About', 'Contact'].map(item => (
              <li key={item} className="hover:text-[#e8c99a] cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
          <button className="border border-[#e8c99a] text-[#e8c99a] px-6 py-2 text-[11px] uppercase tracking-widest hover:bg-[#e8c99a] hover:text-black transition-all">
            Login
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10">
          <p className="text-[#e8c99a] text-[10px] md:text-[12px] tracking-[0.5em] uppercase mb-4 animate-pulse">Est. 2026 | Premium Quality</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            {/* Elevate Your */}
            Premium Choice<br />
            <span className="italic text-[#e8c99a]">
              {/* Style Heritage */}
              Bazarkolkata
            </span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToShop}
              className="bg-[#e8c99a] text-black px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-500 shadow-2xl"
            >
              Explore Collection
            </button>
            <button className="border border-white/30 backdrop-blur-md px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-500">
              Lorem
            </button>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToShop}>
          <i className="fas fa-chevron-down text-[#e8c99a]"></i>
        </div>
      </section>

      {/*  Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="text-xl font-black text-[#e8c99a] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            BAZAR<span className='text-white'>KOLKATA</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative group">
            {/*  Search Icon */}
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#e8c99a] transition-colors"></i>
            {/* Search Input  */}
            <input
              type="text"
              placeholder="Search for premium products..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-10 py-2 text-sm outline-none focus:border-[#e8c99a] focus:bg-white/10 transition-all"
            />

            {/*  Vertical Line & Filter Icon */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center h-5">
              {/* Vertical Divider Line */}
              <div className="w-[1px] h-full bg-white/10 mx-2"></div>

              {/* Filter Icon */}
              <div className="flex items-center justify-center w-6 h-6 cursor-pointer group/filter">
                <i className="fas fa-sliders-h text-xs text-gray-500 group-hover/filter:text-[#e8c99a] transition-colors"></i>
              </div>
            </div>
          </div>



          <div className="flex items-center gap-6">
            {/* Wishlist icon in Product Page Header */}
            <div className="relative cursor-pointer group">
              <i className="fas fa-heart text-xl group-hover:text-[#e8c99a] transition-colors"></i>
              <span className="absolute -top-2 -right-2 bg-[#e8c99a] text-black text-[10px] font-extrabold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                0
              </span>
            </div>
            {/*Cart Icon in Product Page Header */}
            <div className="relative cursor-pointer group">
              <i className="fas fa-shopping-bag text-xl group-hover:text-[#e8c99a] transition-colors"></i>
              <span className="absolute -top-2 -right-2 bg-[#e8c99a] text-black text-[10px] font-extrabold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                0
              </span>
            </div>
            {/*user Icon in Product Page Header */}
            <div className="hidden sm:block w-8 h-8 rounded-full bg-gradient-to-tr from-[#e8c99a] to-white cursor-pointer overflow-hidden border border-white/20">
              <img src="https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-1/669013349_959996649818100_412570935041372823_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4H2fTGTMO1sQ7kNvwGAjnh_&_nc_oc=AdpaCyt-Tkzaph75hRyvGCNasVIA12ol4juHE8p2TwYKr448sMGYgfYgRNvdW3q4F05z0YVeLAXplKlcJG-2tMdm&_nc_zt=24&_nc_ht=scontent.frdp4-1.fna&_nc_gid=XHnassq-RtVlf8pBINtNLA&_nc_ss=7b2a8&oh=00_Af6ss-TBdvs4WnKy1Xn8Gl2RpcmPmmYntAPxPBNSsoZhlA&oe=6A023352" alt="profile" />
            </div>
          </div>

        </div>
      </header>

      {/* Product Grid Section */}
      <main ref={productSectionRef} className="max-w-7xl mx-auto p-4 md:p-12 scroll-mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-serif text-white uppercase tracking-tighter">New Arrivals</h2>
            <div className="h-1 w-20 bg-[#e8c99a] mt-2"></div>
          </div>
          <p className="text-gray-500 text-sm max-w-[200px]">Showing the latest premium collection for 2026.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-[#0d1218] border border-white/5 rounded-2xl overflow-hidden flex flex-col group hover:border-[#e8c99a]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* PRoduct Image Container */}
              <div className="relative h-44 bg-white p-6 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain group-hover:scale-110 transition duration-700 ease-in-out" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[9px] font-bold text-white uppercase tracking-widest">
                  New
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center text-black hover:bg-[#e8c99a] transition-colors">
                  <i className="far fa-heart text-xs"></i>
                </button>
              </div>

              {/* product Info Section ["category", "title", "price", "rating"] */}
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-[9px] text-[#e8c99a] uppercase tracking-[0.2em] mb-1 font-bold">{product.category}</p>
                <h3 className="text-[13px] font-medium text-gray-200 truncate mb-3 group-hover:text-white transition-colors">{product.title}</h3>

                {/* Price & Rating [*/}
                <div className="flex flex-col gap-1 mb-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#e8c99a] text-xl font-black tracking-tighter">
                        ${product.price}
                      </span>
                      <span className="text-[10px] text-gray-500 line-through font-medium opacity-60">
                        ${(product.price * 1.5).toFixed(2)}
                      </span>
                    </div>
                    {/* Rating Badge */}
                    <div className="flex items-center bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                      <i className="fas fa-star text-[8px] text-[#e8c99a] mr-1"></i>
                      <span className="text-[10px] font-bold text-gray-300">{product.rating?.rate}</span>
                    </div>
                  </div>

                  {/* Savings Tag */}
                  <p className="text-[9px] text-green-500/80 font-bold uppercase tracking-widest">
                    Save 33% OFF
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-1.5 mt-auto">
                  {/* Cart Button */}
                  <button className="flex items-center justify-center w-10 h-8 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all group/btn">
                    <i className="fas fa-cart-plus text-[10px] group-hover/btn:text-[#e8c99a]"></i>
                  </button>

                  {/* Buy Now Button */}
                  <button className="flex-1 bg-[#e8c99a] text-black text-[9px] h-8 rounded-md hover:bg-white transition-all uppercase font-black tracking-tighter shadow-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer  */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-gray-600 text-[11px] uppercase tracking-[0.3em]">© 2026 Bazar Kolkata - Premium Lifestyle</p>
      </footer>
    </div>
  );
};

export default BazarKolkata;