import '../style/Handbook.css'
import tin1 from '../assets/image/tin1.jpg'
import tin2 from '../assets/image/tin2.jpg'
import {MdArrowBackIos, MdOutlineNavigateNext} from 'react-icons/md'


function Handbook(){
    return(
        <div id="handbook">
            <div className='container-handbook'>
                <div className='item-handbook'>
                    <div className='img'>
                        <img src={tin1} alt="" />
                    </div>
                    <a className='title-item'>Thay thủy tinh thể bao nhiêu tiền? 
                        5 Địa chỉ thay Thủy tinh thể uy tín tại Hà Nội</a>
                </div>

                <div className='item-handbook'>
                    <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <a className='title-item'>Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                </div>  

                <button className='btn-back'> <MdArrowBackIos /> </button>
                <button className='btn-next'> <MdOutlineNavigateNext /> </button>
            </div>
        </div>
    )
}

export default Handbook