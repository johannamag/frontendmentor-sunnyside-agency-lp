import React from 'react'
import { zpatternItems as data } from '../data'

export default function ZPattern() {
  return (
    <div className='zpattern'>
        {data.map((item, index) => (
            <div key={index} className={`zpattern-items ${item.textLeft ? "" : "reverse"}`}>
                <div className="zpattern-text">
                    <h2 className="zpattern-headline">
                        {item.headline}
                    </h2>
                    <p className="zpattern-desc">{item.desc}</p>
                    <a href="#" className={`zpattern-link ${item.linkColor}`}>Learn more</a>
                </div>
                <div className="zpattern-img" style={{backgroundImage: `url(${window.innerWidth >= 768 ? item.imgDesktop : item.imgMobile})`}}>
                </div>
            </div>
        ))}
    </div>
  )
}
