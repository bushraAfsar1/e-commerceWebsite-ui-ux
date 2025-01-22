import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser , faHeart} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

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


const ProductDetails = ({params}: {params : any}) => {
  // const router = useRouter();
  // const { id } = router.query;
  const p = product.find((prod) => prod.id === params.id);

  if (!p) return <p>Product not found</p>;

  return (
    <div>
      <div className='idProduct'>
    <Image className='idProImg' alt="pic" src={p.image} width={200} height={200} />
    <div className='idProduct2'>
    <h1 className='idProName'>{p.title}</h1>
    <p className='idProPrice'>Price: ${p.price}</p>
    <p className='idProDescription'>Description: {p.description}</p>
    <Link className="cart" href="/carts">Add to Cart</Link>
    <FontAwesomeIcon className='font fontid' icon={faHeart} size="sm" />
    </div>
  </div>
    </div>
  );
};

export default ProductDetails;
