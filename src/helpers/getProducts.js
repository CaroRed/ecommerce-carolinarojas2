const products = [
    { id: '1', name: 'Small MP3 Player Pro', cat: 'electro', description: 'lorem ipsum', stock: 50, price: 29.90, image: 'https://themes.woocommerce.com/storefront/wp-content/uploads/sites/78/2015/12/small-mp3-player.jpg?w=450&h=600&crop=1' },
    { id: '2', name: 'Pro Gaming Headset', cat: 'gamer', description: 'lorem ipsum', stock: 30, price: 50.00,image: 'https://themes.woocommerce.com/storefront/wp-content/uploads/sites/78/2015/11/orange-gaming-headset.jpg?w=450&h=600&crop=1'},
    { id: '3', name: 'Vintage Green Retro TV', cat: 'retro', description: 'lorem ipsum', stock: 20, price: 99.90,image: 'https://themes.woocommerce.com/storefront/wp-content/uploads/sites/78/2015/12/green-retro-tv-2.jpg?w=450&h=600&crop=1'},
    { id: '4', name: 'Retro Radio', cat: 'retro', description: 'lorem ipsum', stock: 5, price: 35.00,image: 'https://themes.woocommerce.com/storefront/wp-content/uploads/sites/78/2015/12/retro-radio.jpg?w=450&h=600&crop=1'},
  ];

  export const getProducts = new Promise((resolve, reject)=>{
      let condition = true
      if(condition){
        setTimeout(()=>{
            resolve(products)
        }, 3000)
      }else{
          reject('ha ocurrido un errror')
      }
  })