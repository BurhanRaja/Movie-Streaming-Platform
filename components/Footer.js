
import {CgFacebook}  from "react-icons/cg";
import {VscTwitter} from "react-icons/vsc";
import {SiGoogleplay} from "react-icons/si";
import {BsApple} from "react-icons/bs"

function Footer() {
  return (
    <section className="flex justify-between text-slate-300 pt-10 px-10 pb-5 mt-16 w-[100%] text-sm">
      <div className="w-[50%] mx-2 mr-10">
        <nav className="mb-4 font-bold">
          <ul className="flex">
            <li className="mr-5 hover:text-blue-500 hover:cursor-pointer">
              About Disney+ Hotstar
            </li>
            <li className="mr-5 hover:text-blue-500 hover:cursor-pointer">
              Terms of Use
            </li>
            <li className="mr-5 hover:text-blue-500 hover:cursor-pointer">
              Privacy Policy
            </li>
            <li className="mr-5 hover:text-blue-500 hover:cursor-pointer">
              FAQ
            </li>
            <li className="mr-5 hover:text-blue-500 hover:cursor-pointer">
              Feedback
            </li>
            <li className="mr-5 hover:text-blue-500 hover:cursor-pointer">
              Careers
            </li>
          </ul>
        </nav>

        <div className="" style={{ fontSize: "0.8rem" }}>
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </div>
      </div>
      <div className="mx-2 mr-10">
        <p className="mb-3 font-bold">Connect With Us</p>
        <button className="p-2 mr-1 text-2xl rounded-sm bg-slate-600 hover:bg-blue-400"><CgFacebook /></button>
        <button className="p-2 text-2xl rounded-sm bg-slate-600 hover:bg-blue-400"><VscTwitter /></button>
      </div>

      <div className=" mx-2 mr-10">
        <p className="mb-3 font-bold">Hotstart Disney+ App</p>
        <button className="flex justify-center items-center p-1 px-3 rounded-sm mb-2 bg-black"><SiGoogleplay className="mr-2" /> Google Play</button>
        <button className="flex justify-center items-center p-1 px-3 rounded-sm mb-1 bg-black"><BsApple className="mr-2" /> Apple Store</button>
      </div>
    </section>
  );
}

export default Footer;
