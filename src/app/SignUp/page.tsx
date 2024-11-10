import TextInputField from "@/Components/textInputField";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <form className="flex items-center justify-center mt-36">
        <div className="flex flex-col border rounded-lg p-5 space-y-4 bg-emerald-100">
          <h3 className="flex justify-center text-yellow-950 font-bold">
            Sign Up
          </h3>
          <TextInputField
            id="user_name"
            name="UserName"
            type="text"
            className="p-2 rounded text-black"
            placeholder="User Name"
          />
          <TextInputField
            id="Email"
            name="Email"
            type="Email"
            className="p-2 rounded text-black"
            placeholder="Email"
          />
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
            type="Password"
            className="p-2 rounded text-black"
            placeholder="Confirm Password"
          />
          <div className="flex justify-center items-center">
            <button className="bg-lime-300 rounded p-2 w-28 text-black ">
              Sign Up
            </button>
          </div>
          <p className="text-black text-sm p-1">
            Already have an account? <Link href="">Log In</Link>
          </p>
        </div>
      </form>
    </>
  );
}
