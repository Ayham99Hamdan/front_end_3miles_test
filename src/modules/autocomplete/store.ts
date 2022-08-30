import addressService from "./services";
const store = {
    state:  {
        search_value: '',
        result: [],
        selectedAddress: null
    },
    getters: {
        result(state : any){
            return state.result;
        },
        query(state: any){
            return state.search_value;
        }
    },
    mutations: {
        setDataResult(state: any, data: Array<any>){
            state.result = data;
        },

        setSearchValue(state: any , search_value: string){
            state.search_value = search_value;
        },

        emptyResult(state: any){
            state.result.length = 0;
        }
    },
    actions: {
        async searchAddress(context: any){
             const data = await addressService.search(context.state.search_value);
            context.commit('setDataResult' , data.data);
        }
    },
}

export default store;