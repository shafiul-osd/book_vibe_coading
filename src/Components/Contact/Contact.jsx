import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className=" md:flex gap-96 p-10">
           <div>
                <h2>Let's Connect With us</h2>
                <div className="flex items-center bg-gray-200 p-2 rounded-lg gap-2">
                    
                    <span><IoLocationSharp></IoLocationSharp></span>
                    <h2>Dhaka, Bangladesh</h2>

                </div>
                <div className="flex items-center bg-gray-200 p-2 rounded-lg gap-2 mt-2">
                    <span><MdEmail></MdEmail></span>
                    <h2>Email:abul@babulgmail.com</h2>
                </div>

            </div>
            <div className=" mt-4">
                <form>
                    <input className="bg-blue-400 rounded-lg p-2 text-white" type="text" name="text" placeholder="Your Name" id="" />
                    <br />
                    <input className="bg-blue-400 rounded-lg p-2 text-white mt-2" type="email" name="email" placeholder="Your Email" id="" />
                    <br />
                    <input className="bg-blue-400 rounded-lg p-2 text-white mt-2" type="text" name="message" placeholder="Message" id="" />
                </form>
            </div>
        </div>
    );
};

export default Contact;