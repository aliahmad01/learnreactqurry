// PURPOSE: Re-export all hooks from one place
// WHY: So components only need one clean import line
// USED IN: every component/page that needs data

// instead of:
// import { useUsers } from '../hooks/queries/useUsers'       ← messy
// import { useAddUser } from '../hooks/mutations/useAddUser' ← messy

// you just write:
// import { useUsers, useAddUser } from '../hooks'            ← clean!

export { useUsers }      from './queries/useUsers';
export { useUserById }   from './queries/useUserById';
export { useAddUser }    from './mutations/useAddUser';
export { useDeleteUser } from './mutations/useDeleteUser';