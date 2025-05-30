import about1 from "../../assets/about1.png"; 
import about2 from "../../assets/about2.png"; 
import about3 from "../../assets/about3.png"; 
import front1 from "../../assets/front1.png"; 
import momo11 from "../../assets/momo11.png";
import momo12 from "../../assets/momo12.png";
function Three() {
  return (
    <div className="container mx-auto px-8">
      
      <div className="flex flex-col md:flex-row items-center my-10 relative">
        <div className="text md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Our momos are <span className="text-orange-500">made with love</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Vivamus aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
        <div className="image md:w-1/2 p-4">
          <img
            src={about1}
            alt="Made with Love"
            className="rounded-lg w-full"
          />
        </div>
        <div className="absolute mt-[450px] ml-[45%]">
          <img src={front1} alt="" className="w-52" />
        </div>

        
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center my-10 relative">
        <div className="text md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Taste the difference with <span className="text-orange-500">our handcrafted momos</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Vivamus aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
        <div className="image md:w-1/2 p-4">
          <img
            src={about2}
            alt="Handcrafted Momos"
            className="rounded-lg w-full"
          />
        </div>
        <div className="absolute mt-[450px] mr-[45%]">
          <img src={momo11} alt="" className="w-52" />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center my-10 relative">
        <div className="text md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Our momos are the perfect blend of <span className="text-orange-500">tradition and innovation</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Vivamus aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
        <div className="image md:w-1/2 p-4">
          <img
            src={about3}
            alt="Tradition and Innovation"
            className="rounded-lg w-full"
          />
        </div>
        <div className="absolute mt-[500px] ml-[45%]">
          <img src={momo12} alt="" className="w-52" />
        </div>
      </div>
    </div>
  )

}

export default Three