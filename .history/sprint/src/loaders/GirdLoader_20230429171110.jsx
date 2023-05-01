import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = ({ items }) => {
  return (
    <section class="collections">
      <h1>
        <Skeleton />
      </h1>
      <ul>
        {Array(items)
          .fill(0)
          .map((n, i) => (
            <li key={n._id}>
              <Skeleton height={400} />
              <as>
                <Skeleton style={{ marginTop: '-50' }} />
              </p>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default GridLoader
