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
            <Skeleton height={400} className="figure" />
            <div style={{ marginTop: '-50px', border: '2px solid black' }}>
              <Skeleton height={40} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GridLoader
