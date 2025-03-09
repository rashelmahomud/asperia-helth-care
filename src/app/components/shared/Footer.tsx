import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[url('/asperia/site-footer-bg.png')] ">
      <div className="bg-[#16243d]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-3 lg:p-32 mx-auto ">
          <div>
            <Image
              className=""
              src={"/asperia/flogo.png"}
              width={200}
              height={200}
              alt="footer logo"
            />
            <p className="text-lightText font-semibold my-5">
              Super speciality lab with advanced histopathology, molecular lab
              and oncology solution.
            </p>
            <div className="flex gap-3 text-white">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-10 h-11 border-2 border-primary  rounded-full p-2 hover:bg-white hover:border-none hover:text-primary transition duration-500"
              />

              <FontAwesomeIcon
                icon={faTwitter}
                className="w-10 h-11 border-2 border-primary  rounded-full p-2 hover:bg-white hover:border-none hover:text-primary transition duration-500"
              />

              <FontAwesomeIcon
                icon={faInstagram}
                className="w-10 h-11 border-2 border-primary  rounded-full p-2 hover:bg-white hover:border-none hover:text-primary transition duration-500"
              />

              <FontAwesomeIcon
                icon={faPinterest}
                className="w-10 h-11 border-2 border-primary  rounded-full p-2 hover:bg-white hover:border-none hover:text-primary transition duration-500"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-white font-semibold text-xl mb-10">Content</h1>
            <div className="text-lightText font-semibold">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 text-primary"
                />
                rashelmahmudraj1998@gmail.com
              </p>
              <p className="flex items-center gap-2 my-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-primary w-4 mb-5"
                />
                1486/1672, Al-Nur Badrun Center (4th floor), O.R Nizam Road
                Probartak Circle, Chattogram
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="w-4 text-primary"
                />{" "}
                +88 02333336920, +880 1810-004550
              </p>
              <h3 className="text-white font-semibold text-xl my-5">
                Open hours
              </h3>
              <p>Everyday: 8:00 am to 10:00 pm</p>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl mb-5">
              Newsletter
            </h1>
            <p className="font-semibold text-lightText my-2">
              subscribe our Newsletter to get our latest update & news
            </p>
            <div className="my-5">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex items-center gap-3 text-white text-xl">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="w-8 text-primary"
              />
              <div>
                <p className="font-semibold">+8801835199061</p>

                <span className="text-sm">hotline number</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center p-10 mx-32 border-t border-gray-600  text-lightText">
            @ All Copyright 2025 asperia.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
