import { Carousel} from '@mantine/carousel';
import { Center, Image, Space, Text } from "@mantine/core";
import Slider1 from "../../../assets/image1.png";
import Slider2 from "../../../assets/image3.png";

const image = [
    {
      src: Slider1,
      title: "Welcome Back!",
      text: "start managing your finance faster and better",
   
    },
    {
        src: Slider2,
        title: "Welcome Back!",
        text: "start managing your finance faster and better",
     
      }
  ];
  
export function Slider() {
  return (
    <Carousel
    sx={{ maxWidth: 700}}
    mx="auto"
    loop
    withIndicators
    height={700}
    
    >
     {image.map((item) => {
        return (
          <Carousel.Slide id={item.src}>
            <Image src={item.src} />
            <Center>
              <div>
                <Text size="lg" weight={"normal"}>
                  {item.title}
                </Text>
                <Space h="xs" />
                <Text size="lg" c="dimmed" weight={"normal"}>
                  {item.text}
                </Text>
              </div>
            </Center>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
export default Slider