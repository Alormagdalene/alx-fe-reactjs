import { useContext } from 'react';
import UserInfo from './UserInfo'

function UserProfile() {
    const userData = useContext(useContext)
    return <UserInfo  />;
}

export default UserProfile;
