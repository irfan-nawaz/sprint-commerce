import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = () => {
  return (
    // <section class="collections">
    //   <h1>
    //     <Skeleton />
    //   </h1>
    //   <ul>
    //     {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
    //       <li key={n._id}>
    //         <Skeleton height={400} className="figure" />
    //       </li>
    //     ))}
    //   </ul>
    // </section>

    <div>
      <section class="collections">
        <h2>Shop by Category</h2>
        <ul>
          {['a', 'b', 'c', 'd', 'e', 'f'].data.map((n, i) => (
            <li key={n._id}>
              <figure className={`color${i}`}>
                <img src={n.imgSrc} alt="category" />
                <figcaption>
                  <p
                    }}
                  >
                    {n.categoryName}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default GridLoader
