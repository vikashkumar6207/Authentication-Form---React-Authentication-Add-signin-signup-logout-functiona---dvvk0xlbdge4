import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Store() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loginStatus");
    if(isLoggedIn === "false"){
      router.push("/login");
    }
  }, []);

  const logouthandler = () => {
    localStorage.setItem("loginStatus", "false");
    router.push("./login");
  }
  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button className='logout-btn' onClick={logouthandler}>Logout</button>
    </div>
  );
}

export default Store;
