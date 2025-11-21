import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendAparcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const serviceSenters = useLoaderData();
  const regions = serviceSenters.map((c) => c.region);
  const rigion = [...new Set(regions)];
  console.log(rigion);

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-2xl my-10">
      {/* Heading */}
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Send A Parcel
      </h2>
      <h5 className="font-bold text-base md:text-lg lg:text-xl mt-4">
        Enter your parcel details
      </h5>
      <hr className="border-gray-500 my-5" />

      <div className="p-4">
        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* Parcel Type */}
          <div className="flex items-center gap-16 my-7">
            <label className="label flex items-center gap-2">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                className="radio radio-neutral"
                defaultChecked
              />
              Document
            </label>
            <label className="label flex items-center gap-2">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                className="radio radio-neutral"
              />
              Non-Document
            </label>
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <fieldset className="fieldset">
              <label className="label font-bold text-black text-sm">
                Parcel Name
              </label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full"
                placeholder="Enter Your Parcel Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold text-black text-sm">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcelWeight")}
                className="input w-full"
                placeholder="Parcel Weight (KG)"
              />
            </fieldset>
          </div>

          <hr className="border-gray-500 my-5" />

          {/* Sender & Receiver Info (empty for now) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
            <div>
              <h5 className="text-xl font-bold"> Sender Details</h5>
              <fieldset className="fieldset mt-10">
                <label className="label font-bold text-black text-sm">
                  Sender Name
                </label>
                <input
                  type="text"
                  {...register("senderName")}
                  className="input w-full"
                  placeholder="Sender Name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Address
                </label>
                <input
                  type="text"
                  {...register("senderAddress")}
                  className="input w-full"
                  placeholder="Address"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Sender Phone No
                </label>
                <input
                  type="text"
                  {...register("senderPhone")}
                  className="input w-full"
                  placeholder="Sender Phone No"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select defaultValue="Pick a Region" className="select">
                  <option disabled={true}>Pick a Region</option>
                  {rigion.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <span className="label">Optional</span>
              </fieldset>
              {/* sender distric */}
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Sender District
                </label>
                <input
                  type="text"
                  {...register("senderDistrict")}
                  className="input w-full"
                  placeholder="Sender  District"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Sender Email
                </label>
                <input
                  type="email"
                  {...register("SenderEmail")}
                  className="input w-full"
                  placeholder="Sender  Email"
                />
              </fieldset>
            </div>

            {/* recever Details */}
            <div>
              <h5 className="text-xl font-bold">Receiver Details</h5>

              <fieldset className="fieldset mt-10">
                <label className="label font-bold text-black text-sm">
                  Recever Name
                </label>
                <input
                  type="text"
                  {...register("ReceverName")}
                  className="input w-full"
                  placeholder="Recever Name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Recever Address
                </label>
                <input
                  type="text"
                  {...register("ReceverAddress")}
                  className="input w-full"
                  placeholder="Recever Address"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Recever Number
                </label>
                <input
                  type="text"
                  {...register("ReceverNumber")}
                  className="input w-full"
                  placeholder="Recever Number"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Recever District
                </label>
                <input
                  type="text"
                  {...register("ReceverDistrict")}
                  className="input w-full"
                  placeholder="Recever  District"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label font-bold text-black text-sm">
                  Recever Email
                </label>
                <input
                  type="email"
                  {...register("ReceverEmail")}
                  className="input w-full"
                  placeholder=" Recever Email"
                />
              </fieldset>
            </div>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="btn bg-[#CAEB66] px-7 mt-12"
            value="Proceed to Confirm Booking"
          />
        </form>
      </div>
    </div>
  );
};

export default SendAparcel;
