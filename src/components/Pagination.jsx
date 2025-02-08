import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
    const {page, handlePageChange, totalPages} = useContext(AppContext);
    return (
        <div className="w-full flex justify-center items-center border-2 border-gray-400 fixed bg-white bottom-0">
           <div className="flex justify-between w-11/12 max-w-[670px] py-2">
           <div className="flex gap-x-5">
            {   
                page > 1 && (<button className="rounded-md border py-1 px-3" onClick={() => handlePageChange(page - 1)}>Previous</button>)               
            }

            {  
                page < totalPages && (<button className="rounded-md border py-1 px-3" onClick={() => handlePageChange(page + 1)}>Next</button>)              
            }
           </div>
            <p className="font-bold text-sm">
                Page {page} of {totalPages}
            </p>
           </div>
        </div>
    )
}

export default Pagination;