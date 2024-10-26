import { useState, useEffect } from 'react'

interface userDetailsProps {
    name: string,
    email: string,
    age: number,
    image: string,
}

const Profile = () => {
    const [userDetails, setUserDetails] = useState<userDetailsProps | null>();

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const userInfo = localStorage.getItem('user');
                if (userInfo) {
                    setUserDetails(JSON.parse(userInfo));
                }
            } catch (err) {
                console.log(err);
            }
        }
        getUserDetails();
    }, []);

    if (!userDetails) {
        return <div>Loading...</div>
    }
    return (
        <div className='px-5 py-3'>
            <h1 className='text-3xl font-semibold mt-'> Profile </h1>
            <div className='flex gap-x-7'>
                <div className='w-[30%] px-5 py-4'>
                    <div className='size-40 rounded-full bg-slate-400'>
                        {userDetails.image && (
                            <div>
                                <img src={userDetails.image} alt="" className=' rounded-full'/>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[70%] h-auto flex flex-col justify-center gap-y-2 px-4 '>
                    <div>
                    <span className='font-semibold'> Name </span>: {userDetails.name}
                    </div>
                    <div>
                    <span className='font-semibold'> Email </span>: {userDetails.email}
                    </div>
                    <div>
                        <span className='font-semibold'> Age </span>: {userDetails.age}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile