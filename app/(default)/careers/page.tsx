export const metadata = {
  title: "SpotMySite",
  description: "Page description",
};

import Image from "next/image";
import CareerImage from "@/public/images/careers.png";
import Career1 from "@/public/images/career1.png";
import Career2 from "@/public/images/career2.png";
import Career3 from "@/public/images/career3.jpg";
import { log } from "console";

export default function Careers() {
  return (
    <div className="mt-20">
      {/* <h2 className="text-center text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
        Born from Distance. Built on Trust.
      </h2> */}
      {/* <div className="letter">
        <Image
          className="relative"
          width={800}
          src={CareerImage}
          alt="Logo 01"
        />
      </div> */}
      <section className="flex justify-center sec_careers " id="contact">
        <div className="container">
          <div className=" flex flex-row pt-12">
            <div className="basis-1/2 overflow-hidden  px-12 pt-0 pb-24 md:pl-36  md:pb-20">
              <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                Let's bring real eyes to Property Management
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                For absentee owners and NRIs, distance creates doubt. At
                <b> SpotMySite</b>, we're building the bridge to peace of mind,
                one transparent inspection, one verified document, and one
                honest conversation at a time. Join us in reshaping the future
                of <b>property management</b> in India.
              </p>
            </div>
            <div className="basis-1/2 overflow-hidden flex justify-center px-12 pt-0 pb-24 md:pl-12  md:pb-20">
              <Image
                className="relative"
                width={300}
                src={Career1}
                alt="Logo 01"
              />
            </div>
          </div>
          <div className=" flex flex-row pt-12">
            <div className="basis-1/2 overflow-hidden flex justify-center px-12 pt-0 pb-24 md:pl-12  md:pb-20">
              <Image
                className="relative"
                width={300}
                src={Career2}
                alt="Logo 01"
              />
            </div>
            <div className="basis-1/2 overflow-hidden  px-12 pt-0 pb-24 md:pl-36  md:pb-20">
              <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                Our Mission & Story
              </h2>
              <h3 className="mt-2 text-xl font-semibold md:text-2xl font-(family-name:--font-heading)">
                The Problem We're Solving
              </h3>
              <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                For millions of NRIs and absentee owners, managing property from
                afar often means constant anxiety.{" "}
                <b>
                  Is someone encroaching on my land? Is the property being
                  maintained? Am I making the right purchase? Is the paperwork
                  in order?
                </b>
              </p>
              <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                <b>SpotMySite</b> was created to turn these worries into proof,
                perspective and peace of mind.
              </p>
            </div>
          </div>
          <div className=" flex flex-row pt-12">
            <div className=" overflow-hidden  px-12 pt-0 pb-24 md:pl-36  md:pb-20">
              <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                Life at SpotMySite
              </h2>
              <h3 className="mt-2 text-xl font-semibold md:text-2xl font-(family-name:--font-heading)">
                A Culture Built on Impact, Not Hierarchy
              </h3>
              <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                We're a small but mighty team where every role from the field to
                the backend is critical. You won't just be an employee, you'll
                be an owner of our mission. This is a place where digital
                innovation meets real-world action, connecting tech solutions
                with the on-the-ground realities of property management.
              </p>
            </div>
          </div>
          <div className=" flex flex-row justify-center pt-0">
            <div className=" overflow-hidden flex justify-center px-12 pt-0 pb-24 md:pl-12  md:pb-20">
              <Image
                className="relative"
                width={800}
                height={400}
                src={Career3}
                alt="Logo 01"
              />
            </div>
          </div>
          <div className=" flex flex-row pt-12">
            <div className=" overflow-hidden w-full  px-12 pt-0 pb-24 md:pl-36  md:pb-10">
              <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                Join Our Team
              </h2>
              <h3 className="mt-2 text-xl font-semibold md:text-2xl font-(family-name:--font-heading)">
                Open Roles
              </h3>
              <form>
                <div className="my-4 flex items-center gap-4">
                  <div className="">
                    <label className="block text-gray-700 mb-2">
                      Filter by
                    </label>
                  </div>
                  <div className="">
                    <select
                      className="w-50 px-3 py-1 border rounded"
                      id="location"
                      name="location"
                    >
                      <option value="">All locations</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="TS">Telangana</option>
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="w-60 px-3 py-1 border rounded"
                      id="department"
                      name="department"
                    >
                      <option value="">All departments</option>
                      <option value="Operations">Operations</option>
                      <option value="Technology">Technology</option>
                      <option value="Legal">Legal</option>
                      <option value="Growth&Marketing">
                        Growth & Marketing
                      </option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {/* <div className="bg-gray-200 border border-gray-200 rounded-md shadow-md overflow-hidden">
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-800">
                      Card Title 1
                    </p>
                    <p className="mt-1 text-gray-600 text-sm">
                      Some description text for this card.
                    </p>
                  </div>
                </div> */}
                <p>No Open Roles!</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row pt-0">
            <div className=" overflow-hidden  px-12 pt-0 pb-24 md:pl-36  md:pb-20">
              <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                Don't See Your Role?
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                Great talent is always welcome. If you're passionate about our
                mission and believe you can make a significant impact, send us
                your resume at <b>careers@spotmysite.com</b>. Tell us how you'd
                fit into our story.
              </p>
            </div>
          </div>
          <div className=" flex flex-row pt-0">
            <div className=" overflow-hidden  px-12 pt-0 pb-24 md:pl-36  md:pb-20">
              <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                Our Hiring Process
              </h2>
              <h3 className="mt-2 text-xl font-semibold md:text-2xl font-(family-name:--font-heading)">
                A Glimpse into the Journey
              </h3>
              <p className="mt-4 text-lg text-gray-700 font-(family-name:--font-content)">
                We want to get to know the real you. Our process is designed to
                be transparent, respectful, and insightful.
              </p>
              <p className="mt-4 text-lg text-gray-800 font-(family-name:--font-content)">
                <b>Apply Online</b>
              </p>
              <p className="mt-0 text-lg text-gray-700 font-(family-name:--font-content)">
                Share your story and your resume.
              </p>
              <p className="mt-4 text-lg text-gray-800 font-(family-name:--font-content)">
                <b>Team Introductions</b>
              </p>
              <p className="mt-0 text-lg text-gray-700 font-(family-name:--font-content)">
                We'll connect with you to discuss the role and get to know your
                background.
              </p>
              <p className="mt-4 text-lg text-gray-800 font-(family-name:--font-content)">
                <b>Skills & Task</b>
              </p>
              <p className="mt-0 text-lg text-gray-700 font-(family-name:--font-content)">
                You’ll be given a short, practical task to demonstrate your
                expertise in a real-world scenario.
              </p>
              <p className="mt-4 text-lg text-gray-800 font-(family-name:--font-content)">
                <b>Welcome to the Team</b>
              </p>
              <p className="mt-0 text-lg text-gray-700 font-(family-name:--font-content)">
                If all goes well, we’ll extend an offer and welcome you aboard!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
