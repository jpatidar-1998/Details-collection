"use client";

import TextInputField from "@/Components/textInputField";
import Link from "next/link";

export default function LogIn() {
  return (
    <>
      <form className="flex items-center justify-center mt-36">
        <div className="flex flex-col border rounded-lg p-5 space-y-4 bg-emerald-100">
          <h3 className="flex justify-center text-yellow-950 font-bold">
            Log In
          </h3>
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
          <div className="flex justify-center items-center">
            <button className="bg-violet-300 rounded p-2 w-28 text-black">
              <Link href="/Detailsform">Log In</Link>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
