import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = () => {
  return (
    <section class="collections">
      <h1>
        <Skeleton width={'30vw'} height={'1.8rem'} />
      </h1>
      <ul>
        {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
          <li key={n._id}>
            <Skeleton height={350} className="figure" />
            <div>
              <Skeleton height={50} 
                                    baseColor="#ebab34"
                      // highlightColor="#f2cb07" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GridLoader
