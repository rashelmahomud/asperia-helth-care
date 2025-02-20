import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const LiveChat = () => {
    return (
        <div className="bg-[#16243d] border-4 border-iconBg lg:mx-32 p-5 m-10 rounded-lg text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)] drop-shadow-2xl relative">
        <div className="absolute inset-0 opacity-10  bg-[url('/asperia/cta-one-img.png')] bg-cover bg-center">
        </div>
        <div className="flex justify-between gap-10 items-center p-10 justify-between ">
          <h1 className="text-4xl font-semibold ">
            Make appointment instantly{" "}
          </h1>
          <div className="order-last">
            <Button>LIVE CHAT</Button>
          </div>
          <div className="flex items-center gap-3 text-xl ml-28">
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="w-8 h-8 text-iconBg border rounded-full p-3 hover:text-iconBg hover:bg-primary border-4"
              />
            </Link>

            <div className="">
              <p className="font-semibold">+8801835199061</p>

              <span className="text-sm">hotline number</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LiveChat;