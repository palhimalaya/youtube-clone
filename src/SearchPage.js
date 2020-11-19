import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage">
                <div className="searchPage__filter">
                    <TuneOutlined/>
                    <h2>FILTER</h2>
                </div>

                <hr/>
                <ChannelRow
                 image="https://yt3.ggpht.com/ytc/AAUvwnjEDJWYaIksia0vpqmF1_jPxZz4oYeNnPG6zs-IBw=s48-c-k-c0xffffffff-no-nd-rj-mo"
                 channel="BLACKPINK ♪"
                 subs="53.3M"
                 noOfVideos="322"
                 description="BLACKPINK Official YouTube Channel 블랙핑크 공식 유튜브 채널입니다. JISOO, JENNIE, ROSÉ, LISA 지수, 제니, 로제, 리사."
              
                
                
                 
                />
                <hr/>
                <VideoRow
               title="BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V"
               views="1.3B views"
               timestamp="2 years ago"
               channel="BLACKPINK ♪"
               image="https://i.ytimg.com/vi/IHNzOHi8sJs/mqdefault.jpg?at=AJ4vme6KYN1GBfYc1KtTi52ifUt1%3A1605764095389"
               description="BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ 보란 듯이 무너졌어 바닥을 뚫고 저 지하까지 옷 끝자락 잡겠다고 저 높이 두 손을 뻗어봐도 다시 ."
            
                />
                <VideoRow
               title="BLACKPINK - 'How You Like That' M/V"
               views="649M views"
               timestamp="4 months ago"
               subs="53.3M"
               description="BLACKPINK - 'How You Like That' 보란 듯이 무너졌어 바닥을 뚫고 저 지하까지 옷 끝자락 잡겠다고 저 높이 두 손을 뻗어봐도 다시 ."
               channel="BLACKPINK ♪"
               image="https://i.ytimg.com/vi/ioNng23DkIM/mqdefault.jpg?at=AJ4vme71vwtW3ofiNDq9yNwHuyvF%3A1605765342149"
                />
                <VideoRow
                title="BLACKPINK - '불장난 (PLAYING WITH FIRE)' M/V"
                views="584M views"
                timestamp="4 years ago"
                description="BLACKPINK - '불장난 (PLAYING WITH FIRE)' 보란 듯이 무너졌어 바닥을 뚫고 저 지하까지 옷 끝자락 잡겠다고 저 높이 두 손을 뻗어봐도 다시 ."
                channel="BLACKPINK ♪"
                image="https://i.ytimg.com/vi/9pdj4iJD08s/mqdefault.jpg?at=AJ4vme7c2298tqNRsvDV8OjYZJDZ%3A1605780635674"
                />
                <VideoRow
               title="Nora Fatehi | India's Best Dancer VLOG"
               views="2.1M views"
               timestamp="1 month ago"
               description="Nora Fatehi | VLOG"
               channel="Nora Fatehi"
               image="https://i.ytimg.com/vi/qRYWp5VZhZk/mqdefault.jpg?at=AJ4vme5G0pkL41P_DgRdyRdGurn2%3A1605765550292"

                />

            </div>
            
        </div>
    )
}

export default SearchPage
