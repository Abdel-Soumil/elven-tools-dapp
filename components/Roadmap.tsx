import { Box } from '@chakra-ui/react';
import React from "react";
import { roadmap } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';
import { VideoAnimation } from './VideoAnimation';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import Globe from "";
import 'react-vertical-timeline-component/style.min.css';

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;
  // const globeEl = useRef();
  return (
    <Box mt={32}>
      <HomeSectionTitle title="Roadmap" />
      <Box display="flex"
        justifyContent="space-between"

        mt={{ base: 8, xl: 12, '2xl': 24 }}>
        <Box style={{ "width": "50%" }}>
          <VerticalTimeline layout="1-column-right" lineColor={"linear-gradient(180deg, #160105 0%, #942627 31%, #983535 40%, #ba7508 96%)"}> 
            {roadmap.map((roadmapItem, index) => <VerticalTimelineElement key={`${index}-roadmap`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#151515', color: '#fff', boxShadow: "none" }}
              date="2011 - present"
              iconStyle={{ background: 'black', color: '#fff', "width": "25px", "height": "25px", "right": "8px", "top": "10px" }}
            >
              <Box className='vertical-timeline-element-title' display="flex"
                justifyContent="space-between">
                <h3 style={{ "color": "#fff", "fontWeight": "bold", "fontSize": "20px" }}>{roadmapItem.text}</h3>
                <div style={{ "color": "black", "fontWeight": "bold", "padding": "6px", "background": "#fff", "borderRadius": "6px", "fontSize": "12px" }}>{roadmapItem.title}</div>
              </Box>
              {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
              {roadmapItem.points.map((point, index) => <p key={`${index}-point`} style={{ "margin": "4px" }}>
                {point}
              </p>)}

            </VerticalTimelineElement>
            )}
          </VerticalTimeline>
        </Box>
        <Box width={"100%"} key={"globe"} display={"flex"}>
          <VideoAnimation/>
          {/* <Box as="video" src="/globe.mp4"  muted autoPlay style={{"margin":"auto"}} /> */}
        </Box> 
        </Box>



        {/* <SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={10}>
        {roadmap.map((roadmapItem, index) => (
          <RoadmapItem key={index} {...roadmapItem} />
        ))}
      </SimpleGrid> */}
      </Box >
      );
};
