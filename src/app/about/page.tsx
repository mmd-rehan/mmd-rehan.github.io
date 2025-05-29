import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing Games" },
    { hobby: "Watching Action" },
    { hobby: "Exploring new Technologies" },
    { hobby: "Developing Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">

        <Heading>
          Software Engineer And Web <br /> Developer, Based In UAE, Dubai.
        </Heading>

        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins bg-white text-xl w-full text-primary max-sm:text-lg">
            Hay i am Rehan - the full-stack wizard who codes like a storm and solves problems like a detective with a debugger. Based in the heart of Dubai, im a seasoned software engineer with roots in Pakistan, a degree in Computer Science, and battle scars from real-world tech wars.
            From taming CI/CD pipelines on Ubuntu with GitLab runners, to designing sleek Next.js frontends with Tailwind, to wrangling ZKTeco devices for attendance logs
            Rehan does it all.
            <br />
            <br />
            I led teams, mentored devs, architected apps, and even helped reshape EMR systems and insurance platforms across industries.
            my journey weaves through aviation tech at Amadeus, hybrid mobile apps in Flutter, microservices in Node.js, and even SEO-smart websites aligned with digital marketing goals. I dont just code i crafts, whether it's scalable infrastructure or user-friendly UIs.
            <br />
            <br />
            <i>
              Outside the terminal? I am a gamer, a binge-watcher, and a man who doesn’t mind a tough challenge — especially if it means learning something new.
            </i>
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
