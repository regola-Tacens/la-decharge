export default function proprio( ) {
    return(
        <div>
          <h2>Un mot sur le proprio...</h2><hr></hr>
          <p>
            <p className="proprio__answer">
            <div className="proprio__title">La Décharge ? c'est quoi ce nom ?</div><br></br>
            <p className="proprio__answer__text">
              La décharge est avant tout un lieu ou il m' est possible de litérallement "jeter" des idées en l'air.<br/>Souvent une idée ne vaut que l'instant durant laquelle elle se trouve en lévitation... <br/>
              Puis elle retombe.
            <br/>C'est aussi l'idée d'avoir un blog généraliste, sans frontière ni direction, ou tout sujet peut-être considéré, puis recyclé...
            </p>
            </p>
          </p>
        
          <p className="proprio__answer">
            <div className="proprio__title">Mon parcours étudiant</div><br></br>
            <p className="proprio__answer__text">
              Pendant des années, j'ai pu hésiter entre mon interêt pour les sciences, et mon interêt pour des matières plus artistiques.<br/>
              Après une formation en sciences dites "dures" à la Fac, je me suis tourné vers l'Architecture qui allie Art, esthétique et contraintes techniques.<br/>
              J'ai terminé mon parcours étudiant par une formation en communication visuelle, pour devenir graphiste
            </p>
          </p>

          <p className="proprio__answer">
            <div className="proprio__title">Ce que j'ai fait après</div><br></br>
            <p className="proprio__answer__text">
              J'ai commencé par le webdesign et le développement d'applications, vers 2002. Principalement à Marseille<br/>
              A partir de 2006 et jusqu'en 2021, j'ai excercé le métier de styliste sur la côte basque, pour des marques skate/surf<br/>
              Aujourd'hui, je reviens vers mon premier métier, celui de designer web, avec comme angle d'entrée celui de la polyvalence
            </p>
          </p>

          <style JSX>{`
          .proprio__title{
            display:inline;
            padding:0.2rem 0.6rem;
            margin-right:1rem;
            font-weight:bold;
            margin-bottom:1rem;
            color: var(--green-color);
            background-color:var(--dark-grey);
          }
          .proprio__answer{
            line-height: 1.5;
            padding:2rem;
            background-color:#EAE8FF;
            
          }
          .proprio__answer__text{
            margin-top:0.8rem;
          }
        `}</style>
            
        </div>
    )
}

