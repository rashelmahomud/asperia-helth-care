const Appoinment = () => {
    return (
      <div className="p-10 bg-gray-100 dark:bg-dark dark:text-white lg:py-20">
        <div className="text-center">
          <h3>অনলাইনে অ্যাপোয়েন্টমেন্ট পেতে সঠিক তথ্য সাবমিট করুন</h3>
          <h1 className="text-4xl font-semibold text-gray-700">
            অনলাইন অ্যাপোয়েন্টমেন্ট
          </h1>
        </div>
        <form className="grid grid-cols-2 gap-5 w-1/2 mx-auto p-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className=" col-span-full">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select Doctor</option>
              <option value="US">
                Dr Taif Mahmud (Orthopedic & Trauma Surgeon)
              </option>
              <option value="CA">
                Mohammed Selim (Orthopedic & Trauma Surgeon)
              </option>
              <option value="FR">
                Dr. Jabed Jahangir Tuhin (Orthopedic & Trauma Surgeon)
              </option>
              <option value="DE">Dr. Mohammad Akram Hossain (Cardiology)</option>
              <option value="DS">Dr. Md. Shakhawat Ullah (Cardiology)</option>
            </select>
          </div>
          <input type="date" placeholder="date" className="border border-gray-300 p-3 rounded-lg"/>
          <input type="time" placeholder="time" className="border border-gray-300 p-3 rounded-lg"/>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Send a Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Appoinment;
  