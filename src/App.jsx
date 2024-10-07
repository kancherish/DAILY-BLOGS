import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useEffect, useState } from "react";
import {login,logout} from "./store/authSlice"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth_service";
import { Outlet } from "react-router-dom";


function App() {

	const [isloading,setIsLoading] = useState(true);
	const dispatch = useDispatch()

	useEffect(
		()=>{
			authService.getCurrentUser()
				.then((userAccount)=>{
					if (userAccount) {
						dispatch(login({userAccount}))
					}else{
						dispatch(logout())
					}
				}
				)
				.finally(
					setIsLoading(false)
				)
		}
	,[])
	
	if(!isloading)
	{
	return (
		<>
			<div className="h-screen w-screen bg-[#FAF7F0] text-[#B17457] flex flex-col justify-between">
				<Header />
				<main className="h-[100%] flex justify-center items-center">
					<div>
						<Outlet />
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
	}else{
		return(
			<div className="h-screen w-screen bg-slate-900 flex justify-center items-center text-slate-900">
				LOADING..
			</div>
		)
	}
}

export default App;
