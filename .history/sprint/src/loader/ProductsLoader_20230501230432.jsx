import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductsLoader = () => {
  return (
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
                  <div
                    style={{
                      // display: 'inline-block',
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      height: '25px',
                      minWidth: '8px',
                      margin: '5px 0',
                    }}
                  >
                    <Skeleton
                      count={1}
                      height="100%"
                      duration={0.9}
                      style={{
                        clipPath:
                          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      }}
                    />
                    <Skeleton
                      count={1}
                      height="100%"
                      duration={0.9}
                      style={{
                        clipPath:
                          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      }}
                    />
                    <Skeleton
                      count={1}
                      height="100%"
                      duration={0.9}
                      style={{
                        clipPath:
                          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      }}
                    />
                    <Skeleton
                      count={1}
                      height="100%"
                      duration={0.9}
                      style={{
                        clipPath:
                          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      }}
                    />
                    <Skeleton
                      count={1}
                      height="100%"
                      duration={0.9}
                      style={{
                        clipPath:
                          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      }}
                    />
                  </div>
                </section>
              </div>
              {/* </div> */}
            </>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsLoader
