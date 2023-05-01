import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = ({ items }) => {
  return (
    Array
    <section class="collections">
      <h1>
        <Skeleton />
      </h1>
      <ul>
        {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
          <li key={n._id}>
            <Skeleton height={400} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GridLoader
