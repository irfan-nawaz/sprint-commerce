import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductsLoader = () => {
  return (
    // <section class="collections">
    //   <h1>
    //     <Skeleton width={'30vw'} height={'1.8rem'} />
    //   </h1>
    //   <ul>
    //     {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
    //       <li key={n._id}>
    //         <Skeleton height={400} className="figure" />
    //       </li>
    //     ))}
    //   </ul>
    // </section>


<div class="products-container">
<section id="cards">
    womens
  </button>
  <div className="articlewrap">
    {result.map((data) => (
      <ProductCard data={data} />
    ))}
  </div>
</section>
</div>
  )
}

export default ProductsLoader
