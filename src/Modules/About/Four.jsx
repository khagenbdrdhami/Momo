import girlas from "../../assets/girlas.png";
import blur from "../../assets/blur.png";
function Four() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[500px] bg-gray-50">
      <div
        className="w-[60%] p-8 flex flex-col  justify-center bg-gray-900 text-white"
        style={{
          backgroundImage: `url(${blur})`,
        }}
      >
        <p className="text-2xl italic px-10 mb-6 ">
          <svg  
          className="mb-5"
            width="48"
            height="38"
            viewBox="0 0 48 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24.8514C0 30.9228 2.37838 34.7817 7.13514 36.4282C8.43243 36.9427 9.83784 37.2 11.3514 37.2C15.6757 37.2 18.8108 35.2448 20.7568 31.3344C21.5135 29.8938 21.8919 28.3502 21.8919 26.7037C21.8919 22.2788 19.7838 19.1402 15.5676 17.288C14.7027 16.9793 13.8919 16.722 13.1351 16.5162C10.5405 15.7958 9.18919 14.561 9.08108 12.8116C9.18919 9.72448 11.1892 6.22573 15.0811 2.31535L11.8378 0C5.35135 6.48299 1.51351 13.5834 0.324324 21.3012C0.108108 22.5361 0 23.7195 0 24.8514ZM26.1081 24.8514C26.1081 30.9228 28.4865 34.7817 33.2432 36.4282C34.5405 36.9427 35.9459 37.2 37.4595 37.2C41.7838 37.2 44.9189 35.2448 46.8649 31.3344C47.6216 29.8938 48 28.3502 48 26.7037C48 22.2788 45.8919 19.1402 41.6757 17.288C40.8108 16.9793 40 16.722 39.2432 16.5162C36.6487 15.7958 35.2973 14.561 35.1892 12.8116C35.2973 9.72448 37.2973 6.22573 41.1892 2.31535L37.9459 0C31.4595 6.48299 27.6216 13.5834 26.4324 21.3012C26.2162 22.5361 26.1081 23.7195 26.1081 24.8514Z"
              fill="white"
            />
          </svg>
          Momo is not just about sustenance, it's about bringing people together
          and creating memories. At our restaurant, we strive to create a warm
          and inviting atmosphere where our guests can enjoy delicious momos,
          great company, and unforgettable experiences.
        </p>
        <h4 className="text-2xl px-10 font-bold">Marcus Schleifer</h4>
        <p className="text-2xl px-10 font-bold">CEO</p>
      </div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${girlas})`,
        }}
      ></div>
    </div>
  );
}

export default Four;
