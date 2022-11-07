import { AlumnosMemDao } from "./alumnosMem.js"
import { AlumnosMongoDao } from "./alumnosMongoDao.js"

export class AlumnosFactoryDAO {
    
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                return new AlumnosMemDao
            case 'MONGO':
                return new AlumnosMongoDao
            default:
                return new AlumnosMemDao
        }
    }
}

