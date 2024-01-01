function Card() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1603808033596-5d1fa1629eae?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body 800px:p-4">
        <h2 className="card-title">
          <div className="badge badge-neutral p-4 rounded-lg uppercase">
            no brand
          </div>
          <div className="badge badge-primary">NEW</div>
        </h2>
        <h1 className="font-bold text-2xl">$800</h1>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <p className="text-sm font-light text-gray-400">2 weeks ago</p>
      </div>
    </div>
  );
}

export default Card;
