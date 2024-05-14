import Land from "../assets/landing.png";
import Down from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-red-600">
          Let's Go for Nutritions Food Today
        </h1>
        <span className="text-xl">It is Just a Click Away !</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={Land} />
        <div className="flex flex-col items-center justify-center gap-4 text-center mx-auto">
          <span className="font-bold text-3xl tracking-tighter">
            Lets Connect Here
          </span>
          <span>Download our App For Personalized Recomondation</span>

          <img src={Down} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
