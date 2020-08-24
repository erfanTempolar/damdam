import createComponent from './components/user/userPanel/createPRoduct/createProduct.vue'
import profile from './components/user/userPanel/profile/profile.vue'
import usersList from './components/user/userPanel/usersList/usersList.vue'
export const routes=[
    {path:'/userPanel/createProduct',component:createComponent},
    {path:'/userPanel',component:profile},
    {path:"/userPanel/usersList",component:usersList}
]