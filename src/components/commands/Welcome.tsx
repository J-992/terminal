import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/global.styles";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
.----------------------------------------------------.
|                                                    |
|   ▄▄▌ ▐ ▄▌▄▄▄ .▄▄▌   ▄▄·       • ▌ ▄ ·. ▄▄▄ .▄▄    |
|   ██· █▌▐█▀▄.▀·██•  ▐█ ▌▪▪     ·██ ▐███▪▀▄.▀·██▌   |
|   ██▪▐█▐▐▌▐▀▀▪▄██▪  ██ ▄▄ ▄█▀▄ ▐█ ▌▐▌▐█·▐▀▀▪▄▐█·   |
|   ▐█▌██▐█▌▐█▄▄▌▐█▌▐▌▐███▌▐█▌.▐▌██ ██▌▐█▌▐█▄▄▌.▀    |
|    ▀▀▀▀ ▀▪ ▀▀▀ .▀▀▀ ·▀▀▀  ▀█▄▀▪▀▀  █▪▀▀▀ ▀▀▀  ▀    |
|                                                    |
'----------------------------------------------------'

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

.------------------------------------.
|                                    |
|   ░█░█░█▀▀░█░░░█▀▀░█▀█░█▄█░█▀▀░█   |
|   ░█▄█░█▀▀░█░░░█░░░█░█░█░█░█▀▀░▀   |
|   ░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀   |
|                                    |
'------------------------------------'
            
              
            `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my portfolio but in a terminal (Version 1.0).</div>
        <div>
          I was bored of making a website with a nice looking UI, 
          so I made this instead. Hope you enjoy!
        </div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/J-992/terminal">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`                                                       
  +**=-.                      
  #%#*+=-.                    
  .##=---==                   
  .%#--===**                  
  .%#=--=*#%=                 
   .=+====+#%:=  :-====-=#++. 
  :#=--=****%@%##****=--=#%#: 
  +%=---=+**%%#***+#*=+*%=.   
  =%*=--=*+=#+**++*++*#+.     
  .#%%##%#-.-*+==-=++         
   :+###=.  #%*+**#+          
           :%%@%*=            
            :..             
          `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
