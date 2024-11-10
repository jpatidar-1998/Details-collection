import TextInputField from "@/Components/textInputField";

export default function ForgetPass() {
  return (
    <>
      <form className="flex items-center justify-center mt-36">
        <div className="flex flex-col border rounded-lg p-5 space-y-4 bg-emerald-100">
          <h3 className="flex justify-center text-yellow-950 font-bold">
            Forgot Password
          </h3>
          <TextInputField
            id="Email"
            name="Email"
            type="Email"
            className="p-2 rounded text-black"
            placeholder="Enter Email..."
          />
          <div className="flex justify-center items-center">
            <button className="bg-lime-300 rounded p-2 text-nowrap text-black ">
              Send email
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
