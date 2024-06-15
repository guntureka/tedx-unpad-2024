import React from 'react'
import {auth} from '@/auth'

import { getTicketByUserId } from '@/actions/ticket'
import { Metadata } from 'next'
import { getProfileByUserId } from '@/actions/profile'
import { redirect } from 'next/navigation'
import BuyTicketForm from '@/components/buy-ticket/buy-ticket-form'

export const metadata: Metadata ={
    title:"Buy Ticket"
};


const BuyTicket = async () => {
    
    const session = await auth()
    if (!session){
        return null;
    }
    const profile = await getProfileByUserId(session.user.id!)
    if(profile?.address === null 
    || profile?.affiliate === null
    || profile?.age === null
    || profile?.reference === null
    || profile?.interest === null){
        redirect('/profile'),
        alert('Complete your profile! ')
    }

  return (
    <main>
      <main className='flex min-h-screen w-full flex-col px-10 py-40 lg:px-20'>
        <div className="flex w-full flex-col space-y-14 sm:px-10 md:px-13 xl:px-32" >
          <BuyTicketForm />
        </div>
      </main>
    </main>
  )
}

export default BuyTicket