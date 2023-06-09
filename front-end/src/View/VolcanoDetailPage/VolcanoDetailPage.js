import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import VolcanoTimeLine from './VolcanoeTimeLine';

const VolcanoDetailPage = (props)=> {


    

    const params = useParams()
    let volc = props.onGetVolcano()


    
    return (
        <VolcanoTimeLine vol = {volc[0].volc_name} tagsRef ={props.tagsRef} handleSearch={props.handleSearch} selectedTags={props.selectedTags}/>
    )
}

export default VolcanoDetailPage