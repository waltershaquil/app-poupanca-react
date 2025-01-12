import { useEffect, useState } from "react";
import "./App.css";
import HeadertTop from "./components/HeaderTop";
import Months from "./components/months";
import { PartyPopper } from "lucide-react";

function App() {
  const [savings, setSavings] = useState(() => {
    // Load savings from localStorage, if available
    const savedData = localStorage.getItem("savings");
    return savedData
      ? JSON.parse(savedData)
      : [
          { Mes: "Janeiro", Goal: 300, Saved: 0, isCompleted: false },
          { Mes: "Fevereiro", Goal: 600, Saved: 0, isCompleted: false },
          { Mes: "Março", Goal: 900, Saved: 0, isCompleted: false },
          { Mes: "Abril", Goal: 1200, Saved: 0, isCompleted: false },
          { Mes: "Maio", Goal: 1500, Saved: 0, isCompleted: false },
          { Mes: "Junho", Goal: 1800, Saved: 0, isCompleted: false },
          { Mes: "Julho", Goal: 2100, Saved: 0, isCompleted: false },
          { Mes: "Agosto", Goal: 2400, Saved: 0, isCompleted: false },
          { Mes: "Setembro", Goal: 2700, Saved: 0, isCompleted: false },
          { Mes: "Outubro", Goal: 3000, Saved: 0, isCompleted: false },
          { Mes: "Novembro", Goal: 3300, Saved: 0, isCompleted: false },
          { Mes: "Dezembro", Goal: 3600, Saved: 0, isCompleted: false },
        ];
  });

  const [Total, setTotal] = useState([0]);
  const [Objectivo, setObjectivo] = useState(0);

  useEffect(() => {
    const totalSaved = savings.reduce((acc, value) => acc + value.Saved, 0);
    const totalGoals = savings.reduce((acc, value) => acc + value.Goal, 0);

    setObjectivo(totalGoals);
    setTotal(totalSaved);
    localStorage.setItem("savings", JSON.stringify(savings));
  }, [savings]);

  const calculateProgresso = (Saved, Goal) => {
    return Goal === 0 ? 0 : ((Saved / Goal) * 100).toFixed(2); // Prevent division by zero
  };

  const handleSavedChange = (mes, newSaved) => {
    setSavings((prevSavings) =>
      prevSavings.map((saving) =>
        saving.Mes === mes ? { ...saving, Saved: newSaved } : saving
      )
    );
  };

  return (
    <div>
      <HeadertTop />

      <div className="bg-teal-600 max-w-screen-xl min-h-screen p-6 rounded-md ">
        {Total >= Objectivo && (
          <div className="text-4xl font-bold items-center text-white justify-center text-center flex flex-row bg-amber-400 rounded-md p-3 my-4 ">
            <PartyPopper className="h-10 w-10 text-white" /> congradulation, you
            have reached your Goal
            <PartyPopper className="h-10 w-10 text-white" />
          </div>
        )}

        <Months
          savings={savings}
          calculateProgresso={calculateProgresso}
          handleSavedChange={handleSavedChange}
        />

        <br />
        <div className="flex justify-between items-center w-full">
          <div className="text-start font-bold text-4xl text-white">
            Total:
            <div className="text-white text-5xl">{Total} MZN</div>
          </div>
          <div className="text-end font-bold text-4xl text-white">
            Objectivo:
            <div className="text-white text-5xl">{Objectivo} MZN</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
