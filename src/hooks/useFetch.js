import { useState } from "react"
import axios  from "axios"


const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()

    // GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }
    // create 
    const createNewRegistre = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                setInfoApi([...infoApi, res.data])
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }
    
    // delete
    
    const deleteApiRegistre = (path , id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                const apiFilter = infoApi.filter(element => element.id !== id)
                setInfoApi(apiFilter)
            })
            .catch(err => console.log(err));
    }

    // update

    const updateRegistre = (path, id,data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
            .then(res => {
                console.log(res.data)
                const infoUpdate = infoApi.map(element => {
                    if (id === element.id) {
                        return data
                    } else {
                        return  element 
                    }
                })
                setInfoApi(infoUpdate)
            })
        .catch(err => console.log(err))
    }

    return [infoApi,getApi , createNewRegistre, deleteApiRegistre ,updateRegistre]
   
}

export default useFetch