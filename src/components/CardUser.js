import '../styles/CardUser.css';
import location from '../images/location.svg'
import office from '../images/offices-buildings.svg'
import school from '../images/university.svg'

function CardUser (props) {
    const { name, user, position, city, state, country, company, institute, image } = props.user;
    return (
        <div className='CardUser'>
            <div className='up'></div>
            <div className='down'>
                <img src={image} alt="Imagem de usuário" />
                <div className='info-user-up'>
                    <h3>{name}</h3>
                    <h4>@{user}</h4>
                    <p>{position}</p>
                </div>
                <div className='info-user-down'>
                    <div className='point'>
                        <img src={location} alt="icon" className='icon' />
                        {city}/{state} - {country}
                    </div>
                    <div className='group-points'>
                        <div className='point'>
                        <img src={office} alt="icon" className='icon' />
                            {company}
                        </div>
                        <div className='point'>
                            <img src={school} alt="svg" className='icon' />
                            {institute}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUser;