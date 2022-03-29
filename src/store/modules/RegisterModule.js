// import registerUser from "@/services/registerUser";


// const state ={
//    registerUsers:[]
// }
// const getters={
//     getAllData(){
//         return state.registerUsers;
//     }
// }
// const actions={
//   async getUser({commit}){
//       const data = await registerUser.user()
//       const responseDtaa = data.data
//       commit("accesDetails",responseDtaa)
//       console.log(responseDtaa)
//    },

//    async addNewuser({commit},resUser){
//        commit('addnewUserinData',resUser)
//        await registerUser.newUser(resUser)
//       // console.log(resUser)
//    }
// }
// const mutations ={
//     accesDetails(state,responseDtaa){
//         state.registerUsers=responseDtaa
      
//     },

//     addnewUserinData(state,newUserdata){
//        state.registerUsers.push(newUserdata)
//     }
// }

// export default{
//     state,
//     getters,
//     actions,
//     mutations
// }