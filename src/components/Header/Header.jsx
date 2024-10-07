import logo from "../../assets/Logo.jpg"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth_service";

function Header() {

  const dispatch = useDispatch();

  function logOutHandeler(){
      authService.logoutUser()
        .then(()=>{
          dispatch(logout());
        })
  }

  const userStatus = useSelector((state)=>state.authSlice.userStatus);

  const navigate = useNavigate();

  const navigationItems = [
    {
      name:"Home",
      slug:"/",
    },
    {
      name:"All Post",
      slug:"/all-posts",
    },
    {
      name:"Add Post",
      slug:"/add-posts",
    }
  ]


  return (
    <header className="bg-[#4A4947] p-2 flex justify-between items-center">
      <div>
        <img src={logo} alt="" className="w-20 rounded-xl"/>
        <span className="text-slate-100 ">DAILY BLOGS</span>
      </div>
      <div className="text-slate-100">
        
          {userStatus?(
            <ul className="flex gap-5 text-slate-300 text-xl p-3 items-center">
             {navigationItems.map((item)=>{
              return(
                <li key={item.slug}>
                  <button 
                  onClick={()=>navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              )
              
            })}
            <li>
              <Button onClick={logOutHandeler}>
                LOGOUT
              </Button>
            </li>
            </ul>):(
              <ul className="flex gap-5 text-slate-300 text-xl p-3 items-center">
                <li>
                  <Button onClick={()=>{ navigate("/login")}} >
                     LOGIN
                  </Button>
                </li>
                <li>
                  <Button  onClick={()=>{ navigate("/signup")}}>
                    SIGNUP
                  </Button>
                </li>
              </ul>
            )}
         
      </div>
    </header>
  )
}

export default Header