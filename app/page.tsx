import {LuSearch} from "react-icons/lu";
import {books} from "@/data/data";
import Image from "next/image";
import type {Categories} from "@/lib/types";
import {BookDetails} from "@/components/BookDetails";

const categories: Categories = ["Non Fiction", "Fiction", "Science"];

export default function Home() {
  return (
      <main className="flex container mx-auto h-screen">
          <div className="flex-1 flex flex-col overflow-visible">
              <h1 className="my-4 font-regular text-xl">Home</h1>
              <div className="my-4">
                  <label className="input input-bordered flex items-center gap-2">
                      <input type="text" className="grow" placeholder="Search"/>
                      <LuSearch/>
                  </label>
              </div>
              <div className="w-full flex justify-end my-4">
                  <select className="select select-bordered w-full max-w-xs">
                      <option selected>
                          All Category
                      </option>
                      {categories.map((category, index) => (
                          <option key={index}>{category}</option>
                      ))}
                  </select>
              </div>
              <div className="flex-1 overflow-y-auto grid grid-cols-1 gap-2 py-4">
                  <BookDetails/>
                  <BookDetails/>
                  <BookDetails/>
                  <BookDetails/>
                  <BookDetails/>
              </div>
          </div>
          <div className="divider divider-horizontal hidden lg:flex"></div>
          <div className="w-96 p-4 hidden lg:block">
              <div className="flex flex-col justify-between h-full">
                  <h2 className="my-4 font-regular text-xl">Book Details</h2>
                  <Image src="/books.svg" width={300} height={300} alt="Books" className=""/>
                  <button className="btn btn-block btn-primary text-white">Add Books</button>
              </div>
          </div>
      </main>
  );
}
