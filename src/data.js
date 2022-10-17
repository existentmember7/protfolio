export const projects = [
  {
    title: "Vehicles’ Intention Detection",
    subtitle: "Computer Vision Research Assistant in Digital and Robotic Construction (DARC) Lab",
    description:
      ["Developed algorithm for vehicle turn signal recognition at intersections and roadsides that achieved 80% accuracy."],
    image: "./project-1.gif",
    link: "https://www.youtube.com/watch?v=o1kk6lh-UYk",
  },
  {
    title: "Robot Arms Control",
    subtitle: "Course Project: Controlled robot arm to draw what a webcam sees in the view by ROS",
    description:
      ["- Utilized webcam to capture hand drawing and processed it as way points as a SVG file."
      ,"- Calculated the angles of every robot arm joints by inverse kinematic to reach each way point."],
    image: "./project-2.gif",
    link: "https://www.youtube.com/watch?v=9dyHZUbxACI",
  },
  {
    title: "2D and 3D Rebar Semantic Segmentation",
    subtitle: "Computer Vision Research Assistant: Image and Point Cloud Segmentation",
    description:
      ["- Referenced Unet and transformer-in-transformer module to develop a semantic segmentation model, TNTUnet."
      ,"- TNTUnet achieved 0.68 mIoU for detecting rebar spacings and intersections on rebar image dataset."
      ,"- Modified Point Transformer by adding domain adaptation concept to create new deep learning model, DAPT."
      ,"- DAPT was trained by labeled virtual data and unlabel real data to detect real rebar point cloud, achieving 74% accuracy."],
    image: "./project-3.gif",
    link: "https://drive.google.com/file/d/12zitbdBUkW74rh7G0sHaH4bJQtSB92Rk/view",
  },
  {
    title: "Applying Image Analytics in Construction Site for Safety Monitoring",
    subtitle: "Computer Vision Research Assistant: Object Detection and Multi-Object Tracking(MOT)",
    description:
      ["- Detected and tracked workers on construction sites by Faster R-CNN (object detection) and DeepSORT (MOT)."
      ,"- Obtained polygon by detected traffic cones to define hazard zone."
      ,"- Alerted when the workers go across the hazard zones."],
    image: "./project-4.gif",
    link: "https://drive.google.com/file/d/1gwTpcHV1hJJxjk1OHTUAa8eVVjESaGXb/view",
  },
  {
    title: "A Semantic Segmentation Model for Autonomous Driving",
    subtitle: "Course Project: Applied TNTUnet on street-view dataset",
    description:
      ["TNTUnet achieve 0.61 mIoU on public dataset KITTI."],
    image: "./project-4.gif",
    link: "https://www.youtube.com/watch?v=ZOYQyxzb7CM",
  },
  {
    title: "Taiwan Semiconductor Manufacturing Company (TSMC) - Intern Program",
    subtitle: "Internship (Full-time): Optimizing chillers control for energy efficiency",
    description:
      ["- Collected environmental and electricity data from semiconductor fabrication plants"
      ,"- Utilized fully connection neural networks and grid search to predicted the best setting temperatures of chillers."],
    image: "./project-4.gif",
    link: "",
  },
  {
    title: "Train Information and Management System",
    subtitle: "Software Engineer: Broadcast and Management of Voice Information",
    description:
      ["Developed train information announcement broadcasting and management system."],
    image: "./project-4.gif",
    link: "https://drive.google.com/file/d/1gwSo-0AD6bBx8WN9tycVK4WXnXnLQIsB/view?usp=sharing",
  },
  {
    title: "Web Retrieval and Mining Final Project Report – Restaurant Recommendation System",
    subtitle: "Group Member: Web crawling and recommandation system.",
    description:
      ["- Crawling the restaurant information from the Tripadvisor website."
      ,"- Constructing Vector Space Model and using jieba(term processing) to recommend suitable restaurants for the users."],
    image: "./project-4.gif",
    link: "https://github.com/existentmember7/restaurant_recommend_system",
  },
];

export const skills = [
  "Python",
  "C/C++",
  "C#",
  "SQL",
  "HTML",
  "JavaScript",
  "React",
  "Pytoch",
  "Keras",
  "Scikit",
  "Matpltlib"
];
