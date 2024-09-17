export default function CardLoading() {
  return (
    <div className="card is-loading border shadow-md rounded-md p-4 gap-3">
      <h2 className="h-8 w-2/3 element"></h2>
      <p className="h-8 element"></p>
      <div>
        <h3 className="h-4 w-1/4 element"></h3>
        <ul className="w-1/3">
          <li className="h-4 element"></li>
          <li className="h-4 element"></li>
        </ul>
      </div>
      <div className="w-2/5 flex gap-3">
        <button className="h-9 w-full element"></button>
        <button className="h-9 w-full element"></button>
      </div>
    </div>
  )
}
