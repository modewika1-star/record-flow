import { useEffect, useRef, useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");

  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem("rows");
    return saved ? JSON.parse(saved) : [];
  });

  const nameRef = useRef(null);
  const jobRef = useRef(null);
  const ageRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  // 👇 auto focus حسب الـ step
  useEffect(() => {
    if (step === 1) nameRef.current?.focus();
    if (step === 2) jobRef.current?.focus();
    if (step === 3) ageRef.current?.focus();
  }, [step]);

  const resetForm = () => {
    setName("");
    setJob("");
    setAge("");
    setStep(1);
  };

  const handleNext = () => {
    if (step === 1 && !name.trim()) return;
    if (step === 2 && !job.trim()) return;
    if (step === 3 && !age.trim()) return;

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    const newRow = {
      id: Date.now(),
      name,
      job,
      age,
    };

    setRows((prev) => [...prev, newRow]);
    resetForm();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  const deleteRow = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 p-10">

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl max-w-md mx-auto mb-10 shadow-xl">

        {step === 1 && (
          <>
            <h2 className="text-black font-bold mb-3">Enter Name</h2>
            <input
              ref={nameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleEnter}
              className="border p-2 w-full text-black"
              placeholder="Name..."
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-black font-bold mb-3">Enter Job</h2>
            <input
              ref={jobRef}
              value={job}
              onChange={(e) => setJob(e.target.value)}
              onKeyDown={handleEnter}
              className="border p-2 w-full text-black"
              placeholder="Job..."
            />
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-black font-bold mb-3">Enter Age</h2>
            <input
              ref={ageRef}
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onKeyDown={handleEnter}
              className="border p-2 w-full text-black"
              placeholder="Age..."
            />
          </>
        )}

        <button
          onClick={handleNext}
          className="mt-4 bg-purple-700 text-white px-4 py-2 rounded w-full"
        >
          {step === 3 ? "Save" : "Next"}
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl p-5">

        <table className="table w-full">

          <thead>
            <tr className="text-black">
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item, index) => (
              <tr key={item.id} className="text-black">

                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>{item.age}</td>

                <td>
                  <button
                    onClick={() => deleteRow(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default App;