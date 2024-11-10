import TextInputField from "@/Components/textInputField";

export default function ResetPass() {
  return (
    <>
      <form className="flex items-center justify-center mt-36">
        <div className="flex flex-col border rounded-lg p-5 space-y-4 bg-emerald-100">
          <h3 className="flex justify-center text-yellow-950 font-bold">
            Reset Password
          </h3>
          <TextInputField
            id="password"
            name="Password"
            type="Password"
            className="p-2 rounded text-black"
            placeholder="Password"
          />
          <TextInputField
            id="confirm_password"
            name="Confirm Password"
            type="Confirm Password"
            className="p-2 rounded text-black"
            placeholder="Confirm Password"
          />
          <div className="flex justify-center items-center">
            <button className="bg-lime-300 rounded p-2 text-nowrap text-black ">
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
