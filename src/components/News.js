import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
import BG from '../assets/image/news.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'

export default function News(){
    return(
        <>
        <Navbar />
        <Box 
            w='1100px' 
            mt={'130px'} 
            ml={'auto'}
            mr={'auto'}
            boxShadow='2xl' 
            rounded='md' 
            bg='white'  
            mb={'40'}
        >
            <Text as={'h1'}
            fontWeight={'bold'}
            fontSize={'35'}
            pt={'55'}
            ml={'20'}
            >
            Phòng chống trầm cảm sau sinh - Đơn giản và hiệu quả
            </Text>
            <Text
            fontSize={'20'}
            mr={'56'}
            ml={'88'}
            mt={'10'}
            w={'925px'}
            >
            Trầm cảm sau sinh là một vấn đề tương đối phổ biến, 
            ảnh hưởng từ 10% đến 15% phụ nữ sau khi sinh. 
            Biết cách phòng tránh bệnh từ sớm sẽ giúp cho sức khỏe của mẹ 
            và bé được ổn định và phát triển tốt hơn, tránh xảy ra những trường hợp 
            đáng tiếc.Trong nội dung dưới đây, 
            Bác sĩ Trần Thị Hồng Thu sẽ chia sẻ thêm các thông tin đến bạn đọc.
            </Text>
            <Image
            src={BG}
            mr={'auto'}
            ml={'auto'}
            mt={'15'}
            mb={'15'}
            />
            <Text
                fontSize={'20'}
                mr={'56'}
                ml={'88'}
                mt={'10'}
                w={'925px'}
            >
                Cứ 7 bà mẹ sau sinh (thường là những bà mẹ mới sinh lần đầu) thì sẽ có 1 người mắc chứng trầm cảm sau sinh. Đây là một dạng trầm cảm, mà khi mắc phải, người mẹ sẽ trở nên yếu đuối về tinh thần, thể chất lẫn cảm xúc. 
                Bệnh trầm cảm có thể xảy ra với tất cả phụ nữ trước sinh hoặc sau khi sinh, nhưng không phải ai cũng phát hiện hay ý thức được về bệnh.
                Phòng bệnh hơn chữa bệnh - nhận biết và phòng ngừa bệnh trầm cảm sau sinh sớm sẽ là cách tốt nhất, tránh nguy cơ mắc bệnh cũng như những ảnh hưởng xấu của bệnh.
            </Text>
            <Text
                fontSize={'20'}
                mr={'56'}
                ml={'88'}
                mt={'10'}
                w={'925px'}
            >
                Khi đăng ký Gói thai sản tại Trung tâm Sản phụ khoa BVĐK Tâm Anh, 
                cả mẹ và bé sẽ được chăm sóc chu đáo trong suốt thai kỳ cho đến khi vượt cạn. 
                Trung tâm được đầu tư, trang bị hệ thống máy móc tiên tiến như máy siêu âm 2D, 3D, 4D, 
                máy siêu âm Doppler màu cho phép tầm soát dị tật mạch máu ở tim và não thai nhi, máy siêu âm Voluson E10… 
                giúp phát hiện sớm rủi ro xảy đến trong thai kỳ. Hệ thống phòng khám, phòng sinh, phòng phẫu thuật, phòng hậu phẫu… 
                được vô trùng tuyệt đối. Phòng nội trú, phòng sau sinh được bố trí trang thiết bị, dịch vụ cao cấp, tiện nghi, giúp mẹ 
                và người thân luôn thoải mái như đang ở nhà mình.
            </Text>
            <br/>
            <br/>
            <br/>
        </Box>
        <Footer />
        </>
    )
}