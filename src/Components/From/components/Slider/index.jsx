import { Carousel} from '@mantine/carousel';
import { Center, Image, Space, Text } from "@mantine/core";
import Slider1 from "../../../assets/image1.png";
import Slider2 from "../../../assets/image2.jfif";
import Slider3 from "../../../assets/image3.jpg";
const image = [
    {
      src: Slider1,
      title: "Welcome to Back!",
      text: "start managing your finance faster and better",
      sunText: "start managing your finance faster and better",
    },
    {
        src: Slider2,
        title: "Welcome to Back!",
        text: "start managing your finance faster and better",
        sunText: "start managing your finance faster and better",
      },
      {
        src: Slider3,
        title: "Welcome to Back!",
        text: "start managing your finance faster and better",
        sunText: "start managing your finance faster and better",
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
                <Text size="sm" c="dimmed" weight={"normal"}>
                  {item.text}
                </Text>
                <Text size="xs" c="dimmed" weight={"normal"}>
                  {item.sunText}
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