import users from './users.json';


export const getUserByGuid = (guid) =>{
    return users.find(x=> x.guid === guid);
}

export const getAllUsers = ()=>{
  return users;
}