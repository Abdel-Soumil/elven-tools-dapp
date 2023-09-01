import React, {  useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VideoAnimation = () => {
    const IntroVideoRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        videoRef.current.currentTime = 0;

        ScrollTrigger.create({
            trigger: IntroVideoRef.current,
            start: 'top center',
            fastScrollEnd:true,
            endTrigger:"",

            invalidateOnRefresh:true,

            onUpdate: function (self) {
                if (videoRef.current) {
                    const scrollPos = self.progress;
                    const s = IntroVideoRef.current.getBoundingClientRect();
                    console.log(s);
                    const videoDuration = videoRef.current.duration;
                    const videoCurrentTime = videoDuration * scrollPos;
                    if (videoCurrentTime) {
                        videoRef.current.currentTime = videoCurrentTime;
                        var translate = (550*scrollPos);
                        if(translate>0 && translate<550){
                            translate+=100
                        }
                        console.log(translate)
                        videoRef.current.style.transform= `translate(0,${translate}px)`
                        
                    }

                    // console.log(videoDuration, scrollPos, videoCurrentTime)
                }
            },
        })
    }, [videoRef]);

    return (
        <div className="vidContainer" ref={IntroVideoRef} style={{
            "width": "100%",
            "height": "500px"
        }}>
            <video
                className="video"
                playsInline
                webkit-playsinline="true"
                ref={videoRef}
                muted
                style={{
                    "width": "100%",
                    "height": "auto",
                    "transition":"transform 33s0ms ease-in-out;"
                }}


            >
                <source
                    src="/globe.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
}
