import { Disclosure, Transition } from "@headlessui/react";
import linksInfo from "../../interfaces/linksInfo";
import { ChevronUpIcon } from "@heroicons/react/solid";
import PubLinks from "./PubLinks";

interface disclosureInfo {
  abstract: string;
  links: linksInfo[];
}

const PubDisclosure = ({ abstract, links }: disclosureInfo) => {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="">
              <Disclosure.Button className="w-full flex justify-between bg-slate-500 p-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-sky-300/75">
                <span className="">Show links and abstract</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180" : ""} h-6 w-6`}
                />
              </Disclosure.Button>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="my-4">
                <PubLinks allLinks={links} />
                <p>{abstract}</p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PubDisclosure;
