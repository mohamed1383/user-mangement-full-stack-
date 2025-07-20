import React from 'react'
import Menu from '@/components/menu/menu';
import Inputs from '@/components/addUserPage/inputs';

export default function AddUserPage({active} : {active: any}) {
  return (
    <div>
      <Menu activeBtn={active}></Menu>
      <Inputs></Inputs>
    </div>
  )
}

export async function getServerSideProps(context : any) {

    console.log(context.resolvedUrl)
  
    let activeBtn 

    if(context.resolvedUrl == "/addUserPage"){
        activeBtn = false
    }

    return {
      props: {
        active: activeBtn
      },
    };
  }
  