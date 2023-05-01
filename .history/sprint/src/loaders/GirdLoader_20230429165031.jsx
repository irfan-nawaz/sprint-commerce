import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default GridLoader = () => {
  return (
    <section class="collections">
      <h1>
        <Skeleton />
      </h1>
      <ul>
        {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
          <li key={n._id}>
            <Skeleton height={400} className="figure" />
          </li>
        ))}
      </ul>
    </section>
  )
}
