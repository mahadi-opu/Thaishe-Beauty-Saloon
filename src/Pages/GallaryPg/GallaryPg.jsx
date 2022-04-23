import React from 'react';
import './GallaryPg.css'
import GallaryCard from "../../Components/Card/GallaryCard";
import galarypicture1 from '../../Assats/images/gallery/picture-1.png'
import galarypicture2 from '../../Assats/images/gallery/picture-2.png'
import galarypicture3 from '../../Assats/images/gallery/picture-3.png'
import galarypicture4 from '../../Assats/images/gallery/picture-4.png'


const GallaryPg = () => {
    return (
        <div className='GallaryPg'>
            <div className='container'>
                <div className="GallaryPg__wrapper">
                <GallaryCard
                     gallaryimg={galarypicture1}
                  />
                <GallaryCard
                     gallaryimg={galarypicture2}
                  />
                <GallaryCard
                     gallaryimg={galarypicture3}
                  />
                <GallaryCard
                     gallaryimg={galarypicture4}
                  />
                <GallaryCard
                     gallaryimg={galarypicture1}
                  />
                <GallaryCard
                     gallaryimg={galarypicture2}
                  />
                <GallaryCard
                     gallaryimg={galarypicture3}
                  />
                <GallaryCard
                     gallaryimg={galarypicture4}
                  />
                  <GallaryCard
                     gallaryimg={galarypicture1}
                  />
                <GallaryCard
                     gallaryimg={galarypicture2}
                  />
                <GallaryCard
                     gallaryimg={galarypicture3}
                  />
                <GallaryCard
                     gallaryimg={galarypicture4}
                  />
                </div>
            </div>
        </div>
    );
};

export default GallaryPg;