
const CoffeeCard = () => {
  return (
    <div className="bg-[color:#ECEAE3] p-7">
      <div className="flex mx-auto px-16 gap-5">
      
        <div className=" w-80 ">
          <img src="https://i.ibb.co/Ns9gwy1/1.png"  alt="" />

          <div>
            <h2 className="card-title my-3">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee.
            </p>
          </div>
        </div>
        <div className=" w-80 ">
          <img src="https://i.ibb.co/jM3Cqw6/2.png" alt="" />

          <div>
            <h2 className="card-title my-3">High Quality</h2>
            <p>
            We served the coffee to you maintaining the best quality            </p>
          </div>
        </div>
        <div className=" w-80 ">
          <img src="https://i.ibb.co/qYC027h/3.png" alt="" />

          <div>
            <h2 className="card-title my-3">Pure Grades</h2>
            <p>
            The coffee is made of the green coffee beans which you will love            </p>
          </div>
        </div>
        <div className=" w-80 ">
          <img src="https://i.ibb.co/MCcFfxR/4.png" alt="" />

          <div>
            <h2 className="card-title my-3">Proper Roasting</h2>
            <p>
            Your coffee is brewed by first roasting the green coffee beans            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;
