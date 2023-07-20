import icon1 from "../../../../assets/icons/1.png";
import icon2 from "../../../../assets/icons/2.png";
import icon3 from "../../../../assets/icons/3.png";
import icon4 from "../../../../assets/icons/4.png";
const CoffeeCard = () => {
  return (
    <div className="bg-[color:#ECEAE3] p-7">
      <div className="flex mx-auto px-16 gap-5">
      
        <div className=" w-80 ">
          <img src={icon1}  alt="" />

          <div>
            <h2 className="card-title my-3">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee.
            </p>
          </div>
        </div>
        <div className=" w-80 ">
          <img src={icon2} alt="" />

          <div>
            <h2 className="card-title my-3">High Quality</h2>
            <p>
            We served the coffee to you maintaining the best quality            </p>
          </div>
        </div>
        <div className=" w-80 ">
          <img src={icon3} alt="" />

          <div>
            <h2 className="card-title my-3">Pure Grades</h2>
            <p>
            The coffee is made of the green coffee beans which you will love            </p>
          </div>
        </div>
        <div className=" w-80 ">
          <img src={icon4} alt="" />

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
