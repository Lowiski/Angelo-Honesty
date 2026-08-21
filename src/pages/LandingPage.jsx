import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <div className="p-6">
        <h1 className="text-2xl font-bold justify-center">
          JanelJames
        </h1>
        <p className="text-gray-400">
          IT Student
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">

        <h2 className="text-5xl font-bold mb-4">
          Welcome to My Portfolio
        </h2>

        <p className="text-gray-400 mb-6">
          KAON, Angelo Diay!
    
        </p>
        <div className="text-center justify-item-center">

    
        <button
          onClick={() => navigate("/home")}
          className="bg-white text-black px-6 py-3 rounded-md"
        >
          Enter Portfolio
        </button>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;