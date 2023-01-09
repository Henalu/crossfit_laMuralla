import React from 'react'
// Video
import running from '../videos/running.mp4'
// IMG
import clean from '../img/clean.jpg'
import wallball from '../img/wall-ball.jpg'
import kettlebellBW from '../img/kettlebell-bw.jpg'


const TheBox = () => {
  return (
    <div className='thebox'>
      <div className='video-container'>
        <video src={running} autoPlay loop muted />
        <div className='layer'>
          <article>
            <h2>Instalaciones</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie ligula vel sem ullamcorper hendrerit. Aenean facilisis dictum enim, nec hendrerit dolor interdum placerat.</p>
          </article>
        </div>
      </div>

      <section className='box-info-container'>
        <article className='info-intro'>
          <h2>Nuestro Box</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie ligula vel sem ullamcorper hendrerit. Aenean facilisis dictum enim, nec hendrerit dolor interdum placerat. Vivamus sed ultricies orci. Pellentesque gravida venenatis suscipit. Sed commodo volutpat nunc in cursus. Suspendisse potenti.</p>
          <br />
          <p>Nulla tortor mi, porta quis lorem a, vulputate pretium lectus. Quisque justo lectus, commodo id feugiat et, venenatis faucibus lorem. Morbi lacus ante, faucibus eu sodales sit amet, imperdiet id ipsum. Fusce ex leo, finibus sed metus in, vulputate elementum mauris.</p>
        </article>

        <div className='box-info'>
          <div className='img-container' style={{ backgroundImage: `url(${clean})` }}></div>
          <article>
            <h3>Material</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie ligula vel sem ullamcorper hendrerit. Aenean facilisis dictum enim, nec hendrerit dolor interdum placerat.</p>
          </article>
        </div>
        <div className='box-info'>
          <article>
            <h3>Maquinas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie ligula vel sem ullamcorper hendrerit. Aenean facilisis dictum enim, nec hendrerit dolor interdum placerat.</p>
          </article>
          <div className='img-container' style={{ backgroundImage: `url(${wallball})` }}></div>
        </div>
        <div className='box-info'>
          <div className='img-container' style={{ backgroundImage: `url(${kettlebellBW})` }}></div>
          <article>
            <h3>Espacio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie ligula vel sem ullamcorper hendrerit. Aenean facilisis dictum enim, nec hendrerit dolor interdum placerat.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default TheBox