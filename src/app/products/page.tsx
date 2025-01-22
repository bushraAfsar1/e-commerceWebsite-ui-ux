import Image from 'next/image';
import Link from 'next/link';
function Products() {
  let product = [
    {
      id: '1',
      title: ' HAIRY sofa',
      price: 190,
      image:'/images/blacksofa.png',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '2',
      title: 'Potty Table',
      price: 1560,
      image: '/images/ChairBrown.png',
      description: 'This is the second product. It is amazing!',
    },
    {
      id: '3',
      title: 'Pookie bed',
      price: 10050,
      image: '/images/Chair.png',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '4',
      title: 'Brown Table',
      price: 50000,
      image: '/images/threeSeaterSofa.png',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '5',
      title: 'Brown Table',
      price: 50000,
      image: '/images/whiteSofa.jpg',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '6',
      title: 'Brown Table',
      price: 50000,
      image: '/images/twoSeaterofa.png',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '7',
      title: ' HAIRY sofa',
      price: 190,
      image:'/images/blacksofa.png',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '8',
      title: 'Potty Table',
      price: 1560,
      image: '/images/ChairBrown.png',
      description: 'This is the second product. It is amazing!',
    },
    {
      id: '9',
      title: 'Pookie bed',
      price: 10050,
      image: '/images/Chair.png',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '10',
      title: 'Brown Table',
      price: 50000,
      image: '/images/threeSeaterSofa.png',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '11',
      title: 'Brown Table',
      price: 50000,
      image: '/images/whiteSofa.jpg',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '12',
      title: 'Brown Table',
      price: 50000,
      image: '/images/twoSeaterofa.png',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },

 
  ]
    return (
      <div >
       <div className='prodPage'>
        <div className='bgImg'></div>
      <h1 className='productH bg-text'>Products</h1>
      <div className='products'>
        {product.map((prod, i)=>(
            <div className='oneP'  key={i}>
              <Image className='pImg' src={prod.image}
              width={200}
              height={200}

              alt="prod" />
                <p className='prodT'> {prod.title}</p>
                <p className='prodP'> ${prod.price}</p>
                <Link className='prodD' href={`/products/${prod.id}`}>
                View Details
                </Link>
              </div>
        ))}
      </div>
    </div>
      </div>
    );
  }
  export default Products