import Bestil from"./homeImage/Bestil.png";
import Butikker from"./homeImage/Butikker.png";
import Tilmed from"./homeImage/Tilmed.png";

const Info = () => {
    return ( 
        <section className="flex w-3/5 justify-center justify-between m-auto">
        <article className="flex-col justify-center w-1/4">
            <div className="flex">
                <img src={Bestil} alt="" />
                <h5 className="font-bold">Bestil et salgstjek</h5>
            </div>
            <p className="pt-3">
            Med et Din Mægler Salgstjek 
            bliver du opdateret på værdien 
            af din bolig.
            </p>
        </article>
        <article className="flex-col  justify-center w-1/4">
            <div className="flex">
                <img src={Butikker} alt="" />
                <h5 className="font-bold">74 butikker</h5>
            </div>
            <p className="pt-3">
            Hos Din Mægler er din bolig 
            til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark..
            </p>
        </article>
        <article className="flex-col  justify-center w-1/4">
            <div className="flex">
                <img src={Tilmed} alt="" />
                <h5 className="font-bold">Tilmeld køberkartotek</h5>
            </div>
            <p className="pt-3">
            Når du er tilmeldt vores køberkartotek, 
            bliver du kontaktet inden en ny bolig bliver annonceret.
            </p>
        </article>
        
    </section>
     );
}
 
export default Info;