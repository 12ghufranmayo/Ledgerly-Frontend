import {React, useState} from 'react'
import Drawer from '@mui/material/Drawer';
import { MdOutlineCancel } from "react-icons/md";
import { replace, useLocation, useNavigate } from 'react-router-dom';

function ViewClient() {
    const location      = useLocation();
    const navigate      = useNavigate();

    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleClose = () => {
        setDrawerOpen(false);
        navigate("/clients", { replace: true });
    }

  return (
        <Drawer
            anchor={'right'}
            open={drawerOpen}
            onClose={handleClose}
          >
            <div className='flex flex-col h-full w-[550px] shadow-xl'>
                    <div className='flex items-start px-6 pb-4 py-5 justify-between bg-teal-500'>
                        <div className='flex item-start justify-between pt-1 w-full'>
                            <h1 className='text-2xl font-semibold text-slate-50'>View Client</h1>
                        </div>
                        <div className='flex item-start items-center justify-between pt-1'>
                            <button className='rounded-s-sm focus:outline-none'
                                onClick={handleClose} 
                            >
                                <MdOutlineCancel className='h-7 w-7 text-slate-50 hover:text-slate-200' />
                            </button>
                        </div>
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        <div className='p-4'>
                            <div className=' grid grid-cols-2 gap-y-2 gap-x-6 text-md text-slate-700 w-4/5'>
                                <div>Name</div>
                                <div>Danish International</div>
                                <div>Address</div>
                                <div>Punjab Society Ghazi Road Lahore</div>
                                <div>Address</div>
                                <div>Punjab Society Ghazi Road Lahore</div>
                                <div>Phone</div>
                                <div>+92 300 1234567</div>
                                <div>Email</div>
                                <div>contact@danish.com</div>
                                <div>City</div>
                                <div>Lahore</div>
                                <div>Country</div>
                                <div>Pakistan</div>
                                <div>Postal Code</div>
                                <div>54000</div>
                                <div>Business Type</div>
                                <div>International Trading</div>
                                <div>Registration Date</div>
                                <div>January 15, 2020</div>
                                <div>Status</div>
                                <div className='text-green-600 font-semibold'>Active</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center px-2 py-1 justify-end border-t border-slate-200'>                            
                        <button 
                            className='bg-gray-200 text-gray-600 px-6 py-2 rounded hover:bg-gray-300 transition m-3'
                            onClick={handleClose}
                        >
                            Close
                        </button> 
                    </div>
            </div>
        </Drawer>
  )
}

export default ViewClient