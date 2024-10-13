import React , {useState} from 'react'
// import {Link} from "react-router-dom";
import DashBar from '../../components/DashBar/DashBar';
import NoteCard from '../../components/Cards/NoteCard';
import { MdAdd, MdOutlineAlarmAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from "react-modal"


const Dashboard = () => {

  const [openAddEditModal , setOpenAddEditModal] = useState({
    isShown:false,
    type:"add",
    data: null,
  })

  return (
    <>
      <DashBar />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard 
            title ="Meeting on blah blah" 
            date="17th Sept" 
            content="dsbnesnesnenen"
            tags="#Meeting"
            status="Not started"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
          />
        </div>
      </div>  

      <button className="w-16 h-16  flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" 
        onClick={()=> {
          setOpenAddEditModal({isShown:true, type:"add", data:null});
        }}
        >
        <MdAdd className="text-[32px] text-white"/>
      </button>

      <Modal 
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 "
      >
    
       <AddEditNotes
        type={openAddEditModal.type}
        noteDate={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({isShown:false , type:"add", data:null})
        }}
      />
      </Modal>
    </>
  )
}

export default Dashboard;