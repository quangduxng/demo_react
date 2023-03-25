import doctor from '../assets/image/Doctor.jpg'
import '../style/Doctors.css'
import {MdArrowBackIos, MdOutlineNavigateNext} from 'react-icons/md'
import ProductAddToCart from './ProductAddToCart'

function Doctor (){
    return (
        <div id="doctor">
            {/* <ProductAddToCart/> */}
            <div className="container-doctor">
                <p className="title-doctor"> Doctors </p>
                <div className="container-item">
                    <div className="doctor-item">
                        <img src={doctor} alt="" />
                        <hr />
                        <p className="name-doctor">Gennaro Weiner</p>
                        <p className="speciality-doctor">Cardiology</p>
                        <hr />
                        <button className='btn-booking'>Book now</button>
                    </div>

                    <div className="doctor-item">
                        <img src={doctor} alt="" />
                        <hr />
                        <p className="name-doctor">Gennaro Weiner</p>
                        <p className="speciality-doctor">Cardiology</p>
                        <hr />
                        <button className='btn-booking'>Book now</button>
                    </div>
                    
                    <div className="doctor-item">
                        <img src={doctor} alt="" />
                        <hr />
                        <p className="name-doctor">Gennaro Weiner</p>
                        <p className="speciality-doctor">Cardiology</p>
                        <hr />
                        <button className='btn-booking'>Book now</button>
                    </div>
                    
                </div>
                <button className='btn-back'> <MdArrowBackIos /> </button>
                <button className='btn-next'> <MdOutlineNavigateNext /> </button>
            </div>
            
        </div>
    )
}

export default Doctor