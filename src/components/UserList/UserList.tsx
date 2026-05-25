import type { User } from '../../types';
interface UserListProps {
    users: User[];
}


export default function UserList({ users }: UserListProps) {
    return (<>
        <ul>
            { users.map(user => {
                return (<li>{ user.name }</li>);
            }) }</ul></>)
    }