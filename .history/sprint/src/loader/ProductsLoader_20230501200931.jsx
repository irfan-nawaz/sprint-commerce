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
        <div className="articlewrap">
          {['a', 'b', 'c', 'd', 'e', 'f'].map((data) => (
            <>
              {/* <Skeleton height={'30vh'} width={'19vw'} />
              <span>
                <Skeleton height={'10vh'} width={'10vw'} />
              </span> */}

              <div
                className="container, main"
                style={{ border: `1px solid #e1e1e1` }}
              >
                  <figure className="content">
                    <img src={imgSrc} alt="shoe" />
                    <figcaption class="title">
                      <h3><></></h3>
                      <h5 class="product-description">{categoryName}</h5>
                    </figcaption>
                  </figure>
                <div class="about">
                    <h5 class="product-price">Price: ₹{price}</h5>
                  <StarsRating
                    classNamePrefix="size"
                    value={value}
                    onChange={(value) => {
                      setValue(value)
                    }}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsLoader
