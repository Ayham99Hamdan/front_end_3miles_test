import api from '@/axios';

class AddressService{

    search(search_value : string){
        return api.get('address/search' , {
            params: {
                search_value: search_value
            }
        }).then((res) => {
            return res.data;
        })
    }

}

const addressService = new AddressService();
export default addressService;