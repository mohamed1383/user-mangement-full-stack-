import React from 'react'
import Menu from '@/components/menu/menu';

export default function AddUserPage({active} : {active: any}) {
  return (
    <>
      <Menu activeBtn={active}></Menu>
    </>
  )
}

export async function getServerSideProps(context) {

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
  