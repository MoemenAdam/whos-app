import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from '../UiComponents/LoadingSpinner'
import { UserAuthCtx } from '../../Store/UserAuthContext';
import DataLayout from '../UiComponents/DataLayout'

export default function UserData() {
  const { setLogedIn } = useContext(UserAuthCtx);
  const [UserName, setUserName] = useState('');
  const [Loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Loading) return;
    setLoading(true);
    if (UserName === '') {
      toast(' UserName is required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    // fetch here and set the user data
    // then setLogedIn(true);
    setLogedIn(true);
    console.log(UserName);
  }
  const handleOnChange = (e) => {
    if (Loading) return;
    setUserName(e.target.value);
  }
  return (
    <DataLayout>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-10 w-full'>
        <div>
          <label className='text-[#8000ff] text-[15px] font-bold'>User name</label>
          <div className='focus:border-b-primary border-b-primary border-b-2 pb-2'>
            <input onChange={handleOnChange} value={UserName} type="UserName" name="UserName" id="UserName" placeholder="Enter your name" className='w-full bg-transparent outline-none border-none text-sm text-[#c286ff]' />
          </div>
        </div>
        <button className={`text-center text-lg h-12 w-full bg-primary py-2 rounded-lg font-bold flex justify-center items-center  ${Loading ? "opacity-20 cursor-not-allowed" : ""}`}>
          {Loading ? <LoadingSpinner /> : 'Confirm'}
        </button>
      </form>
    </DataLayout>
  )
}