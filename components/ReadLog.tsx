import {IoEnterOutline} from "react-icons/io5";

export function ReadLog() {
    return (
        <div className="card bg-base-100 border">
            <div className="card-body w-full">
                <div className="flex">
                    <p>Id: 0000000000</p>
                    <div className="divider divider-horizontal"></div>
                    <p>Title</p>
                    <div className="divider divider-horizontal"></div>
                    <p>1 Januari 1900 12:00 PM</p>
                    <IoEnterOutline className="cursor-pointer" size="1.5em"/>
                </div>
            </div>
        </div>
    );
}