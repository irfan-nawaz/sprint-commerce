
export default GridLoader = () 

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