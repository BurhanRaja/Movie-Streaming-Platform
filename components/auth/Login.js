import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { v4 as uuid } from "uuid";


function Login({ setClose }) {
  let PHONE_CHECK = /^[0-9]{10}$/;
  const [num, setNum] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (PHONE_CHECK.test(Number(num))) {
      setErr(false);
      localStorage.setItem("token", uuid());
      setClose(false);
    } else {
      setErr(true);
    }
  };

  useEffect(() => {
    if (err) {
      let timer = setTimeout(() => {
        setErr(false);
      }, 2000)
      return () => clearTimeout(timer);
    }
  }, [err])

  return (
    <>
      <div
        className="w-[100%] h-96 absolute opacity-100"
        style={{ zIndex: "100" }}
      >
        <div className="w-[40%] h-[100%] md:w-[50%] min-[370px]:w-[60%] bg-[#080d1d] mt-16 mx-auto">
          <p className="flex justify-end w-[85%] mx-auto pt-8">
            <button
              className="text-white text-xl"
              onClick={() => setClose(false)}
            >
              <MdClose />
            </button>
          </p>
          <p className="mx-auto w-[80%] pt-8 text-white text-xl">
            Login to continue
          </p>
          <form
            className="w-[80%] mx-auto pt-12 login-form"
            onSubmit={handleSubmit}
          >
            <div className="login-input">
            <input
              type="number"
              className="w-[100%] my-2 p-2 px-3 pl-10 focus:outline-0 border-b-2 border-blue-600 text-blue-600 bg-transparent"
              placeholder="Enter Mobile Number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            </div>
            {err ? (
              <small className="bg-red-200 pl-2 py-1 pr-3 w-[50%] border-red-600 text-red-700 mt-4">
                Invalid Number
              </small>
            ) : (
              ""
            )}
            <button className="bg-blue-600 text-white p-2 my-2 w-[100%]">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-[100%] h-[100%] fixed bg-slate-900 opacity-90"
        style={{ zIndex: "90" }}
      ></div>
    </>
  );
}

export default Login;
