import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Link, useSearchParams } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, PenBox } from 'lucide-react'

const Header = () => {
  const [showSignIn , setShowSignIn]=useState(false);

  const [search, setSearch]=useSearchParams();

  useEffect(()=>{
    if(search.get("sign-in")){
      setShowSignIn(true);
    }
  } ,[search]);

   const handleOverClick=(e)=>{
    if(e.target===e.currentTarget){
      setShowSignIn(false);
      setSearch({});
    }
   };
  return (
    <>
<nav className="py-4 flex justify-between items-center">
    <Link>
    <img src="logo.png" className="h-20" />
    </Link>

    <div className='flex gap-8'>
     <SignedOut>
       <Button variant="outline" onClick={()=>setShowSignIn(true)}>Login</Button>
      </SignedOut>
      <SignedIn>

        <Button variant="destructive" className="rounded-full">
          <PenBox size={20} className="mr-2"/>
          Post a Job</Button>
          <Link to="/post-job"></Link>
        <UserButton
        appearance={{
          elements:{
            avatarBox:"w-10 h-10"
          }
        }}
        >
          <UserButton.MenuItems>
            <UserButton.Link
            label="My Jobs"
            labelIcons={<BriefcaseBusiness size={15} />}
            href="/my-job"
            />
          </UserButton.MenuItems>

        </UserButton>
      </SignedIn> 
      </div>

    
</nav>
    {showSignIn &&(
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverClick}>
        <SignIn
        signUpForceRedirectUrl="/onboarding"
        fallbackRedirectUrl="/onboarding"
        />
      </div>
    )}
    </>
  )
}

export default Header