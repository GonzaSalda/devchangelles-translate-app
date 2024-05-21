import { Logo } from "./assets";
import InputCard from "./components/InputCard";
import OutputCard from "./components/OutputCard";
const App = () => {
  return (
    <div className="h-screen text-white p-[72px] bg-custom-grandient bg-no-repeat bg-cover bg-center flex flex-col justify-center max-sm:p-7">
      <div className="container">
        <div className="grid place-items-center">
          <img src={Logo} alt="Logo" className="w-[200px] h-auto" />
        </div>


         {/* cards */}
        <div className="grid grid-cols-2 gap-[14px]">
          <InputCard/>
          <OutputCard/>
        </div>
      </div>
     
    </div>
  );
};

export default App;
