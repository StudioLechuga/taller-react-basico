import { useState } from "react";

const initialState = {
    bill:0,
    tips:[
        {
            label:'5%',
            value:5,
            isActive:false
        },
        {
            label:'10%',
            value:10,
            isActive:false
        },
        {
            label:'15%',
            value:15,
            isActive:false
        },
        {
            label:'25%',
            value:25,
            isActive:false
        }
        ,{
           label:'50%',
              value:50,
                isActive:false

        },
        {
            label:'Custom',
            value:0,
            isActive:false
        }

    ],
    numberOfPeople:0,
}

const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const setActiveTip = (payload) => {

        const tips = state.tips.map(tip => {
            if(tip.label === payload.label){
                tip.isActive = true
            }else{
                tip.isActive = false
            }
            return tip
        })
        setState({
            ...state,
            tips
        })

    }
    const setBill = (payload) => {
        setState({
            ...state,
            bill:payload
        })
    }
    const setNumberOfPeople = (payload) => {
        setState({
            ...state,
            numberOfPeople:payload
        })
    }
    const setReset = () => {
        console.log('reset')
        setState({...initialState})
    }
const setCustomTip = (payload) => {

    const tips = state.tips.map(tip => {
        if(tip.label === 'Custom'){
            tip.value = payload
            tip.isActive = true
        }
        else{
            tip.isActive = false
        }
        return tip
    })
    setState({
        ...state,
        tips
    })

}
    return {state,setActiveTip,setBill,setNumberOfPeople,setReset,setCustomTip}
}

export default useInitialState;