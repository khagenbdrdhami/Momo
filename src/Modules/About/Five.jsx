
import about111 from "../../assets/about111.png"; 
import about222 from "../../assets/about222.png"; 
import about333 from "../../assets/about333.png"; 
function Five() {
  return (
    
      <div className="bg-gray-50 py-10 gap-y-8">
        <div className="container mx-auto px-4 text-center">
          
          <h2 className="text-3xl font-bold mb-2">
            Meet The <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-teal-700 mb-6">
            Our talented team members who deliver only the best results
          </p>
  
        
          <div className="flex ml-40 gap-x-32 ">
          
          <div
            
            style={{
              backgroundImage:  `url(${about111})`,
            }}
             className="bg-white bg-cover bg-center rounded-lg shadow-lg h-[400px] w-[300px]">
              
              
              
                <h4 className="text-lg font-bold text-white text-center mt-[360px] ">
                  Head Chef
                </h4>
              
            </div>
  
            
            <div
            
            style={{
              backgroundImage:  `url(${about222})`,
            }}
             className="bg-white bg-cover bg-center rounded-lg shadow-lg h-[400px] w-[300px]">
              
              
              
                <h4 className="text-lg font-bold text-white text-center mt-[360px] ">
                  Assistant Chef
                </h4>
              
            </div>
  
            
            <div
            
            style={{
              backgroundImage:  `url(${about333})`,
            }}
             className="bg-white bg-cover bg-center rounded-lg shadow-lg h-[400px] w-[300px]">
              
              
              
                <h4 className="text-lg font-bold text-white text-center mt-[360px] ">
                  Assistant Chef
                </h4>
              
            </div>
          </div>
  
          
          <div className="flex items-center justify-center">
            <span className="text-gray-600 text-sm mr-4">01 / 05</span>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                &lt;
              </button>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Five