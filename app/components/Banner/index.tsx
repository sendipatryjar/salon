"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';


const Banner = () => {

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                                Perawatan Kecantikan
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>Treatment Kecantikan yang memanjakan tubuhmu <br /> sekarang sudah hadir, dengan harga yang terjangkau.</p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'><Link href='#cook-section'>Ayo coba</Link></button>
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink'><Link href='#about-section'>Lihat Lainnya</Link></button>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                        {/* <div className='flex bg-yellow p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                            <Image src={'/images/Banner/pizza.svg'} alt="pizza-image" width={68} height={68} />
                            <p className='text-lg font-normal'>More than 500+ <br /> recipes.</p>
                        </div> */}
                        <Image src="/images/Banner/banner-image2.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
