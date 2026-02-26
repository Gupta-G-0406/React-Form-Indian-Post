import React from "react";
import PostOffices from "./components/PostOffices";

const App = () => {
  const [pincode, setPincode] = React.useState("");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validation
    if (pincode.length !== 6 || isNaN(pincode)) {
      setError("Please enter a valid 6 digit pincode");
      setData(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`,
      );
      const json = await res.json();

      if (json[0].Status === "Error") {
        setError("Invalid Pincode");
        setData(null);
      } else {
        setData(json[0]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.", err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {!data ? (
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Enter PinCode</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={submitHandler}>
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              type="text"
              maxLength={6}
              placeholder="Enter 6 digit PinCode"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
            >
              Lookup
            </button>
          </form>

          {/* Loader */}
          {loading && (
            <div className="flex justify-center mt-6">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      ) : (
        <PostOffices pincode={pincode} data={data} />
      )}
    </div>
  );
};

export default App;
