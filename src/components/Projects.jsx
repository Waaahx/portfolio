import { FaKissWinkHeart, FaUbuntu, FaRobot, FaTerminal, FaCarSide, FaHeart, FaLinux, FaRocket } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";



import Project from "../components/Generic/Project";
import { GitHub, Skript, Java, Javascript, HTML, CSS, NodeJS, _React, MySql, Golang, Python, Gitea, Rust, Shell, Tailwind } from "../components/Generic/Tag";

const Bisou = () => (
  <Project
    name="Bisou"
    description="Bisou est un plugin Minecraft développer pour les versions 1.12* qui permet d'envoyer de l'amour aux autres joueurs au travers de bisous. Une version en Java l'autre en Skript, ce plugin est dors et déjà utilisé sur le serveur d'une des plus grande équipe française !"
    Logo={<FaKissWinkHeart />}
    tags={<><Skript /><Java /></>}
    project={null}
  />
);

const WebOs = () => (
  <Project
    name="WebOs"
    description="WebOs est une application web qui permet d'exécuter des commandes Shell directement depuis un navigateur et permet à l'utilisateur une plus grande customisation."
    Logo={<FaUbuntu />}
    tags={<><Javascript /><HTML /><CSS /><GitHub /></>}
    project={"https://github.com/Waaahx/webOS"}
  />
);

const Endobot = () => (
  <Project
    name="Endobot"
    description="Endobot est un robot Discord qui permet de répondre à des commandes spécifiques, d'envoyer des images customisées à l'arrivée d'un nouveau membre et de gérer des inscriptions à des événements. Développé pour une association."
    Logo={<FaRobot />}
    tags={<><Javascript /><NodeJS /></>}
    project={""}
  />
);

const MCbuilder = () => (
  <Project
    name="Minecraft Server Builder"
    description={"Minecraft server builder est un outil utile qui permet de créer un nouveau serveur local en un seul clic ! Il permet d'éviter de faire manuellement les étapes de téléchargements du .jar, création de dossier et modification de l'EULA. Il est très utile dans mon cas car j'ai besoin d'avoir des serveurs différents à portée de main rapidement pour d'autres projets de dev"}
    Logo={<FaTerminal />}
    tags={<><Shell /><GitHub /></>}
    project={"Loisir"}
  />
);

const SmartRoad = () => (
  <Project
    name="SmartRoad"
    description="SmartRoad est un projet que j'ai réaliser au sein de mon cursus Zone01. C'est un algorithme en Rust qui gère le trafic de voitures automatisées qui circulent dans une intersection. Il permet de gérer les feux de circulation, les priorités et les arrêts des véhicules."
    Logo={<FaCarSide />}
    tags={<><Rust /><Gitea /></>}
    project={"Projet de fin d'étude"}
  />
);

const Uwuid = () => (
  <Project
    name="Uwuid"
    description="Uwuid est un outil qui permet de générer des UUIDs rigolo de manière simple et rapide."
    Logo={<FaHeart />}
    tags={<><Golang /><GitHub /></>}
    project={"Loisir"}
  />
);

const Myls = () => (
  <Project
    name="MyLs"
    description="MyLs est projet que j'ai réaliser au sein de mon cursus Zone01. C'est un programme qui reproduit la commande 'ls' de Linux. Il permet de lister les fichiers et dossiers d'un répertoire, de les trier par date, taille ou nom, et de les afficher dans un format lisible."
    Logo={<IoTerminal />}
    tags={<><Golang /><Gitea /></>}
    project={"Loisir"}
  />
);

const NetCat = () => (
  <Project
    name="NetCat"
    description="NetCat est un outil qui permet de créer un serveur ou un client TCP/UDP de manière simple et rapide. Il permet à plusieurs utilisateurs de communiquer entre eux en temps réel."
    Logo={<FaLinux />}
    tags={<><Golang /><Gitea /></>}
    project={"Loisir"}
  />
);

const DiscordBuilder = () => (
  <Project
    name="Discord Bot Builder"
    description="Discord Bot Builder est un outil utile qui permet de créer un nouveau projet de bot discord en un seul clic ! Il permet d'éviter de faire manuellement les étapes de téléchargements de la dernière version de NodeJS, du téléchargement des librairies NPM discordJS et canvas. et de création des fichiers de bases."
    Logo={<FaRobot />}
    tags={<><Shell /><GitHub /></>}
    project={"Loisir"}
  />
);

const Up = () => (
  <Project
    name="Up"
    description="Up est un logiciel de type CRM développé pendant mes 2 ans d'alternance au Campus Saint Marc. Il permet de gérer les étudiants, les entreprises et les offres d'alternance. Il est développé en ReactJS, NodeJS et MySQL."
    Logo={<FaRocket />}
    tags={<><Javascript /><_React /><Tailwind /><NodeJS /><GitHub /><MySql /></>}
    project={"Loisir"}
  />
);

const Portfolio = () => (
    <Project
      name="Portfolio"
      description="Et voici mon portfolio, mon projet que j'ai développer pour vous présentez tous les autres !"
      Logo={<MdOutlinePermIdentity />}
      tags={<><Javascript /><_React /><Tailwind /><NodeJS /><GitHub /></>}
      project={"Loisir"}
    />
  );



export const projects = [Up, WebOs, Bisou, Uwuid, Endobot, MCbuilder, DiscordBuilder, Myls, NetCat, SmartRoad, Portfolio];