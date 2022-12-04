import {FC} from 'react';
import '../styles/Homescreen.css';


const HomeScreen: FC = () => {
  return (
    <div className="container">
      <h1 className={'nameText'}>Peter Calabrese</h1>
      <p className={"position"}>Full Stack Software Developer</p>
      <p className={"description"}>I'm an indie developer who finds excitement in solving problems of all different calibres. From creating a BestBuy inventory monitoring bot inorder to purchase a new GPU during a shortage, to building cross platform mobile applications, if there is a problem I love to find the solution. </p>
      
    </div>
  );
  
};

export default HomeScreen;
