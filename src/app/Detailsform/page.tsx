"use client";

import TextInputField from "@/Components/textInputField";
import { useState } from "react";

export default function DetailsForm() {
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [ulast_Name, setUlast_Name] = useState("");
  const [ucity, setUcity] = useState("");
  const [udistrict, setUdistrict] = useState("");
  const [ucountry, setUcountry] = useState("");
  const [udata, setUdata] = useState(false);

  type TData = {
    name: string;
    email: string;
    lastName: string;
    city: string;
    district: string;
    country: string;
  };

  const data = {
    name: uname,
    email: uemail,
    lastName: ulast_Name,
    city: ucity,
    district: udistrict,
    country: ucountry,
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleDataTable(data);
    setUdata(true);
  };

  const handleDataTable = (data: TData) => {
    return (
      <>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>LastName</th>
                <th>District</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.city}</td>
                <td>{data.lastName}</td>
                <td>{data.district}</td>
                <td>{data.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <>
      <form
        className="flex items-center justify-center mt-36"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col border rounded-lg p-5 space-y-4 bg-emerald-100">
          <h3 className="flex justify-center text-yellow-950 font-bold">
            Enter Details
          </h3>
          <TextInputField
            id="name"
            name="Name"
            type="text"
            className="p-2 rounded text-black"
            placeholder="Enter Name..."
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          <TextInputField
            id="email"
            name="Email"
            type="Email"
            className="p-2 rounded text-black"
            placeholder="Enter Email..."
            value={uemail}
            onChange={(e) => {
              setUemail(e.target.value);
            }}
          />
          <TextInputField
            id="last_Name"
            name="Last Name"
            type="text"
            className="p-2 rounded text-black"
            placeholder="Enter Last Name..."
            value={ulast_Name}
            onChange={(e) => {
              setUlast_Name(e.target.value);
            }}
          />
          <TextInputField
            id="city"
            name="City"
            type="text"
            className="p-2 rounded text-black"
            placeholder="Enter City..."
            value={ucity}
            onChange={(e) => {
              setUcity(e.target.value);
            }}
          />
          <TextInputField
            id="district"
            name="District"
            type="text"
            className="p-2 rounded text-black"
            placeholder="Enter District..."
            value={udistrict}
            onChange={(e) => {
              setUdistrict(e.target.value);
            }}
          />
          <TextInputField
            id="country"
            name="Country"
            type="text"
            className="p-2 rounded text-black"
            placeholder="Enter Country..."
            value={ucountry}
            onChange={(e) => {
              setUcountry(e.target.value);
            }}
          />
          <div className="flex justify-center items-center">
            <button className="bg-violet-400 rounded p-2 text-nowrap text-black ">
              Submit Details
            </button>
          </div>
        </div>
      </form>

      {udata && (
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>LastName</th>
            <th>District</th>
            <th>Country</th>
          </tr>

          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.city}</td>
            <td>{data.lastName}</td>
            <td>{data.district}</td>
            <td>{data.country}</td>
          </tr>
        </table>
      )}
    </>
  );
}
