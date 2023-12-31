
import Image from 'next/image'
import Link from 'next/link'
import React, { Children } from 'react'
import SvgBox from '../../../component/SvgBox'

export const metadata = {
    title: 'Login',
}

function page({children}) {
    return (
        <main className={'w-full flex h-[100vh] 2xl:container 2xl:mx-auto'}>
            <section className="welcome w-[68.25%] bg-slate-50 h-[100vh] hidden grow hero-pattern flex-wrap md:flex">
                <header className='w-full'>
                    <div className='logo pt-10 pl-10'>
                        <Link href={'./../'}>
                            <img src="https://dev-aria.com/img/logo.png" width={40} height={40} alt='Minimals' />
                        </Link>
                    </div>
                </header>
                <div className='h-[80vh] flex flex-wrap grow justify-center font-bold text-[32px] content-between'>
                    <div className="w-full flex justify-center">
                    <h3 className='w-2/3 flex justify-center text-[rgb(33,43,54)]'>Hi, Welcome back</h3>
                    </div>
                    <figure className='w-[54%] min-w-[400px]'>
                        <img src="./dash.png" alt="" />
                    </figure>
                    <div className='flex w-full justify-center items-center '>
                        <SvgBox />
                    </div>
                </div>
            </section>
            <section className="form md:w-[31.75%] w-full min-w-[400px] flex justify-center">
                {children}
            </section>
        </main>
    )
}

export default page