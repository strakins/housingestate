import { useSelector } from "react-redux"

const Profile = () => {

  const { currentUser } = useSelector(state => state.user)
  return (
    <section className="text-white p-4 max-w-lg mx-auto">
      <h1 className="text-center py-8 text-2xl font-semibold tracking-[3px]">Profile</h1>  
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} alt="profile-photo" className="w-24 self-center h-24  cursor-pointer object-cover rounded-full" />
        <input type="text" id="username" placeholder='Username'className="p-3 border rounded-lg placeholder:text-black"  />
        <input type="email" id="email" placeholder="Email" className="p-3 border rounded-lg placeholder:text-black"  />
        <input type="text" id="password" placeholder='password' className="p-3 border rounded-lg placeholder:text-black"  />
        <button className="bg-green-600 p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-60">Update </button>
      </form>
      <div className="flex justify-between text-red-500 text-lg mt-5 ">
        <p className="cursor-pointer">Delete Account</p>
        <p className="cursor-pointer">Sign Out</p>
      </div>
      
    </section>
  )
}

export default Profile