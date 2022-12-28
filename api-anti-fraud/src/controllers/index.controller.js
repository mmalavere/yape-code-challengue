import {pool} from '../db.js'

export const health = async (req, res) => {

    try{
        const [result] = await pool.query('SELECT 1 as result')

        if(result[0].result === 1) {
            res.json('ok')
        } else {
            res.json('ko')
        }
        
    }catch(error){
        res.json('Database Connection Error')
    }

    
    
    
}