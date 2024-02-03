import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

function SocialMediaSliderItem({linkUrl}) {
    return (
        <div>
            <div style={{display:'flex', maxHeight: "580px" }}>
                <InstagramEmbed url={linkUrl} width={328} />
            </div>
        </div>
    )
}

export default SocialMediaSliderItem