import callApi from '../helpers/apiHelper';
import { getFighterInfo } from '../components/fighterSelector';
import { createFighterPreview } from '../components/fighterPreview'

class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);

            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    

    async getFighterDetails(id) {
        // todo: implement this method
        // endpoint - `details/fighter/${id}.json`;
        try {
            const endpoint = `details/fighter/${id}.json`;
            const apiResult = await callApi(endpoint, 'GET');
            console.log('id '+ apiResult['_id']);
            console.log(JSON.stringify(apiResult));
            const fighterInf = getFighterInfo(apiResult['_id']);
            const prev = createFighterPreview(fighterInf, 'right');
            return prev;
          } catch (error) {
            throw error;
          }
        
    }


      
}

const fighterService = new FighterService();

export default fighterService;
