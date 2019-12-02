import React from "react";
import Videoplayer from "./assets/videoplayer.jpg";
import CompaArte from "./assets/compaarte.jpg";
import Portfolio from "./assets/portfolio.jpg";

const WorksData = [
  {
    image: Videoplayer,
    hrefDemo: "https://crwn-wear.herokuapp.com/",
    hrefCode: "https://github.com/OpoliccioO/crown-clothing",
    titleWork: "CRWN Wear",
    infoApp: (
      <p>
        Creada con <em>creat-react-app</em>, utiliza Firebase como{" "}
        <em>back-end</em> y <em>hosted</em> en Heroku
      </p>
    ),
    description:
      "E-commerce de ropa. Dispone de autenticación, tanto propia, como con una cuenta de Google. La app provee: homepage, shop, shop/:categoria, signin y checkout.",
    tecnologies: [
      "HTML5",
      "CSS3",
      "Sass",
      "React.js",
      "Firebase",
      "React Stripe Checkout",
      "React Router",
      "Redux",
      "Redux Logger",
      "Redux Persist",
      "Redux Saga",
      "Reselect"
    ]
  },
  {
    image: Videoplayer,
    hrefDemo: "https://policciovideoplayer.netlify.com",
    hrefCode: "https://github.com/OpoliccioO/Videoplayer",
    titleWork: "React VideoPlayer",
    infoApp: (
      <p>
        Creada con <em>creat-react-app</em> y <em>hosted</em> en Netlify
      </p>
    ),
    description:
      "'Clon' de una lista de reproducción de Youtube. La lista de reproducción consta de dos funcionalidades: Marcar el video como visto (10s visulizados) y inicio automático del siguiente video. Se guardar el estado de la lista de reproducción, el video actual y  los videos vistos",
    tecnologies: [
      "HTML5",
      "CSS3",
      "React.js",
      "React Player",
      "React Router",
      "Styled Components"
    ]
  },
  {
    image: CompaArte,
    hrefDemo: "https://compaarte.netlify.com",
    hrefCode: "https://github.com/OpoliccioO/compaarte",
    titleWork: "CompaArte",
    infoApp: (
      <p>
        Creada con <em>creat-react-app</em> y <em>hosted</em> en Netlify.{" "}
        <strong>Actualmente en desarollo</strong>
      </p>
    ),
    description:
      "Red social para artistas, donde poder intercambiar conocimientos, mejorar proyectos añadiendo nuevas características o iniciar proyectos conjuntos con artistas de diferentes modalidades (ej. ilustrador y filólogo para crear un cuento infantil)",
    tecnologies: [
      "HTML5",
      "CSS3",
      "React.js",
      "React Spring",
      "Bootstrap",
      "React Fontawesome",
      "Formik",
      "Yup",
      "LodashEs",
      "React Use Gesture"
    ]
  },
  {
    image: Portfolio,
    hrefDemo: "#",
    hrefCode: "https://github.com/OpoliccioO/portfolio",
    titleWork: "Mi portfolio",
    infoApp: (
      <p>
        Creada con <em>creat-react-app</em> y <em>hosted</em> en Netlify
      </p>
    ),
    description: "Mi portfolio personal. Página web actual",
    tecnologies: [
      "HTML5",
      "CSS3",
      "React.js",
      "React Spring",
      "React Fontawesome",
      "React Use Gesture",
      "Styled Components",
      "Typed.js"
    ]
  }
];

export default WorksData;
