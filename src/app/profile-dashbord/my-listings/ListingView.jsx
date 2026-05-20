"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { FaTransgenderAlt } from "react-icons/fa";
import { FaLocationDot, FaRegEye } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { LiaTransgenderAltSolid } from "react-icons/lia";
import { MdHealthAndSafety, MdOutlinePets } from "react-icons/md";
import { TbCategoryFilled, TbVaccine } from "react-icons/tb";



export function ListingView({ currentDetails }) {
  return (
    <Modal>
      <Button
        variant="secondary"
        className={`px-2 py-1 text-white rounded-lg text-xs cursor-pointer hover:opacity-80 bg-emerald-700 h-max`}
      >
        <FaRegEye className="my-0"/>
        View
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-[98%] sm:max-w-[70%] md:max-w-[90%]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Welcome to HeroUI</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <section className="w-full">
                <div className="flex flex-col md:flex-row w-full justify-between pb-5 lg:px-10 items-center">
                  <div className="w-full">
                    <h2 className="text-2xl font-bold ">
                      {currentDetails?.petName}
                    </h2>

                    <div className="flex gap-2">
                      <div className="px-4 py-1 dark:bg-emerald-600/60 bg-emerald-600 w-max rounded-2xl mt-2 text-white text-xs">
                        {currentDetails?.Species}
                      </div>

                      <div className="px-4 py-1 dark:bg-emerald-600/60 bg-emerald-600 w-max rounded-2xl mt-2 text-white text-xs">
                        {currentDetails?.Breed}
                      </div>
                    </div>
                  </div>

                  <div className="w-full"> 
                    <p className="text-gray-500 mt-5 md:mt-0 text-sm py-0.5">Adoption Fee</p>

                    <p className="text-xl font-bold text-emerald-500">
                      {currentDetails?.adoptionFee}tk
                    </p>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:px-10">
                  <div className="flex items-center gap-3">
                         <MdOutlinePets size={25} />
                    <div>
                      <h3 className="text-gray-500 text-xs">Pet Name</h3>
                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.petName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <LiaTransgenderAltSolid size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Species</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.Species}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <TbCategoryFilled size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Breed</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.Breed}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <IoMdStopwatch size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Age</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.Age}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaTransgenderAlt size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Gender</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.gender}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdHealthAndSafety size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Health Status</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.halth_Status}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <TbVaccine size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">
                        Vaccination Status
                      </h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.vaccinationStatus}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaLocationDot size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Location</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaLocationDot size={25} />

                    <div>
                      <h3 className="text-gray-500 text-xs">Owner Email</h3>

                      <p className="dark:text-white font-semibold text-md">
                        {currentDetails?.Owner_Email}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-max bg-emerald-600" slot="close">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
