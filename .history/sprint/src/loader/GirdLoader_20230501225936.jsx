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
            <div style={{ marginTop: '-50px', bor}}>
              <Skeleton
                height={50}
                baseColor="#ffffff"
                highlightColor="#f7f6f1"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GridLoader
