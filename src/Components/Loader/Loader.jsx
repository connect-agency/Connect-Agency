import logo from '../../assets/logo_new/navbar.png'
const Loader = () => {
  return (
    <div className="min-h-screen flex gap-5 items-center justify-center flex-col">
      <div className="logo">
        <img src={logo} className='w-64' alt="" />
      </div>
        <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div
            className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
        >
            <div
            className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
        </div>
        </div>
        <div className="h1 text-xl">Page is Loading!</div>
        
    </div>
  )
}

export default Loader

