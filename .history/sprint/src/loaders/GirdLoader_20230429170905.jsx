import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = ({ items }) => {
  return (
    <section class="collections">
      <h1>
        <Skeleton />
      </h1>
      <ul>
        {Array().map((n, i) => (
          <li key={n._id}>
            <Skeleton height={400} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GridLoader
