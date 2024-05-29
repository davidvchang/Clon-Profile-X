import React from 'react'
import Portada from '../assets/img/Portada.webp'
import PhotoProfile from '../assets/img/FotoPerfil.webp'
import Info from './ui/Info'
import Follows from './ui/Follows'
import Categorie from './ui/Categorie'
import Publication from './ui/Publication'
import PhotoPortfolio from '../assets/img/Publications/Portafolio_Portada.webp'
import PhotoPelisDev from '../assets/img/Publications/PelisDev.webp'

function Profile() {
  return (
    <section className='profile'>
        <button className='bottonTop'>
            {iconBack}
            <div className='NamePostsNum'>
                <span className='NameBottonTop'>David Valenzuela</span>
                <span className='PostsBottonTop'>7 posts</span>
            </div>
        </button>

        <div className='Portada'>
            <img src={Portada} alt="Foto de portada"/>

            <div className='PhotoButtonEditProfile'>
                <div className='ProfilePhoto'>
                    <img src={PhotoProfile} alt="Foto de perfil" />
                </div>

                <button className='editProfile'>
                    <span>Edit profile</span>
                </button>
            </div>
        </div>

        <div className='NameUser'>
            <span className='Name'>David Valenzuela</span>
            <span className='User'>@DavidChangDev</span>
        </div>

        <span className='profesion'>Programador | Desarrollador Web Front - End</span>

        <div className='UbicationInfo'>
            <Info icon={iconPin} text='Sinaloa, México'/>
            <div className='Info'>
                {iconLink}
                <a href="https://beacons.ai/davidvalenzuelac/">beacons.ai/davidvalenzuelac</a>
            </div>
            <Info icon={iconCalendar} text='Joined April 2024'/>
        </div>

        <div className='FollowersFollowing'>
            <Follows link='#' num='16' text='Following'/>
            <Follows link='#' num='1' text='Follower'/>
        </div>

        <div className='categories'>
            <Categorie text='Posts'/>
            <Categorie text='Replies'/>
            <Categorie text='Highlights'/>
            <Categorie text='Articles'/>
            <Categorie text='Media'/>
            <Categorie text='Likes'/>
        </div>

        <Publication iconPinPosted={iconPinPublication} textPinOrPosted='Pinned' FotoPerfil={PhotoProfile} name='David Valenzuela' user='@DavidChangDev' date='Apr 16' 
                    description='¡Hola a todos! Les comparto mi portafolio web en el cual he desarrollado pequeños proyectos para mejorar mis conocimientos,  
                    este portafolio está hecho en React y Tailwind🚀.
                    Me encantaría recibir sus comentarios y sugerencias.¡Échale un vistazo!
                    ⬇
                    https://davidvalenzuela.vercel.app'
                    photo={PhotoPortfolio}
                    NumView='74'
                    />

        <Publication FotoPerfil={PhotoProfile} name='David Valenzuela' user='@DavidChangDev' date='Apr 16' 
                    description='Estoy realizando una pagina de películas (Solo el front  End) en la cual puedes ver las películas mas populares, 
                    puedes elegir la categoría a mostrar, etc. Me estoy basando en el diseño de la pagina de cuevana, 
                    realizo esto para desarrollar mis habilidades sobre el consumo de API'
                    photo={PhotoPelisDev}
                    NumView='34'
                    />

    </section>
  )
}

const iconBack = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 iconBack">
<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

const iconPin = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconsInfo">
<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

const iconCalendar = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconsInfo">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

const iconLink = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconsInfo">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>

const iconPinPublication = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pin iconPinOrRepost">
    <line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>
</svg>





export default Profile