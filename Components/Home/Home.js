import React from 'react';
import { Scroll } from '../ScrollDown/Scroll';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    return (
        <>
            {router.pathname === "/" &&
                <div className='position-relative'>
                    <Scroll />
                    <div className='bluredHeader position-relative overflow-hidden'>
                        <div className={`blur position-absolute`}>
                            {/* <video width="100%" height="100%" loop muted autoPlay className='homeVideo' id='bannerVideo'>
                                <source type="video/mp4" src={'/Assets/bg.mp4'} />
                            </video> */}
                            <video className='homeVideo' muted id='bannerVideo' autoPlay height={'100%'} width={'100%'} src="/Assets/bg.mp4" controls={false} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
