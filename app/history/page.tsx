import {LuSearch} from "react-icons/lu";
import {ReadLog} from "@/components/ReadLog";
import Image from "next/image";

export default function History() {
    return (
        <main className="flex container mx-auto h-screen">
            <div className="flex-1 flex flex-col overflow-visible">
                <h1 className="my-4 font-regular text-xl">History</h1>
                <div className="my-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search"/>
                        <LuSearch/>
                    </label>
                </div>
                    <div className="flex-1 overflow-y-auto grid grid-cols-1 gap-2 py-4">
                        <ReadLog/>
                        <ReadLog/>
                        <ReadLog/>
                        <ReadLog/>
                        <ReadLog/>
                        <ReadLog/>
                        <ReadLog/>
                        <ReadLog/>
                    </div>
            </div>
            <div className="divider divider-horizontal hidden lg:flex"></div>
            <div className="w-96 p-4 hidden lg:block">
                <div className="flex flex-col justify-between h-full">
                    <h2 className="my-4 font-regular text-xl">Reading Log</h2>
                    <Image src="/books.svg" width={300} height={300} alt="Books" className=""/>
                    <button className="btn btn-block btn-primary text-white">Add Reading Log</button>
                </div>
            </div>
        </main>
    );
}