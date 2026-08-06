import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Rigorous AI Model Evaluation",
  desc: "We conduct comprehensive assessments of AI solutions including performance benchmarking, cost analysis, and integration feasibility. Our methodology helps enterprises identify the best fit for their specific use cases.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Model Performance Analysis",
      desc: "Deep benchmarking of accuracy, latency, and resource requirements.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Cost-Benefit Assessment",
      desc: "Evaluate total cost of ownership versus business value delivery.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Risk & Compliance Review",
      desc: "Assess security, privacy, and regulatory implications.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Enterprise Implementation Strategy",
  desc: "Beyond evaluation, we guide enterprises through AI selection, implementation planning, and change management. Our strategic recommendations ensure successful AI integration across your organization.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Technology Roadmapping",
      desc: "Create phased implementation plans aligned with business goals.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Enterprise Integration Support",
      desc: "Navigate architecture, infrastructure, and system integration challenges.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Team Enablement & Training",
      desc: "Build organizational capability for successful AI adoption.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
