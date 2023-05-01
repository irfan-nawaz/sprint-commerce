import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GridLoader = () => {
  return (
    <section class="collections">
      <h1>
        <Skeleton />
      </h1>
      <ul>
        {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
          <li key={n._id}>
            <Skeleton height={400} className="figure">
              <Skeleton count={5} />
            </Skeleton>
          </li>
        ))}
      </ul>
    </section>

    // <div>
    //   <section class="collections">
    //     <h2>
    //       <Skeleton />
    //     </h2>
    //     <ul>
    //       {['a', 'b', 'c', 'd', 'e', 'f'].map((n, i) => (
    //         <li key={n._id}>
    //           <figure className={`color${i}`}>
    //             <Skeleton height={400} className="figure" />
    //             <figcaption>
    //               <p>
    //                 <Skeleton />
    //               </p>
    //             </figcaption>
    //           </figure>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </div>
  )
}

export default GridLoader
