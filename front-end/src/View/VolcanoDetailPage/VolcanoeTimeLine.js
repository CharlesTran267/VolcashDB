import { Legend, Title } from 'chart.js';
import React from 'react';
import {Chart, Line} from 'react-chartjs-2';
import './DetailPage.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import TimeLine from './TimeLine';
import AFEtimeGraph from './AFEtimeLine';
import OverviewTimeLine from './OverviewTimeLine';
import MenuDropDown from './MenuDropDown';
import { useEffect } from 'react';
import axios from 'axios';
import * as constants from '../../Constants'
import EruptionTimeLineForYearBP from './EruptionTimeLineForYearBP';
import AFEtimeLineForYearBP from './AFETimeLineForYearBP';





const VolcanoTimeLine = (props) => {
  const proxy = constants.PROXY
  const [eruptions,setEruptions] = useState([])
  const [volcanoes, setVolcanoes] = useState([]);
  const [c,setC] = useState(0)
  const [AFE,setAFE] = useState([])
  const [AFEData,setAFEData] = useState([])
  const [EruptionData,setEruptionData] = useState([])




      useEffect(() =>{

      axios.get(`${proxy}/volcanoes/getEruptions`)
      .then(data =>{
       setEruptions(data.data['eruptions'])
      })
      axios.get(`${proxy}/volcanoes/getVolcanoes2`)

          .then(response => {
            if(response.data.success){
              setVolcanoes(response.data.volcanoes)
            } else{
              alert("Failed to fetch data")
            }
          })	

          axios.get(`${proxy}/volcanoes/getAFE`)
          .then(data =>{
            setAFE(data.data.afes)
          }).catch(err=>console.log(err))
         
	},[])



let volc_num = 0
  for(let i=0;i<volcanoes.length;i++){
      if(volcanoes[i].volc_name === props.vol){
        volc_num = volcanoes[i].volc_num
      }
  }

useEffect(()=>{
  let a = []
    if(AFE.length != 0){
    for(let i =0;i<12;i++){
      if(AFE[i]['volc_num'] === volc_num){
      let s = AFE[i]['afe_date'].substr(0,4) + '.' + AFE[i]['afe_date'].substr(5,7);
      a.push({x: parseFloat(s),y:5});
      }
  }
    }
setAFEData(a);

},[AFE])
  



let TaalEruptionYear = [];
try{
for(let i=0;i<eruptions.length;i++){
  if(eruptions[i]['volc_name'] === props.vol && eruptions[i]['ed_stime'] && eruptions[i]['ed_etime'] ){
  let s = eruptions[i]['ed_stime'].substr(0,4) + '.' + eruptions[i]['ed_stime'].substr(5,7);
  let e = eruptions[i]['ed_etime'].substr(0,4) + '.' + eruptions[i]['ed_etime'].substr(5,7);

    if(parseFloat(s) !== parseFloat(e)){
    TaalEruptionYear.push({s:parseFloat(s),e:parseFloat(e)})
    }
    else{
      TaalEruptionYear.push({s:parseFloat(s),e:parseFloat(e)+1})
    }

  }
}
}
catch{

  for(let i=0;i<eruptions.length;i++){
    if(eruptions[i]['volc_name'] === props.vol && eruptions[i]['ed_yearsBP'] && eruptions[i]['ed_yearsBP'] ){
    let s = eruptions[i]['ed_yearsBP'];
    let e = eruptions[i]['ed_yearsBP_unc'];
    
      if(parseFloat(s) !== parseFloat(e)){
      TaalEruptionYear.push({s:parseFloat(s),e:parseFloat(e)})
      }
      else{
        TaalEruptionYear.push({s:parseFloat(s),e:parseFloat(e)+1})
      }
  
    }
  }
}



const TaalData = [];



let EndYearData =[];




for(let i=0;i<TaalEruptionYear.length;i++){
  let p = {
    x: TaalEruptionYear[i].s,
    y: 10
  }
  TaalData.push(p);
}


for(let i=0;i<TaalEruptionYear.length;i++){
  let p = {
    x: TaalEruptionYear[i].e,
    y: 10
  }
  TaalData.push(p);
}

TaalData.sort((a,b) => a.x > b.x && 1 || -1 )




const PassTaalData = () =>{

  return TaalData;
}

const PassEndYear = () => {
  return EndYearData;
}

const [list,setList] = useState(['9','10']);
const [gData,setgData] = useState([]);


  const onGetData = (yD,yU) =>{
    if(props.vol !== 'Toba' && props.vol !== 'On-take' && props.vol !== 'Kelut' && props.vol !== 'Chillán, Nevados de' && props.vol !== 'Soufrière Guadaloupe' && props.vol!== 'St. Helens' ){
    let list = [];

    for(let i = Math.floor(yD);i<=Math.floor(yU);i++){
      for(let j=0.01;j<=0.12;j+=0.01){
        if(j===0.01){
          list.push(i+j)
        }
        else{ 
        list.push(i+j);
        }
      }
    }
    setList([...list]);
    }
    else {
      let list = [];
    for(let i = Math.floor(yD);i<=Math.floor(yU);i+=100){
      list.push(i);
    }
    setList([...list]);
    }
  }




  const onUp = (yD,yU) => {
    var l = [];
    for(let i = Math.floor(yD);i<=Math.floor(yU);i++){
      for(let j=0;j<0.12;j+=0.01){
        l.push(i+j);
        
      }
    }
    
    setList([...l]);
  }
 


  const AddLable = () => {
    
    return list;
  }

  const AddGraphData = () => {
    return gData;
  }


const getDummyData = () =>{
    return AFEData;
  }




const redirectPage = () =>{
  
}

let OverviewTL;
// const [EruptionOption,setEruptionOption] = useState(OverviewTL);
// let AFETL ;



// let OverviewTL;

if (props.vol !== 'Toba' && props.vol !== 'On-take' && props.vol !== 'Kelut' && props.vol !== 'Chillán, Nevados de' && props.vol !== 'Soufrière Guadaloupe' && props.vol!== 'St. Helens' ){
   OverviewTL = <OverviewTimeLine 
  onPassVolcName = {() =>{return props.vol}}
    onPassData = {onGetData}
    onGetTaalData = {() =>{return TaalData}}
    onGetTaalEruptionEndYear = {PassEndYear}
    onGetDummyAFEData = {getDummyData}
 
  />;
}
else{
  OverviewTL = <EruptionTimeLineForYearBP
  onPassVolcName ={() =>{return props.vol}}
  onPassData = {onGetData}
  onGetTaalData = {PassTaalData}
  onGetTaalEruptionEndYear = {PassEndYear}
  onGetDummyAFEData = {getDummyData}
/>
}

  let DecadeTL = <TimeLine 
  onPassData = {onUp}
  onGetTaalData = {() => {return TaalData}}
  onGetDummyAFEData = {getDummyData}
/>;

// const [AFEtimeGraph,setAFEtimeGraph]= useState(
//  <AFEtimeGraph
// ll = {AddLable}
// dt = {AddGraphData}
// onGetTaalData = {()=>{return TaalData}}
// onGetTaalEruptionEndYear = {PassEndYear}
// onGetAFEData = {()=>{return AFEData}}
// /> );

  const [EruptionOption,setEruptionOption] = useState(OverviewTL);
  
  let AFETL ;
  if(props.vol !== 'Toba' && props.vol !== 'On-take' && props.vol !== 'Kelut' && props.vol !== 'Chillán, Nevados de' && props.vol !== 'Soufrière Guadaloupe' && props.vol!== 'St. Helens' ){
    AFETL = <AFEtimeGraph
    tagsRef ={props.tagsRef} 
    handleSearch={props.handleSearch} 
    selectedTags={props.selectedTags}
    ll = {AddLable}
    dt = {AddGraphData}
    onGetTaalData = {()=>{return TaalData}}
    onGetTaalEruptionEndYear = {PassEndYear}
    onGetAFEData = {getDummyData}
    onGetVolcNum = {()=>{return volc_num}}
    onGetVolcName = {()=>{return props.vol}}
    />
  }
  else{
    AFETL = <AFEtimeLineForYearBP
    tagsRef ={props.tagsRef} 
    handleSearch={props.handleSearch} 
    selectedTags={props.selectedTags}
    ll = {AddLable}
    dt = {AddGraphData}
    onGetTaalData = {()=>{return TaalData}}
    onGetTaalEruptionEndYear = {PassEndYear}
    onGetAFEData = {getDummyData}
    onGetVolcNum = {()=>{return volc_num}}
    onGetVolcName = {()=>{return props.vol}}
    />
  }
 
const ChangeGraph = (choice) => {
  if(choice === 'overview' && props.vol === 'Toba' || props.vol === 'On-take' || props.vol === 'Kelut' || props.vol === 'Chillán, Nevados de' || props.vol === 'Soufrière Guadaloupe' || props.vol === 'St. Helens' ){
    setEruptionOption(<EruptionTimeLineForYearBP
      onPassVolcName ={() =>{return props.vol}}
      onPassData = {onGetData}
      onGetTaalData = {PassTaalData}
      onGetTaalEruptionEndYear = {PassEndYear}
      onGetDummyAFEData = {getDummyData}
    />);
  }
  else if(choice === 'decade' && props.vol === 'Toba'){

  }
  else if(choice === 'overview' ){
    setEruptionOption(<OverviewTimeLine 
      onPassVolcName ={() =>{return props.vol}}
      onPassData = {onGetData}
      onGetTaalData = {PassTaalData}
      onGetTaalEruptionEndYear = {PassEndYear}
      onGetDummyAFEData = {getDummyData}

    />);
  }  
  else if(choice === 'decade'){

    setEruptionOption(<TimeLine 
      onPassData = {onUp}
      onGetTaalData = {() => {return TaalData}}
      onGetTaalEruptionEndYear = {PassEndYear}
      onGetDummyAFEData = {() => {return AFEData}}
      onGetVolcNum = {() => {return volc_num}}
    />);
  }
  
}
// let imgPath

// volcanoes.map(volc=>(volc.volc_name == vol?(imgPath = volc.imgURL):null))


      return (
      <div style = {{width:(7.2/10)*window.screen.availWidth}}>  
          
            <div style = {{width:'100%'}}>
              {/* <div>
                <MenuDropDown onChangeGraph = {ChangeGraph} />
              </div> */}
              
                {EruptionOption}
            </div>
            <div >
          
          
            {AFETL}
            </div>
        </div>
    );
}

export default VolcanoTimeLine;
