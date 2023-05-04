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
          {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((data) => (
            <>
              <div className="container, main">
                <section style={{ border: `1px solid #e1e1e1` }}>
                  <Skeleton height={'31vh'} width={'100%'}></Skeleton>
                  <Skeleton height={'3.5vh'} width={'16vw'}></Skeleton>
                  <Skeleton width={'6vw'}></Skeleton>
                  <h3>
                    <Skeleton height={'3vh'} width={'8vw'}></Skeleton>
                  </h3>
                  <Skeleton
                    height={'3vh'}
                    width={'10vw'}
                    style={{ marginBottom: '5px' }}
                  ></Skeleton>
                </section>
              </div>
              {/* </div> */}
            </>
          ))}
        </div>
      </section>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      </div>
    </div>
  )
}

export default ProductsLoader
