import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = ({ items }) => {
  return (
    <section class="collections">
      <h1>
        <Skeleton width=1.8 rem} height={60} />
      </h1>
      <ul>
        {Array(items)
          .fill(0)
          .map((n, i) => (
            <li key={n._id}>
              <Skeleton height={400} />
              <Skeleton style={{ padding: '50' }} />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default GridLoader