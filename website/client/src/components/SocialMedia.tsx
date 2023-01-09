import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const SocialMedia = () => {
    return (
        <div className='socialMedia'>
            <h2>Intagram</h2>
            <div className='posts'>
                <div className="post">
                    <InstagramEmbed
                        url="https://www.instagram.com/p/Cmjn0WIIEUk/?hl=es"
                        width={328}
                        height={550}
                        captioned
                    />
                </div>
                <div className="post">
                    <InstagramEmbed
                        url="https://www.instagram.com/p/CmjMw6xMMwK/?hl=es"
                        width={328}
                        height={550}
                        captioned
                    />
                </div>
                <div className="post">
                    <InstagramEmbed
                        url="https://www.instagram.com/reel/CmGP20Pgeyh/?hl=es"
                        width={328}
                        height={550}
                        captioned
                    />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
